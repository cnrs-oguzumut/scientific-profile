/**
 * Content data for the scientific profile website
 * Organize all content in one place for easy maintenance
 */

const profileData = {
    personal: {
        name: "Oguz Umut SALMAN",
        title: "Chargé de Recherche - Centre National Research Scientifique (CNRS)",
        email: "oguzumut.salman@cnrs.fr",
        website: "https://cnrs-oguzumut.github.io/scientific-profile/",
        photo: "./assets/images/photo.png"
    },

    education: [
        {
            degree: "Ph.D. in Physics",
            period: "09.2005 – 06.2009",
            institution: "Université Pierre et Marie Curie, Paris, FRANCE (Mention Très Honorable)"
        },
        {
            degree: "M.Sc. in Materials Science and Nano-Objects",
            period: "09.2004 – 09.2005",
            institution: "Ecole Polytechnique, Palaiseau, FRANCE (Mention Très Honorable)"
        },
        {
            degree: "B.S. in Physics",
            period: "09.2000 – 06.2004",
            institution: "Istanbul Technical University, Physics Department, Istanbul, TURKEY (Honour List)"
        }
    ],

    experience: [
        {
            position: "CNRS, Chargé de recherche",
            period: "01.2015 - PRÉSENT",
            description: "Chercheur - Centre National de la Recherche Scientifique (CNRS) en Mécanique, FRANCE."
        },
        {
            position: "CNR-IENI, Chercheur scientifique",
            period: "09.2013 - 09.2015",
            description: "Chercheur Post-Doctoral - CNR-IENI Milano, ITALIE. Subvention avancée du Conseil européen de la recherche : Effets de taille sur la rupture et la plasticité."
        },
        {
            position: "Harvard University, Post-doc",
            period: "10.2012 - 09.2013",
            description: "Chercheur Post-Doctoral - The Aisenberg Biomineralization and Biomimetic Laboratory, Harvard University, USA."
        },
        {
            position: "Bosphorus University, Post-doc",
            period: "10.2011 - 10.2012",
            description: "Chercheur Post-Doctoral - Département de physique sous la supervision de M. Mungan."
        },
        {
            position: "École Polytechnique, Post-doc",
            period: "06.2009 - 10.2011",
            description: "Chercheur Post-Doctoral - Laboratoire de mécanique des solides (LMS), École Polytechnique, FRANCE."
        }
    ],

    researchAreas: [
        {
            title: "Plasticité Cristalline",
            images: ["./assets/images/high.png", "./assets/images/cv123020.png"],
            description: "Développement de modèles théoriques et numériques de la plasticité cristalline aux petites échelles, en utilisant des théories de type Landau et la théorie des champs de phase pour décrire l'évolution des dislocations et des déformations."
        },
        {
            title: "Fracture et Matériaux Architecturés",
            images: ["./assets/images/turb-0.png"],
            description: "Modélisation de la propagation de la fracture dans les matériaux et de son application aux structures architecturées, en particulier les matériaux poreux et les films minces."
        },
        {
            title: "Transitions de Phase Solide-Solide",
            images: ["./assets/images/kanka.png"],
            description: "Étude de la dynamique de la migration des joints de grains et des transformations de phase à l'échelle atomique en utilisant des simulations stochastiques à dynamique sur-amortie."
        },
        {
            title: "Nano-Matériaux",
            images: ["./assets/images/pillier.png"],
            description: "Exploration des propriétés mécaniques et de la plasticité des nano-matériaux, en particulier dans le cadre de collaborations internationales sur les nano-cristaux et les verres métalliques."
        }
    ],

    teaching: [
        "Université Sorbonne Paris Nord (2015-2022) : Enseignement de la mécanique avancée en Master.",
        "Université de Lund (Suède) (2022-2025) : Professeur invité, mécanique avancée en Master.",
        "École d'été franco-roumaine de mathématiques appliquées (Sinaia, Roumanie, 2018) : Professeur invité."
    ],

    documents: [
        {
            title: "Curriculum Vitae",
            description: "CV complet avec liste des publications et activités de recherche",
            icon: "document",
            color: "blue",
            downloads: [
                { label: "PDF (Français)", file: "./assets/images/CV_claud_v3.pdf", filename: "CV_Salman_FR.pdf" },
                { label: "PDF (English)", file: "./assets/images/CV_claud_v3.pdf", filename: "CV_Salman_EN.pdf" }
            ]
        },
        {
            title: "Manuscrit HDR",
            description: "Habilitation à Diriger des Recherches - Manuscrit complet",
            icon: "book",
            color: "green",
            downloads: [
                { label: "Télécharger PDF", file: "./assets/images/Manuscipt.pdf" }
            ]
        },
        {
            title: "Projet de Recherche",
            description: "Présentation des axes de recherche actuels et futurs",
            icon: "lightbulb",
            color: "purple",
            downloads: [
                { label: "Télécharger PDF", file: "./assets/images/Research_Statement_Salman.pdf" }
            ]
        }
    ],

    software: [
        {
            title: "NanoPDF for macOS",
            icon: "📄",
            description: "A native macOS application to securely compress your PDF files. Powered by Ghostscript, NanoPDF offers professional compression while ensuring your data stays on your machine (100% offline processing).",
            borderColor: "border-blue-500",
            links: [
                { label: "Download on Ko-fi", url: "https://ko-fi.com/s/bd1e3fd34d", color: "bg-purple-500 hover:bg-purple-600 text-white" },
                { label: "Learn More →", url: "https://cnrs-oguzumut.github.io/NanoPDF_APP/", color: "bg-gray-200 hover:bg-gray-300 text-gray-800" }
            ]
        },
        {
            title: "LaTeX & BibTeX Tools for macOS",
            icon: "📊",
            description: "Automate tedious journal submission tasks. Batch-rename figures to match their order in your manuscript (Fig1, Fig2...) and format BibTeX references with abbreviated author and journal names. 100% offline.",
            borderColor: "border-purple-500",
            links: [
                { label: "Download on Ko-fi", url: "https://ko-fi.com/s/3ccc0c085c", color: "bg-purple-500 hover:bg-purple-600 text-white" },
                { label: "Learn More →", url: "https://cnrs-oguzumut.github.io/latex-bibtex-tools_APP/", color: "bg-gray-200 hover:bg-gray-300 text-gray-800" }
            ]
        }
    ]
};

// Export for use in other modules (if using ES6 modules)
// export default profileData;
