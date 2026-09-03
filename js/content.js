/**
 * Bilingual content for the scientific profile.
 * Every user-facing string is either a plain string (language-neutral:
 * names, citations, venues) or an object { fr, en }.
 */

const T = {
    fr: {
        role: "Chargé de recherche",
        affiliation: "CNRS — Laboratoire des Sciences des Procédés et des Matériaux (LSPM)",
        tagline: "Plasticité cristalline, transitions de phase et rupture — modélisation théorique et numérique aux petites échelles.",
        email: "Courriel",
        website: "Site",
        nav: {
            research: "Recherche",
            career: "Parcours",
            publications: "Publications",
            conferences: "Conférences",
            teaching: "Enseignement",
            software: "Logiciels",
            documents: "Documents",
            visual: "Visualisation"
        },
        sections: {
            research: "Axes de recherche",
            career: "Parcours",
            positions: "Postes",
            education: "Formation",
            publications: "Publications",
            preprints: "Pré-publications",
            published: "Articles publiés",
            conferences: "Conférences",
            organisation: "Organisation scientifique",
            invited: "Conférences invitées (sélection)",
            teaching: "Enseignement & encadrement",
            courses: "Enseignement",
            funding: "Contrats de recherche",
            supervision: "Encadrement",
            current: "En cours",
            completed: "Achevés",
            internships: "Stages",
            software: "Logiciels",
            softwareMine: "Mes logiciels",
            softwareLiked: "Logiciels que j'apprécie",
            documents: "Documents",
            visual: "Visualisation interactive"
        },
        ui: {
            search: "Rechercher un titre, un auteur, une revue…",
            allYears: "Toutes les années",
            results: n => `${n} référence${n > 1 ? "s" : ""}`,
            noResults: "Aucune publication ne correspond.",
            clear: "Réinitialiser",
            top: "Haut de page",
            download: "Télécharger",
            openFull: "Ouvrir en pleine page",
            since: "depuis",
            printCv: "Imprimer cette page",
            podcast: "Podcast",
            podcastBy: "généré avec",
            cleverghost: "CleverGhost"
        },
        pubIntro: "Dans toutes mes publications, j'ai contribué à la conception et à la mise en œuvre de la recherche, à l'analyse des résultats, au développement du code numérique et à la rédaction du manuscrit. La plupart des résultats ont été obtenus à partir de mes bibliothèques de code existantes.",
        visualIntro: "Visualisation interactive du paysage d'énergie sur un réseau carré."
    },
    en: {
        role: "Research Scientist (Chargé de recherche)",
        affiliation: "CNRS — Laboratory of Process and Materials Sciences (LSPM)",
        tagline: "Crystal plasticity, phase transitions and fracture — theory and numerical modelling at small scales.",
        email: "Email",
        website: "Website",
        nav: {
            research: "Research",
            career: "Career",
            publications: "Publications",
            conferences: "Conferences",
            teaching: "Teaching",
            software: "Software",
            documents: "Documents",
            visual: "Visualisation"
        },
        sections: {
            research: "Research areas",
            career: "Career",
            positions: "Appointments",
            education: "Education",
            publications: "Publications",
            preprints: "Preprints",
            published: "Published articles",
            conferences: "Conferences",
            organisation: "Scientific organisation",
            invited: "Invited talks (selection)",
            teaching: "Teaching & supervision",
            courses: "Teaching",
            funding: "Research grants",
            supervision: "Supervision",
            current: "Ongoing",
            completed: "Completed",
            internships: "Internships",
            software: "Software",
            softwareMine: "My software",
            softwareLiked: "Software I like",
            documents: "Documents",
            visual: "Interactive visualisation"
        },
        ui: {
            search: "Search a title, author or journal…",
            allYears: "All years",
            results: n => `${n} reference${n > 1 ? "s" : ""}`,
            noResults: "No publication matches.",
            clear: "Reset",
            top: "Back to top",
            download: "Download",
            openFull: "Open full page",
            since: "since",
            printCv: "Print this page",
            podcast: "Podcast",
            podcastBy: "generated with",
            cleverghost: "CleverGhost"
        },
        pubIntro: "In all of my publications I contributed to the design and execution of the research, the analysis of the results, the development of the numerical code and the writing of the manuscript. Most results were obtained with my existing code libraries.",
        visualIntro: "Interactive visualisation of the energy landscape on a square lattice."
    }
};

const DATA = {
    personal: {
        name: "Oguz Umut Salman",
        email: "oguzumut.salman@cnrs.fr",
        website: "https://cnrs-oguzumut.github.io/scientific-profile/",
        photo: "./assets/images/photo.png"
    },

    research: [
        {
            title: { fr: "Plasticité cristalline", en: "Crystal plasticity" },
            images: ["./assets/images/high.png", "./assets/images/cv123020.png"],
            text: {
                fr: "Développement de modèles théoriques et numériques de la plasticité cristalline aux petites échelles, en utilisant des théories de type Landau et la théorie des champs de phase pour décrire l'évolution des dislocations et des déformations.",
                en: "Theoretical and numerical models of crystal plasticity at small scales, using Landau-type theories and phase-field theory to describe the evolution of dislocations and deformation."
            }
        },
        {
            title: { fr: "Rupture et matériaux architecturés", en: "Fracture and architected materials" },
            images: ["./assets/images/turb-0.png"],
            text: {
                fr: "Modélisation de la propagation de la fracture dans les matériaux et de son application aux structures architecturées, en particulier les matériaux poreux et les films minces.",
                en: "Modelling of fracture propagation and its application to architected structures, in particular porous materials and thin films."
            }
        },
        {
            title: { fr: "Transitions de phase solide-solide", en: "Solid-solid phase transitions" },
            images: ["./assets/images/kanka.png"],
            text: {
                fr: "Étude de la dynamique de migration des joints de grains et des transformations de phase à l'échelle atomique par des simulations stochastiques à dynamique sur-amortie.",
                en: "Dynamics of grain boundary migration and phase transformations at the atomic scale, studied with overdamped stochastic dynamics simulations."
            }
        },
        {
            title: { fr: "Nano-matériaux", en: "Nano-materials" },
            images: ["./assets/images/pillier.png"],
            text: {
                fr: "Exploration des propriétés mécaniques et de la plasticité des nano-matériaux, en particulier dans le cadre de collaborations internationales sur les nano-cristaux et les verres métalliques.",
                en: "Mechanical properties and plasticity of nano-materials, in particular through international collaborations on nano-crystals and metallic glasses."
            }
        }
    ],

    positions: [
        {
            role: { fr: "Chargé de recherche", en: "Research Scientist" },
            org: "CNRS",
            period: "2015 —",
            text: {
                fr: "Centre National de la Recherche Scientifique, section Mécanique, France.",
                en: "Centre National de la Recherche Scientifique, Mechanics section, France."
            }
        },
        {
            role: { fr: "Chercheur post-doctoral", en: "Postdoctoral researcher" },
            org: "CNR-IENI, Milan",
            period: "2013 — 2015",
            text: {
                fr: "Subvention avancée du Conseil européen de la recherche : effets de taille sur la rupture et la plasticité. Italie.",
                en: "ERC Advanced Grant: size effects on fracture and plasticity. Italy."
            }
        },
        {
            role: { fr: "Chercheur post-doctoral", en: "Postdoctoral researcher" },
            org: "Harvard University",
            period: "2012 — 2013",
            text: {
                fr: "Aisenberg Biomineralization and Biomimetic Laboratory, États-Unis.",
                en: "Aisenberg Biomineralization and Biomimetic Laboratory, USA."
            }
        },
        {
            role: { fr: "Chercheur post-doctoral", en: "Postdoctoral researcher" },
            org: "Boğaziçi University",
            period: "2011 — 2012",
            text: {
                fr: "Département de physique, sous la supervision de M. Mungan. Turquie.",
                en: "Department of Physics, under the supervision of M. Mungan. Turkey."
            }
        },
        {
            role: { fr: "Chercheur post-doctoral", en: "Postdoctoral researcher" },
            org: "École Polytechnique",
            period: "2009 — 2011",
            text: {
                fr: "Laboratoire de mécanique des solides (LMS), France.",
                en: "Solid Mechanics Laboratory (LMS), France."
            }
        }
    ],

    education: [
        {
            degree: { fr: "Habilitation à diriger des recherches", en: "Habilitation à diriger des recherches (HDR)" },
            period: "2026",
            org: "Université Sorbonne Paris Nord — ÉD Galilée, LSPM",
            note: {
                fr: "« Mechanics of Displacive Instabilities in Solids ». Jury présidé par D. Gratias ; rapporteurs A. Vattré et M. Mungan, rapporteuse M. Montagnat.",
                en: "“Mechanics of Displacive Instabilities in Solids.” Jury chaired by D. Gratias; referees A. Vattré, M. Mungan and M. Montagnat."
            }
        },
        {
            degree: { fr: "Doctorat en physique", en: "Ph.D. in Physics" },
            period: "2005 — 2009",
            org: "Université Pierre et Marie Curie, Paris",
            note: { fr: "Mention très honorable", en: "Highest honours" }
        },
        {
            degree: { fr: "Master — Science des matériaux et nano-objets", en: "M.Sc. Materials Science and Nano-Objects" },
            period: "2004 — 2005",
            org: "École Polytechnique, Palaiseau",
            note: { fr: "Mention très honorable", en: "Highest honours" }
        },
        {
            degree: { fr: "Licence de physique", en: "B.Sc. in Physics" },
            period: "2000 — 2004",
            org: "Istanbul Technical University",
            note: { fr: "Liste d'honneur", en: "Honour list" }
        }
    ],

    teaching: [
        {
            fr: "Université Sorbonne Paris Nord (2015–2022) : mécanique avancée en Master.",
            en: "Université Sorbonne Paris Nord (2015–2022): advanced mechanics, Master's level."
        },
        {
            fr: "Université de Lund, Suède (2022–2025) : professeur invité, mécanique avancée en Master.",
            en: "Lund University, Sweden (2022–2025): visiting professor, advanced mechanics, Master's level."
        },
        {
            fr: "École d'été franco-roumaine de mathématiques appliquées (Sinaia, Roumanie, 2018) : professeur invité.",
            en: "French–Romanian summer school in applied mathematics (Sinaia, Romania, 2018): invited lecturer."
        }
    ],

    funding: [
        {
            name: "ANR-FWF — Super-Glasses",
            role: { fr: "Responsable de projet", en: "Principal investigator" },
            text: {
                fr: "Nanoengineering metallic glasses through chemical and structural heterogeneities. 2 thèses + 2 post-docs financés pour le LSPM, collaboration avec M. Ghidelli et P. Djemia (LSPM). +50 k€ pour le LSPM, 300 k€ pour le partenaire autrichien C. Gammer (ESI, Leoben).",
                en: "Nanoengineering metallic glasses through chemical and structural heterogeneities. 2 Ph.D. positions + 2 postdocs funded at LSPM, with M. Ghidelli and P. Djemia (LSPM). +€50k for LSPM, €300k for the Austrian partner C. Gammer (ESI, Leoben)."
            }
        },
        {
            name: "MITI 80|PRIME — BE-ST",
            role: { fr: "Responsable de projet", en: "Principal investigator" },
            text: {
                fr: "Physical nature of the bending-to-stretching phase transition in semi-flexible fibre networks: from materials to cytoskeleton. 25 k€ + 1 thèse financée pour le LSPM, collaboration avec V. Lecomte (LIPhy). 03/2023 – 09/2026.",
                en: "Physical nature of the bending-to-stretching phase transition in semi-flexible fibre networks: from materials to cytoskeleton. €25k + 1 funded Ph.D. at LSPM, with V. Lecomte (LIPhy). 03/2023 – 09/2026."
            }
        },
        {
            name: "ANR — MESOCRYSP",
            role: { fr: "Partenaire, responsable de l'équipe LSPM", en: "Partner, LSPM team leader" },
            text: {
                fr: "Discrete mesoscale plasticity. 450 k€ pour le LSPM, collaboration avec PMMH et le Centre des Matériaux. 11/2021 – 09/2025.",
                en: "Discrete mesoscale plasticity. €450k for LSPM, with PMMH and Centre des Matériaux. 11/2021 – 09/2025."
            }
        },
        {
            name: "ANR-JCJC — ALIS",
            role: { fr: "Responsable de projet", en: "Principal investigator" },
            text: {
                fr: "Modelling of reconstructive phase transformations through atomistically informed Landau theory with infinite symmetry. 160 k€ pour le LSPM. 03/2020 – 01/2024.",
                en: "Modelling of reconstructive phase transformations through atomistically informed Landau theory with infinite symmetry. €160k for LSPM. 03/2020 – 01/2024."
            }
        },
        {
            name: "ANR-FWF — NANOFILM",
            role: { fr: "Responsable d'un axe", en: "Work-package leader" },
            text: {
                fr: "Nanoarchitected films for unbreakable flexible electronics. Budget total 572 k€, dont 142 k€ pour le LSPM ; collaboration avec PPRIME-CNRS et ESI Leoben (Autriche). Responsable du modèle de champ de phase pour la rupture des films minces, encadrement d'un post-doc. 03/2021 – 03/2024.",
                en: "Nanoarchitected films for unbreakable flexible electronics. Total budget €572k, of which €142k for LSPM; with PPRIME-CNRS and ESI Leoben (Austria). Led the phase-field model for thin-film fracture and supervised one postdoc. 03/2021 – 03/2024."
            }
        },
        {
            name: "ANR-PRCI — SUMMIT",
            role: { fr: "Partenaire de projet", en: "Project partner" },
            text: {
                fr: "Collaboration avec l'Université Jiaotong de Xi'an. Budget total 265,5 k€, dont 29,5 k€ pour le LSPM. 01/2018 – 12/2021.",
                en: "Collaboration with Xi'an Jiaotong University. Total budget €265.5k, of which €29.5k for LSPM. 01/2018 – 12/2021."
            }
        },
        {
            name: "Labex — Projet émergent",
            role: { fr: "Responsable de projet", en: "Principal investigator" },
            text: {
                fr: "Unified multi-scale framework for plasticity of metals, amorphous and cellular materials. Collaboration avec M. Durant (Université Paris 7). 10/2018 – 10/2019.",
                en: "Unified multi-scale framework for plasticity of metals, amorphous and cellular materials. With M. Durant (Université Paris 7). 10/2018 – 10/2019."
            }
        },
        {
            name: "ANR — I2T2M",
            role: { fr: "Partenaire de projet", en: "Project partner" },
            text: { fr: "Budget total 3 k€. 01/2019 – 12/2022.", en: "Total budget €3k. 01/2019 – 12/2022." }
        },
        {
            name: "PICS — CNRS (Pologne)",
            role: { fr: "Responsable de projet", en: "Principal investigator" },
            text: {
                fr: "Projet de collaboration scientifique internationale, 15 k€. 2017 – 2020.",
                en: "International scientific collaboration project, €15k. 2017 – 2020."
            }
        },
        {
            name: { fr: "Professeur invité — Université Paris 13", en: "Visiting professor — Université Paris 13" },
            role: { fr: "Lauréat", en: "Awardee" },
            text: { fr: "Financement 2,5 k€. 2017.", en: "€2.5k. 2017." }
        },
        {
            name: "F2M — Concours « Coup de pouce »",
            role: { fr: "Responsable de projet", en: "Principal investigator" },
            text: {
                fr: "Fédération française de mécanique. Financement 50 k€. 2015 – 2016.",
                en: "French Federation of Mechanics. €50k. 2015 – 2016."
            }
        }
    ],

    supervision: {
        current: [
            { kind: "Ph.D.", who: "P. Soyfer", years: "2024–2027", title: "On the physical nature of the bending-to-stretching phase transition in semi-flexible fibre networks, with applications to the mechanics of the cytoskeleton", note: { fr: "Financé par CNRS-MITI 80|PRIME, co-direction (36 mois).", en: "Funded by CNRS-MITI 80|PRIME, co-supervision (36 months)." } },
            { kind: "Ph.D.", who: "G. Tejedor", years: "2023–2026", title: "Numerical modelling of mesoscopic crystal plasticity through GL(3, Z)-invariant nonlinear elasticity", note: { fr: "Financé par ANR-MESOCRYSP, co-direction (36 mois).", en: "Funded by ANR-MESOCRYSP, co-supervision (36 months)." } },
            { kind: "Ph.D.", who: "E. Lundheim", years: "2023–2026", title: "Effect of disorder on dislocation avalanches using the GL(2, Z)-invariant plasticity model", note: { fr: "Financé par ANR-MESOCRYSP, co-direction (36 mois).", en: "Funded by ANR-MESOCRYSP, co-supervision (36 months)." } }
        ],
        completed: [
            { kind: "Ph.D.", who: "J. Smiri", years: "2021–2024", title: "Eulerian finite element modelling of ductile fracture in micro-scale crystals", note: { fr: "Bourse de l'Université Sorbonne Paris Nord, co-direction (36 mois). Soutenue.", en: "Université Sorbonne Paris Nord scholarship, co-supervision (36 months). Defended." } },
            { kind: "Ph.D.", who: "M. Aissaoui", years: "2021–2024", title: "Acoustic emission study of intermittent plasticity: the role of disorder, crystal orientation and symmetry", note: { fr: "Bourse de l'Université Sorbonne Paris Nord, co-direction (36 mois). Soutenue.", en: "Université Sorbonne Paris Nord scholarship, co-supervision (36 months). Defended." } },
            { kind: "Post-doc", who: "K. Ghosh", years: "2022–2024", title: "Coupling of phase transition with crystal plasticity in zirconium and titanium through Landau theory", note: { fr: "Financé par ANR-JCJC (18 mois).", en: "Funded by ANR-JCJC (18 months)." } },
            { kind: "Post-doc", who: "M. Terzi", years: "2021–2023", title: "A low-dimensional representation of 6D metric space via machine learning, towards a 3D Landau theory of crystal plasticity", note: { fr: "Financé par ANR-MESOCRYSP et ANR-FWF NANOFILM (24 mois).", en: "Funded by ANR-MESOCRYSP and ANR-FWF NANOFILM (24 months)." } },
            { kind: "Post-doc", who: "M. Degeiter", years: "2019–2022", title: "Modelling of fracture in thin films through a phase-field approach", note: { fr: "Financé par le Labex.", en: "Funded by the Labex." } },
            { kind: "Post-doc", who: "N. Gorbushin", years: "2019–2021", title: "Landau-type modelling of marginal stability in plasticity", note: { fr: "Financé par ANR-PRCI SUMMIT.", en: "Funded by ANR-PRCI SUMMIT." } },
            { kind: "Post-doc", who: "A. Ask", years: "2015–2016", title: "Modelling of recrystallisation", note: { fr: "Financé par le concours « Coup de pouce » de la F2M. Aujourd'hui ingénieure de recherche à l'ONERA.", en: "Funded by the F2M “Coup de pouce” award. Now a research engineer at ONERA." } },
            { kind: "Ph.D.", who: "R. Baggio", years: "2016–2019", title: "Multi-scale modelling of plasticity", note: { fr: "Bourse de l'Université Sorbonne Paris Nord, co-direction. Soutenue en décembre 2019. Post-doc à l'INRIA Bordeaux puis à l'Université de Corse.", en: "Université Sorbonne Paris Nord scholarship, co-supervision. Defended December 2019. Postdoc at INRIA Bordeaux, then University of Corsica." } },
            { kind: "Ph.D.", who: "M. Spagnuolo", years: "2016–2019", title: "Continuum modelling of pantographic structures", note: { fr: "Bourse européenne Inspire, co-direction. Soutenue en septembre 2019.", en: "European Inspire scholarship, co-supervision. Defended September 2019." } },
            { kind: "Ph.D.", who: "C. Baruffi", years: "2015–2018", title: "Modelling of ageing and damage mechanisms in metallic alloys", note: { fr: "Bourse ONERA. Soutenue en décembre 2018. Aujourd'hui chez ASML Pays-Bas ; prix Jacques Dalla Torre 2019 pour ses travaux de thèse.", en: "ONERA scholarship. Defended December 2018. Now at ASML Netherlands; Jacques Dalla Torre 2019 prize for her thesis." } },
            { kind: "Ph.D.", who: "P. Zhang", years: "2018", title: "Intermittent plasticity at small scales", note: { fr: "Encadrement de la dernière année de thèse à Paris, collaboration Chine–France. Soutenue en 2018. Aujourd'hui professeur assistant à l'Université Jiaotong de Xi'an.", en: "Supervised the final year in Paris, China–France collaboration. Defended 2018. Now assistant professor at Xi'an Jiaotong University." } }
        ],
        internships: [
            { who: "Julien Baillard", years: "2024", note: { fr: "Stage M2, 5 mois, LSPM/EPSCI.", en: "Master's internship, 5 months, LSPM/EPSCI." } },
            { who: "O. Benamor", years: "2020", note: { fr: "Stage M2, 4 mois, PNUS/LSPM.", en: "Master's internship, 4 months, PNUS/LSPM." } },
            { who: "F. Mansouri", years: "2016", note: { fr: "Stage M2, PNUS/LSPM.", en: "Master's internship, PNUS/LSPM." } },
            { who: "Mehmet Dogramaci", years: "2024", note: { fr: "Stage de collège, une semaine, LSPM.", en: "Secondary-school placement, one week, LSPM." } },
            { who: "O. Benamor", years: "2020", note: { fr: "Stage de collège, PNUS/LSPM.", en: "Secondary-school placement, PNUS/LSPM." } }
        ]
    },

    preprints: [],

    publications: [
        { authors: "J. Smiri, O.U. Salman, I.R. Ionescu", title: "Dislocation-density based crystal plasticity: stability and attractors in slip rate driven processes", venue: "arXiv:2504.02413", year: 2026 },
        {
            authors: "O.U. Salman, A. Ahadi, L. Truskinovsky",
            title: "Self-induced marginality in plastically deformed crystals",
            venue: "Physical Review Materials; arXiv:2511.08187",
            year: 2026,
            note: { fr: "Accepté", en: "Accepted" },
            audio: {
                src: "./podcasts/Quasi-Amorphous_Crystals_and_Glassy_Physics.m4a",
                title: "Quasi-Amorphous Crystals and Glassy Physics"
            }
        },
        { authors: "M. Aissaoui, C. Kahloun, O.U. Salman, S. Queyreau", title: "Physical scaling laws in dislocation microstructures and avalanches from dislocation dynamics simulations", venue: "Physical Review Materials 10, 053603", year: 2026 },
        { authors: "J. Smiri, J. Paux, O.U. Salman, I.R. Ionescu", title: "Large plastic deformation of voids in crystals", venue: "International Journal of Solids and Structures 324, 113657", year: 2026 },
        { authors: "J. Smiri, O.U. Salman, I.R. Ionescu", title: "Prediction of ideal orientations in velocity gradient-driven processes for large plastic deformations of crystals", venue: "European Journal of Mechanics — A/Solids 118, 106073", year: 2026 },
        {
            authors: "O.U. Salman, A. Finel, L. Truskinovsky",
            title: "Inertia-induced power law scaling in martensites",
            venue: "Mathematics and Mechanics of Solids 30 (9); doi:10.1177/10812865251361074",
            year: 2025,
            audio: {
                src: "./podcasts/The_Inertial_Pulse_of_Crystal_Slips.m4a",
                title: "The Inertial Pulse of Crystal Slips"
            }
        },
        { authors: "M.M. Terzi, O.U. Salman, D. Faurie, A.A. León Baldelli", title: "Navigating local minima and bifurcations in brittle thin film systems with irreversible damage", venue: "Computer Methods in Applied Mechanics and Engineering 445, 118201", year: 2025 },
        {
            authors: "K. Ghosh, O.U. Salman, S. Queyreau, L. Truskinovsky",
            title: "Slip-dominated structural transitions",
            venue: "Physical Review Materials 9 (7), 073604",
            year: 2025,
            note: "Editors' Choice",
            audio: {
                src: "./podcasts/The_Slip_Behind_the_Shuffe.m4a",
                title: "The Slip Behind the Shuffle"
            }
        },
        { authors: "M. Lamari, P. Kerfriden, O.U. Salman, V. Yastrebov, K. Ammar, S. Forest", title: "A time-discontinuous elasto-plasticity formalism to simulate instantaneous plastic flow bursts", venue: "International Journal of Solids and Structures 309, 113179", year: 2024 },
        { authors: "J. Smiri, O.U. Salman, M. Ghidelli, I.R. Ionescu", title: "Accounting for localized deformation: a simple computation of true stress in micropillar compression experiments", venue: "Experimental Mechanics 64 (9), 1435–1442", year: 2024, note: { fr: "Couverture", en: "Journal cover" } },
        { authors: "R. Baggio, O.U. Salman, L. Truskinovsky", title: "Nucleation of dislocations by pattern formation", venue: "European Journal of Mechanics — A/Solids 99, 104897", year: 2023 },
        { authors: "R. Baggio, O.U. Salman, L. Truskinovsky", title: "Inelastic rotations and pseudoturbulent plastic avalanches in crystals", venue: "Physical Review E 107, 025004", year: 2023 },
        { authors: "C. Baruffi, A. Finel, Y. Le Bouar, B. Bacroix, O.U. Salman", title: "Atomistic simulations of temperature-driven microstructure formation in pure titanium", venue: "Computational Materials Science 203, 111057", year: 2022, note: "Editor's Choice" },
        { authors: "O.U. Salman, I.R. Ionescu", title: "Tempering the mechanical response of FCC micro-pillars: an Eulerian plasticity approach", venue: "Mechanics Research Communications 114", year: 2021 },
        { authors: "O.U. Salman, L. Truskinovsky", title: "Delocalizing fracture", venue: "Journal of the Mechanics and Physics of Solids 154, 104517", year: 2021 },
        { authors: "O.U. Salman, R. Baggio, B. Bacroix, G. Zanzotto, N. Gorbushin", title: "Discontinuous yielding of pristine micro-crystals", venue: "Comptes Rendus. Physique 22 (S3), 1–48", year: 2021 },
        { authors: "P. Zhang, O.U. Salman, J. Weiss, L. Truskinovsky", title: "Fluctuations in crystalline plasticity", venue: "Comptes Rendus. Physique 22 (S3), 1–3707", year: 2021 },
        { authors: "P. Zhang, O.U. Salman, J. Weiss, L. Truskinovsky", title: "Variety of scaling behaviors in nanocrystalline plasticity", venue: "Physical Review E 102, 023006", year: 2020 },
        { authors: "I.R. Ionescu, S. Queyreau, C.R. Picu, O.U. Salman (eds.)", title: "Mechanics and Physics of Solids at Micro- and Nano-Scales", venue: "ISBN 978-1-786-30531-2", year: 2020, note: { fr: "Ouvrage édité", en: "Edited volume" } },
        { authors: "O.U. Salman, R. Baggio", title: "Homogeneous dislocation nucleation in Landau theory of crystal plasticity", venue: "In: Mechanics and Physics of Solids at Micro- and Nano-Scales", year: 2019 },
        { authors: "R. Baggio, E. Arbib, P. Biscari, S. Conti, L. Truskinovsky, G. Zanzotto, O.U. Salman", title: "Landau-type theory of planar crystal plasticity", venue: "Physical Review Letters 123, 205501", year: 2019, note: { fr: "Couverture", en: "Journal cover" } },
        { authors: "O.U. Salman, G. Vitale, L. Truskinovsky", title: "Continuum theory of bending-to-stretching transition", venue: "Physical Review E 100, 051001(R)", year: 2019, note: { fr: "Communication rapide", en: "Rapid Communication" } },
        { authors: "O.U. Salman, B. Muite, A. Finel", title: "Origin of stabilisation of macrotwin boundaries in martensites", venue: "The European Physical Journal B 92 (1), 20", year: 2019 },
        { authors: "C. Baruffi, A. Finel, Y. Le Bouar, B. Bacroix, O.U. Salman", title: "Overdamped Langevin dynamics simulations of grain boundary motion", venue: "Materials Theory 3, 4", year: 2019 },
        { authors: "P. Franciosi, M. Spagnuolo, O.U. Salman", title: "Mean Green operators of deformable fiber networks embedded in a compliant matrix and property estimates", venue: "Continuum Mechanics and Thermodynamics 31 (1), 101–132", year: 2019 },
        { authors: "A. Ask, S. Forest, B. Appolaire, K. Ammar, O.U. Salman", title: "A Cosserat crystal plasticity and phase field theory for grain boundary migration", venue: "Journal of the Mechanics and Physics of Solids 115, 167–194", year: 2018 },
        { authors: "P. Zhang, O.U. Salman, J.-Y. Zhang, G. Liu, J. Weiss, L. Truskinovsky, J. Sun", title: "Taming intermittent plasticity at small scales", venue: "Acta Materialia 128, 351–364", year: 2018 },
        { authors: "M. Jedrychowski, B. Bacroix, O.U. Salman, J. Tarasiuk, S. Wronski", title: "Investigation of SIBM driven recrystallization in alpha zirconium based on EBSD data and Monte Carlo modeling", venue: "Materials Science and Engineering 89, 012029", year: 2016 },
        { authors: "A. Taloni, O.U. Salman, S. Zapperi", title: "Volume changes during active shape fluctuations in cells", venue: "Physical Review Letters 114, 208101", year: 2015, note: { fr: "Mis en avant dans Nature Physics et APS Physics", en: "Highlighted in Nature Physics and APS Physics" } },
        { authors: "O. Schylgo, O.U. Salman, A. Finel", title: "Martensitic phase transformations in Ni-Ti base shape memory alloys: Landau theory", venue: "Acta Materialia 60, 6784–6792", year: 2012 },
        { authors: "O.U. Salman, A. Finel, R. Delville, D. Schryvers", title: "The role of phase compatibility in martensite", venue: "Journal of Applied Physics 111, 103517", year: 2012 },
        { authors: "O.U. Salman, L. Truskinovsky", title: "On the critical nature of plastic flow: one and two dimensional models", venue: "International Journal of Engineering Science 59, 219–254", year: 2012 },
        { authors: "O.U. Salman, L. Truskinovsky", title: "Minimal discrete automaton behind crystal plasticity", venue: "Physical Review Letters 106, 175503", year: 2011 },
        { authors: "A. Finel, O.U. Salman", title: "Phase field methods: microstructures, mechanical properties and complexity", venue: "Comptes Rendus Physique 11 (3–4), 245–256", year: 2010 },
        { authors: "O.U. Salman", title: "Criticality in martensite", venue: "Mathematisches Forschungsinstitut Oberwolfach, DOI 10.4171/OWR/2009/57", year: 2009 },
        { authors: "R. Delville, R.D. James, O.U. Salman, A. Finel, D. Schryvers", title: "Transmission electron microscopy study of low-hysteresis shape memory alloys", venue: "ESOMAT 2009, 02005", year: 2009 },
        { authors: "B. Muite, O.U. Salman", title: "Computations of geometrically linear and nonlinear Ginzburg-Landau models for martensitic pattern formation", venue: "ESOMAT 2009, 03008", year: 2009 },
        { authors: "S. Ugur, O.U. Salman, G. Tepehan, F. Tepehan, O. Pekcan", title: "Fluorescence study on Al₂O₃ / polystyrene latex composite film formation", venue: "Polymer Composites 26 (3), 352–360", year: 2005 }
    ],

    conferences: {
        organisation: [
            { fr: "Organisation de deux mini-symposiums à la conférence internationale COMPLAS 2025 (Computational Plasticity, Fundamentals and Applications).", en: "Organised two mini-symposia at the international COMPLAS 2025 conference (Computational Plasticity, Fundamentals and Applications)." },
            { fr: "Organisation et intervention lors du 11ᵉ symposium France–États-Unis « Mechanics and Physics of Solids » (Paris, 2018).", en: "Organised and spoke at the 11th France–US symposium “Mechanics and Physics of Solids” (Paris, 2018)." }
        ],
        invited: [
            { title: "2×MePhy-IDE days: Plasticity of amorphous and crystalline materials", place: { fr: "Paris, France", en: "Paris, France" }, year: 2024 },
            { title: "Multiscale Modeling of Materials", place: { fr: "Montpellier, France", en: "Montpellier, France" }, year: 2023 },
            { title: "Materials Theory Workshop", place: { fr: "Vienne, Autriche", en: "Vienna, Austria" }, year: 2023 },
            { title: { fr: "Journées d'étude « Transition de phase et plasticité »", en: "Study days “Phase transition and plasticity”" }, place: { fr: "Porquerolles, France", en: "Porquerolles, France" }, year: 2023 },
            { title: "MePhy-IDE days: Instabilities in disordered systems", place: { fr: "Paris, France", en: "Paris, France" }, year: 2022 },
            { title: "Workshop on Statistical Physics of Disordered Systems", place: { fr: "Les Houches, France", en: "Les Houches, France" }, year: 2021 },
            { title: { fr: "Journées d'étude « Mécanique du solide »", en: "Study days “Solid mechanics”" }, place: { fr: "Paris, France", en: "Paris, France" }, year: 2021 },
            { title: "International Congress of Theoretical and Applied Mechanics (ICTAM)", place: { fr: "Milan, Italie", en: "Milan, Italy" }, year: 2020 },
            { title: "European Mechanics Society Conference (EUROMECH)", place: { fr: "Prague, République tchèque", en: "Prague, Czech Republic" }, year: 2019 },
            { title: "Workshop on Disordered Systems", place: { fr: "Vienne, Autriche", en: "Vienna, Austria" }, year: 2018 },
            { title: "Mechanics of Materials Conference", place: { fr: "Boston, États-Unis", en: "Boston, USA" }, year: 2018 },
            { title: "International Conference on Computational Plasticity (COMPLAS)", place: { fr: "Barcelone, Espagne", en: "Barcelona, Spain" }, year: 2017 },
            { title: "Phase Transformations Workshop", place: { fr: "Zurich, Suisse", en: "Zurich, Switzerland" }, year: 2017 },
            { title: "Workshop on Multiscale Modeling", place: { fr: "Lund, Suède", en: "Lund, Sweden" }, year: 2016 }
        ]
    },

    software: {
        mine: [
            {
                title: "MTM — Mesoscopic Tensorial Model",
                text: {
                    fr: "Implémentation C++ du modèle tensoriel mésoscopique : génération de réseaux 2D périodiques, maillages de Delaunay (CGAL) et minimisation par L-BFGS de fonctionnelles d'énergie de déformation invariantes GL(2, Z), avec coarse-graining à partir de potentiels interatomiques de paires.",
                    en: "C++ implementation of the Mesoscopic Tensorial Model: periodic 2D lattice generation, Delaunay meshing (CGAL) and L-BFGS minimisation of GL(2, Z)-invariant strain-energy functionals, with coarse-graining from pair interatomic potentials."
                },
                links: [{ label: "GitHub", url: "https://github.com/cnrs-oguzumut/MTM", primary: true }]
            }
        ],
        liked: [
            {
                title: "AutoPlot",
                text: {
                    fr: "Espace de travail natif macOS pour l'analyse et le tracé de données scientifiques : import, ajustements, tracés 2D et 3D, et figures annotées prêtes à publier.",
                    en: "A native macOS workspace for scientific data analysis and plotting: import, fits, 2D and 3D plots, and annotated publication-ready figures."
                },
                links: [{ label: { fr: "Site", en: "Website" }, url: "https://autoplot.ai", primary: true }]
            },
            {
                title: "GhostPDF+",
                text: {
                    fr: "Application macOS native pour compresser vos PDF. Traitement 100 % hors ligne : les données ne quittent jamais la machine.",
                    en: "Native macOS application to compress PDF files. 100% offline processing: the data never leaves your machine."
                },
                links: [{ label: { fr: "Site", en: "Website" }, url: "https://siliconsuite.app/GhostPDF-Bundle/", primary: true }]
            }
        ]
    },

    documents: [
        {
            title: { fr: "Curriculum vitæ", en: "Curriculum vitae" },
            text: { fr: "CV complet avec la liste des publications et des activités de recherche.", en: "Full CV with the list of publications and research activities." },
            files: [{ label: { fr: "PDF", en: "PDF" }, url: "./assets/images/CV_claud_v3.pdf" }]
        },
        {
            title: { fr: "Manuscrit d'HDR", en: "Habilitation manuscript" },
            text: { fr: "Habilitation à diriger des recherches — manuscrit complet.", en: "Habilitation à diriger des recherches — full manuscript." },
            files: [{ label: { fr: "PDF", en: "PDF" }, url: "./assets/images/Manuscipt.pdf" }]
        }
        // Disabled: assets/images/Research_Statement_Salman.pdf is referenced by the old
        // site but is not in the repository (404). Add the file, then uncomment.
        // {
        //     title: { fr: "Projet de recherche", en: "Research statement" },
        //     text: { fr: "Présentation des axes de recherche actuels et futurs.", en: "Current and future research directions." },
        //     files: [{ label: { fr: "PDF", en: "PDF" }, url: "./assets/images/Research_Statement_Salman.pdf" }]
        // }
    ],

    visualisation: { src: "./3d_square_interactive.html" }
};
