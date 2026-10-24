const publications = [
    {
        id: 1,

        title:
            "BanglaCXR: A Two-Stage Vision-Language Pipeline for Bangla Chest X-Ray Radiology Report Generation",

        status:
            "Ongoing",

        stage:
            "Manuscript in Preparation",

        description:
            "An undergraduate thesis focused on generating chest X-ray radiology reports in clinical Bangla using an efficient two-stage vision-language pipeline.",

        github:
            "https://github.com/estkayon/BanglaCXR-Vision-Language-Report-Generation",

        details: [
            {
                label:
                    "Research Area",

                value:
                    "Computer Vision and Natural Language Processing",

                icon:
                    "research"
            },
            {
                label:
                    "Model Architecture",

                value:
                    "RAD-DINO, Phi-3.5 Mini and NLLB-200",

                icon:
                    "architecture"
            },
            {
                label:
                    "Model Efficiency",

                value:
                    "4-bit QLoRA on a single 8 GB GPU",

                icon:
                    "efficiency"
            },
            {
                label:
                    "Performance",

                value:
                    "0.8882 F1 and 0.9795 recall",

                icon:
                    "performance"
            }
        ]
    },

    {
        id: 2,

        title:
            "ClinAtt-X: An Intersample Attention and XGBoost Fusion Framework for Multi-Disease Clinical Classification",

        status:
            "Submitted",

        stage:
            "Under Review at ECCE",

        description:
            "A two-stage clinical classification model that combines MLP-based intersample attention with XGBoost to predict outcomes from structured medical records, outperforming the evaluated baseline models.",

        

        details: [
            {
                label:
                    "Research Area",

                value:
                    "Machine Learning for Clinical Decision Support",

                icon:
                    "research"
            },
            {
                label:
                    "Model Architecture",

                value:
                    "MLP-based intersample attention fused with XGBoost",

                icon:
                    "architecture"
            },
            {
                label:
                    "Validation",

                value:
                    "5-fold cross-validation, out-of-fold stacking and TreeSHAP",

                icon:
                    "efficiency"
            },
            {
                label:
                    "Performance",

                value:
                    "99.64% accuracy on hepatitis C SVR, 98.48% on heart attack",

                icon:
                    "performance"
            }
        ]
    }
];

export default publications;