import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Download, MessageSquareText, RotateCcw, X } from "lucide-react";

import contact from "../../data/contact";

// The Worker URL is public on purpose. The API key lives only inside the Worker.
const CHAT_URL =
    import.meta.env.VITE_CHAT_URL ||
    "https://ayon-portfolio-chat.estiakayon.workers.dev/chat";

const CV_PATH = "assets/files/Md_Estiak_Rahman_Ayon_CV.pdf";
const STORAGE_KEY = "ayon-chat-v1";
const MAX_CHARS = 800;
const MAX_HISTORY = 12;

const SUGGESTIONS = [
    "What are your strongest projects?",
    "Tell me about your MLOps experience",
    "What is your tech stack?",
    "Can I get your CV?"
];

const WELCOME = {
    role: "assistant",
    text: "Hi, I'm Ayon. Ask me about my projects, skills, research or experience. You can write in English or Bangla."
};

// Only these sites become clickable links. Anything else stays plain text.
const SAFE_LINK = /^https:\/\/(github\.com\/estkayon|estkayon\.github\.io|www\.linkedin\.com\/in\/md-estiak-rahman-ayon|www\.facebook\.com\/estkayon|www\.instagram\.com\/_ayooonx7|[a-z0-9-]+\.streamlit\.app|[a-z0-9-]+\.(estiakayon\.)?workers\.dev|[a-z0-9-]+\.pages\.dev)(\/|$)/i;
const URL_PATTERN = /(https?:\/\/[^\s)<>"']+)/g;

function loadMessages() {
    try {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
        if (Array.isArray(saved) && saved.length) return saved;
    } catch {
        // Storage can be blocked; start fresh.
    }
    return [WELCOME];
}

function saveMessages(messages) {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)));
    } catch {
        // Ignore storage errors.
    }
}

// Renders **bold** and safe links as React elements. No HTML is ever injected.
function renderInline(text, keyPrefix) {
    return text.split(/(\*\*[^*]+\*\*)/g).flatMap((piece, index) => {
        if (piece.startsWith("**") && piece.endsWith("**")) {
            return <strong key={`${keyPrefix}-b${index}`}>{piece.slice(2, -2)}</strong>;
        }

        // split() with a capture group puts every URL at an odd index
        return piece.split(URL_PATTERN).map((part, partIndex) => {
            if (partIndex % 2 === 0) return part;

            const url = part.replace(/[.,;:!?]+$/, "");
            const trailing = part.slice(url.length);
            if (!SAFE_LINK.test(url)) return part;

            return (
                <span key={`${keyPrefix}-${index}-${partIndex}`}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="interactive">
                        {url.replace(/^https:\/\//, "")}
                    </a>
                    {trailing}
                </span>
            );
        });
    });
}

function MessageText({ text }) {
    const lines = text.split("\n");
    const blocks = [];
    let list = [];

    const flushList = () => {
        if (list.length) {
            blocks.push(
                <ul key={`l${blocks.length}`}>
                    {list.map((item, index) => (
                        <li key={index}>{renderInline(item, `li${blocks.length}-${index}`)}</li>
                    ))}
                </ul>
            );
            list = [];
        }
    };

    lines.forEach((line, index) => {
        const bullet = line.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/);
        if (bullet) {
            list.push(bullet[1]);
            return;
        }
        flushList();
        if (line.trim()) {
            blocks.push(<p key={`p${index}`}>{renderInline(line, `p${index}`)}</p>);
        }
    });
    flushList();

    return blocks;
}

function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState(loadMessages);
    const [input, setInput] = useState("");
    const [busy, setBusy] = useState(false);

    const listRef = useRef(null);
    const inputRef = useRef(null);
    const abortRef = useRef(null);

    const cvUrl = `${import.meta.env.BASE_URL}${CV_PATH}`;

    useEffect(() => saveMessages(messages), [messages]);

    useEffect(() => {
        const list = listRef.current;
        if (list) list.scrollTop = list.scrollHeight;
    }, [messages, open]);

    useEffect(() => {
        if (!open) return;
        inputRef.current?.focus();

        const onKey = (event) => {
            if (event.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => () => abortRef.current?.abort(), []);

    const updateLast = (update) =>
        setMessages((current) => {
            const next = [...current];
            next[next.length - 1] = { ...next[next.length - 1], ...update(next[next.length - 1]) };
            return next;
        });

    async function send(rawText) {
        const text = rawText.trim();
        if (!text || busy) return;

        if (text.length > MAX_CHARS) {
            setMessages((current) => [
                ...current,
                { role: "assistant", text: `Please keep your message under ${MAX_CHARS} characters.`, error: true }
            ]);
            return;
        }

        // Only real turns go to the Worker: no welcome text, errors or empty replies.
        const history = [
            ...messages.filter((message) => !message.error && message.text && message.text !== WELCOME.text),
            { role: "user", text }
        ]
            .slice(-MAX_HISTORY)
            .map(({ role, text: messageText }) => ({ role, text: messageText }));

        setMessages((current) => [...current, { role: "user", text }, { role: "assistant", text: "", pending: true }]);
        setInput("");
        setBusy(true);

        const controller = new AbortController();
        abortRef.current = controller;

        try {
            const response = await fetch(CHAT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: history }),
                signal: controller.signal
            });

            if (!response.ok || !response.body) {
                let message = "Something went wrong. Please try again.";
                try {
                    const data = await response.json();
                    if (typeof data.error === "string") message = data.error;
                } catch {
                    // Keep the default message.
                }
                updateLast(() => ({ text: message, pending: false, error: true }));
                return;
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop();

                for (const line of lines) {
                    if (!line.startsWith("data:")) continue;
                    const payload = line.slice(5).trim();
                    if (payload === "[DONE]") continue;
                    try {
                        const { t } = JSON.parse(payload);
                        if (typeof t === "string") {
                            updateLast((last) => ({ text: last.text + t, pending: false }));
                        }
                    } catch {
                        // Ignore broken chunks.
                    }
                }
            }

            updateLast((last) => ({
                pending: false,
                text: last.text || "Sorry, I couldn't answer that. Please try again.",
                error: !last.text
            }));
        } catch (error) {
            if (error.name === "AbortError") return;
            updateLast(() => ({
                text: `I can't connect right now. Please try again, or email ${contact.email}.`,
                pending: false,
                error: true
            }));
        } finally {
            setBusy(false);
            abortRef.current = null;
        }
    }

    function reset() {
        abortRef.current?.abort();
        setBusy(false);
        setMessages([WELCOME]);
        inputRef.current?.focus();
    }

    const onlyWelcome = messages.length === 1;

    return (
        <div className="chat-root">
            <AnimatePresence>
                {open && (
                    <motion.section
                        className="chat-panel"
                        role="dialog"
                        aria-label="Chat with the AI version of Ayon"
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <header className="chat-head">
                            <div className="chat-avatar" aria-hidden="true">ER</div>
                            <div className="chat-title">
                                <strong>AI version of Ayon</strong>
                                <span>Answers from my portfolio. It can make mistakes.</span>
                            </div>
                            <button type="button" className="chat-icon-btn interactive" onClick={reset} aria-label="Start a new chat" title="New chat">
                                <RotateCcw size={15} aria-hidden="true" />
                            </button>
                            <button type="button" className="chat-icon-btn interactive" onClick={() => setOpen(false)} aria-label="Close chat">
                                <X size={16} aria-hidden="true" />
                            </button>
                        </header>

                        <div className="chat-messages" ref={listRef} aria-live="polite">
                            {messages.map((message, index) => {
                                const hasCv = message.role === "assistant" && message.text.includes("[[CV]]");
                                const text = message.text.replaceAll("[[CV]]", "").trim();

                                return (
                                    <div key={index} className={`chat-msg chat-msg-${message.role} ${message.error ? "chat-msg-error" : ""}`}>
                                        {message.pending ? (
                                            <span className="chat-typing" aria-label="Typing">
                                                <i /><i /><i />
                                            </span>
                                        ) : (
                                            <>
                                                {message.role === "assistant" ? <MessageText text={text} /> : <p>{text}</p>}
                                                {hasCv && (
                                                    <a href={cvUrl} download className="chat-cv interactive">
                                                        <Download size={15} aria-hidden="true" />
                                                        Download CV (PDF)
                                                    </a>
                                                )}
                                            </>
                                        )}
                                    </div>
                                );
                            })}

                            {onlyWelcome && (
                                <div className="chat-suggestions">
                                    {SUGGESTIONS.map((suggestion) => (
                                        <button key={suggestion} type="button" className="chat-chip interactive" onClick={() => send(suggestion)}>
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <form
                            className="chat-form"
                            onSubmit={(event) => {
                                event.preventDefault();
                                send(input);
                            }}
                        >
                            <label htmlFor="chat-input" className="chat-sr">Your message</label>
                            <textarea
                                id="chat-input"
                                ref={inputRef}
                                rows={1}
                                value={input}
                                maxLength={MAX_CHARS}
                                placeholder="Ask about my work…"
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" && !event.shiftKey) {
                                        event.preventDefault();
                                        send(input);
                                    }
                                }}
                            />
                            <button type="submit" className="chat-send interactive" disabled={busy || !input.trim()} aria-label="Send message">
                                <ArrowUp size={17} aria-hidden="true" />
                            </button>
                        </form>
                    </motion.section>
                )}
            </AnimatePresence>

            <button
                type="button"
                className={`chat-launcher interactive ${open ? "chat-launcher-open" : ""}`}
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? "Close chat" : "Chat with the AI version of Ayon"}
                aria-expanded={open}
            >
                {open ? <X size={20} aria-hidden="true" /> : <MessageSquareText size={20} aria-hidden="true" />}
                {!open && <span>Ask AI Ayon</span>}
            </button>
        </div>
    );
}

export default ChatWidget;