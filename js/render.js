/**
 * Content rendering functionality
 * Dynamically generates HTML content from data
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tab-content-container');

    // Render all sections
    renderEducationSection();
    renderExperienceSection();
    renderResearchSection();
    renderIndependentSection();
    renderPublicationsSection();
    renderConferencesSection();
    renderSoftwareSection();
    renderDocumentsSection();
    renderInteractiveSection();
});

function renderEducationSection() {
    const content = `
        <div id="content-education" role="tabpanel" aria-labelledby="tab-education" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Éducation</h2>
                <div class="space-y-4">
                    ${profileData.education.map(edu => `
                        <div class="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <h3 class="font-semibold text-lg text-gray-700">${edu.degree}</h3>
                            <p class="text-sm text-gray-500">${edu.period}</p>
                            <p class="text-gray-600 mt-2">${edu.institution}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderExperienceSection() {
    const content = `
        <div id="content-experience" role="tabpanel" aria-labelledby="tab-experience" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Expérience Professionnelle</h2>
                <div class="space-y-4">
                    ${profileData.experience.map(exp => `
                        <div class="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <h3 class="font-semibold text-lg text-gray-700">${exp.position}</h3>
                            <p class="text-sm text-gray-500">${exp.period}</p>
                            <p class="text-gray-600 mt-2">${exp.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderResearchSection() {
    const content = `
        <div id="content-research" role="tabpanel" aria-labelledby="tab-research" class="tab-content">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Domaines de Recherche</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${profileData.researchAreas.map(area => `
                        <div class="p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h4 class="font-bold text-lg text-gray-800 mb-2">${area.title}</h4>
                            <div class="flex justify-center items-center gap-4 mb-4">
                                ${area.images.map(img => `
                                    <img src="${img}"
                                         loading="lazy"
                                         onerror="this.src='https://placehold.co/384x256/f3f4f6/334155?text=Image'"
                                         alt="${area.title}"
                                         class="${area.images.length > 1 ? 'w-1/2' : 'w-full'} h-auto rounded-lg">
                                `).join('')}
                            </div>
                            <p class="text-gray-600 text-sm">${area.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderIndependentSection() {
    // This section is complex with multiple subsections, so we'll keep it embedded
    // For now, using a fetch approach or inline HTML
    const content = `
        <div id="content-independent" role="tabpanel" aria-labelledby="tab-independent" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Enseignement & Encadrement</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="font-semibold text-xl text-gray-700 mb-2">Enseignement</h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                            ${profileData.teaching.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-xl text-gray-700 mb-2">Contrats de Recherche</h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                            <li><b>ANR-FWF : Super-Glasses</b> – Responsable de projet. Nanoengineering metallic glasses through chemical and structural heterogeneities. Financement : 2 thèses + 2 post-docs financés pour le LSPM, collaboration avec M. Ghidelli et P. Djemia (LSPM), +50 k€ pour LSPM et 300 k€ pour le partenaire autrichien C. Gammer (ESI, Leoben).</li>
                            <li><b>MITI – 80PRIME : BE-ST</b> – Responsable de projet. Physical nature of BEnding-to-STretching phase transition in semi-flexible fibers networks: from materials to cytoskeleton. Financement : 25 k€ + 1 thèse financée pour LSPM, collaboration avec V. Lecomte (LIPhy), (03/2023 – 09/2026).</li>
                            <li><b>ANR : MESOCRYSP</b> – Partenaire de projet. Discrete Mesoscale Plasticity. Financement : 450 k€ pour LSPM, responsable de l'équipe LSPM, collaboration avec PMMH–Centre des Matériaux, (11/2021 – 09/2025).</li>
                            <li><b>ANR-JCJC : ALIS</b> – Responsable de projet. Modeling of reconstructive phase transformations through Atomistically informed Landau theory with Infinite Symmetry. Financement : 160 k€ pour LSPM, (03/2020 – 01/2024).</li>
                            <li><b>ANR-FWF : NANOFILM</b> – Responsable d'un axe de projet. Nanoarchitected Films for Unbreakable Flexible Electronics. Financement : Budget total 572 k€, dont 142 k€ pour LSPM ; collaboration avec PPRIME-CNRS et ESI Leoben (Autriche). Responsable du modèle de phase-field pour la rupture des films minces et encadrement d'un post-doc, (03/2021 – 03/2024).</li>
                            <li><b>ANR-PRCI : SUMMIT</b> – Partenaire de projet. Collaboration avec l'Université Jiaotong de Xi'an, budget total 265,5 k€, dont 29,5 k€ pour LSPM, (01/2018 – 12/2021).</li>
                            <li><b>Labex – Projet émergent</b> – Responsable de projet. Unified multi-scale framework for plasticity of metals, amorphous and cellular materials. Collaboration avec M. Durant (Université Paris 7), (10/2018 – 10/2019).</li>
                            <li><b>ANR : I2T2M</b> – Partenaire de projet. Budget total 3 k€, (01/2019 – 12/2022).</li>
                            <li><b>PICS – CNRS (Poland)</b> – Responsable de projet. International Scientific Collaboration Project, financement 15 k€, (2017 – 2020).</li>
                            <li><b>Visiting Professor</b> – Université Paris 13. Financement 2,5 k€, (2017).</li>
                            <li><b>Concours "Coup de Pouce"</b> – F2M (Fédération Française de Mécanique) – Responsable de projet. Financement 50 k€, (2015 – 2016).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold text-xl text-gray-700 mb-2">Supervisions</h3>
                        <div class="space-y-4">
                            <div class="p-4 bg-gray-50 rounded-lg shadow-sm">
                                <h4 class="font-semibold text-lg text-gray-700">En cours</h4>
                                <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                                    <li><b>Ph.D:</b> P. Soyfer, "On the physical nature of BEnding-to-STretching phase transition in semi-flexible fibers networks with applications to mechanics of cytoskeleton," financé par CNRS-MITI défi 80 prime, co-directeur (36 mois), 2024-2027</li>
                                    <li><b>Ph.D:</b> G. Tejedor, "Modélisation numérique de la plasticité mésoscopique des cristaux par l'élasticité non linéaire invariante GL(3, Z)," financé par ANR-MESOCRYSP, co-directeur (36 mois), 2023-2026</li>
                                    <li><b>Ph.D:</b> E. Lundheim, "Effect of disorder on dislocation avalanches using the GL(2, Z) invariant plasticity model," financé par ANR-MESOCRYSP, co-directeur (36 mois), 2023-2026</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-gray-50 rounded-lg shadow-sm">
                                <h4 class="font-semibold text-lg text-gray-700">Achevées</h4>
                                <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                                    <li><b>Ph.D:</b> J. Smiri, "Eulerian finite element modelling of ductile fracture in micro-scale crystals," financé par une bourse de l'Université Sorbonne Paris Nord, co-directeur (36 mois), 2021-2024 (soutenue)</li>
                                    <li><b>Ph.D:</b> M. Aissaoui, "Acoustic emission study of intermittent plasticity: the role of disorder, crystal orientation and symmetry," financé par une bourse de l'Université Sorbonne Paris Nord, co-directeur (36 mois), 2021-2024 (soutenue)</li>
                                    <li><b>Post-Doc:</b> K. Ghosh, "Modelling of coupling of phase transition with crystal plasticity in Zirconium and Titanium through Landau theory," financé par ANR-JCJC, (18 mois), 2022-2024</li>
                                    <li><b>Post-Doc:</b> M. Terzi, "A low dimensional representation of 6D metric space via machine learning for the development of a new 3D Landau theory of crystal plasticity," financé par ANR-MESOCRYSP et ANR-FWF: NANOFILM, (24 mois), 2021-2023</li>
                                    <li><b>Post-Doc:</b> M. Degeiter, "Modelling of Fracture in thin films through phase-field approach," financé par Labex, 2019-2022</li>
                                    <li><b>Post-Doc:</b> N. Gorbushin, "Landau-type modeling of marginal stability in plasticity," financé par ANR-PRCI-SUMMIT, 2019-2021</li>
                                    <li><b>Post-Doc:</b> A. Ask, "Modélisation de Recristallisation Concours coup de pouce, Fédération francilienne de mécanique, FRANCE," financé par Concours coup de pouce de F2M, (2015-2016), (actuellement ingénieur de recherche à l'ONERA)</li>
                                    <li><b>Ph.D:</b> R. Baggio, "Multi-Scale Modelling of Plasticity," financé par une bourse de l'Université Sorbonne Paris Nord, co-directeur, soutenue en décembre 2019, (post-doc à l'INRIA-Bordeaux et Université de Corse)</li>
                                    <li><b>Ph.D:</b> M. Spagnuolo, "Modélisation continue des structures pantographiques," bourse européenne Inspire, UE, co-directeur, soutenue en septembre 2019</li>
                                    <li><b>Ph.D:</b> C. Baruffi, "Modélisation des mécanismes de vieillissement et d'endommagement dans les alliages métalliques," bourse ONERA, FRANCE, soutenue en décembre 2018 (actuellement embauchée à ASML Netherlands, a reçu le prix Jacques Dalla Torre 2019 pour son travail de thèse)</li>
                                    <li><b>Ph.D:</b> P. Zhang, supervision de la dernière année de sa thèse à Paris, collaboration Chine/France, soutenue en 2018, (actuellement professeur assistant à l'Université Jiaotong de Xi'an)</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-gray-50 rounded-lg shadow-sm">
                                <h4 class="font-semibold text-lg text-gray-700">Stages</h4>
                                <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                                    <li><b>Stage M2:</b> Julien Baillard, 5 mois, LSPM/EPSCI (2024)</li>
                                    <li><b>Stage M2:</b> F. Mansouri, PNUS/LSPM (2016)</li>
                                    <li><b>Stage M2:</b> O. Benamor, 4 mois PNUS/LSPM (2020)</li>
                                    <li><b>Stage collège:</b> Mehmet Dogramaci, une semaine, LSPM (2024)</li>
                                    <li><b>Stage collège:</b> O. Benamor, PNUS/LSPM (2020)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderPublicationsSection() {
    const content = `
        <div id="content-publications" role="tabpanel" aria-labelledby="tab-publications" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Publications</h2>
                <p class="text-gray-600 mb-4 italic">
                    Dans toutes mes publications, j'ai contribué à la conception et à la mise en œuvre de la recherche, à l'analyse des résultats, au développement du code numérique et à la rédaction du manuscrit. La plupart des résultats ont été obtenus en utilisant mes bibliothèques de code existantes.
                </p>

                <h3 class="text-xl font-semibold text-gray-700 mt-6 mb-3">Pre-prints</h3>
                <ul class="list-disc list-inside space-y-2 mb-6">
                    <li class="text-gray-600">J Smiri, OU Salman, IR Ionescu, "Orientation attractors in velocity gradient driven processes for large plastic deformations of crystals," arXiv preprint arXiv:2504.13714, (2025)</li>
                    <li class="text-gray-600">J Smiri, OU Salman, IR Ionescu, "Dislocation-density based crystal plasticity: stability and attractors in slip rate driven processes," arXiv preprint arXiv:2504.02413, (2025)</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-700 mt-6 mb-3">Published</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li class="text-gray-600">J. Smiri, J. Paux, O.U. Salman, I.R. Ionescu, "Large plastic deformation of voids in crystals," International Journal of Solids and Structures 324, 113657, (2026)</li>
                    <li class="text-gray-600">O.U. Salman, A. Finel, L. Truskinovsky, "Inertia induced power-law scaling," Mathematics and Mechanics of Solids, 1-39 (2025)</li>
                    <li class="text-gray-600">M.M. Terzi, O.U. Salman, D. Faurie, A.A. Baldelli, "Navigating local minima and bifurcations in brittle thin film systems with irreversible damage," Computer Methods in Applied Mechanics and Engineering 445, 118201, (2025)</li>
                    <li class="text-gray-600">K. Ghosh, O.U. Salman, S. Queyreau, L. Truskinovsky, "Slip-dominated structural transitions," Physical Review Materials 9 (7), 073604, Editors' Choice, (2025)</li>
                    <li class="text-gray-600">M. Lamari, P. Kerfriden, O.U. Salman, V. Yastrebov, K. Ammar, S. Forest, "A time-discontinuous elasto-plasticity formalism to simulate instantaneous plastic flow bursts," International Journal of Solids and Structures 309, 11317, (2024)</li>
                    <li class="text-gray-600">J. Smiri, O.U. Salman, M Ghidelli, and I.R. Ionescu, "Accounting for localized deformation: a simple computation of true stress in micropillar compression experiments," Experimental Mechanics 64 (9), 1435-1442, arXiv:2310.06476, (2024)</li>
                    <li class="text-gray-600">R. Baggio, O.U. Salman, L. Truskinovsky, "Nucleation of dislocations by pattern formation," European Journal of Mechanics-A/Solids 99, 104897, (2023)</li>
                    <li class="text-gray-600">R. Baggio, O.U. Salman, L. Truskinovsky, "Inelastic rotations and pseudoturbulent plastic avalanches in crystals," Phys. Rev. E 107, 025004 – Published 24 February (2023)</li>
                    <li class="text-gray-600">C. Baruffi, A. Finel, Y. Le Bouar, B. Bacroix, O.U. Salman, "Atomistic simulations of temperature-driven microstructure formation in pure Titanium," Computational Materials Science 203, 111057, Editor's choice, (2022)</li>
                    <li class="text-gray-600">O.U. Salman, I.R. Ioanescu, "Tempering the mechanical response of FCC micro-pillars: an Eulerian plasticity approach," Mechanics Research Communications, Volume 114, June, (2021)</li>
                    <li class="text-gray-600">O.U. Salman, L. Truskinovsky, "Delocalizing fracture," Journal of the Mechanics and Physics of Solids 154, 104517, (2021)</li>
                    <li class="text-gray-600">OU Salman, R Baggio, B Bacroix, G Zanzotto, N Gorbushin, "Discontinuous yielding of pristine micro-crystals," Comptes Rendus. Physique 22 (S3), 1-48, (2021)</li>
                    <li class="text-gray-600">P. Zhang, O.U. Salman, J. Weiss, L. Truskinovsky, "Fluctuations in crystalline plasticity," Comptes Rendus. Physique 22 (S3), 1-3707, (2021)</li>
                    <li class="text-gray-600">P. Zhang, O.U. Salman, J. Weiss, L. Truskinovsky, "Variety of scaling behaviors in nanocrystalline plasticity," Phys. Rev. E, 102, 023006, arXiv:2004.08579, hal-02644607, (2020)</li>
                    <li class="text-gray-600">Edited by I.R. Ionescu, S. Queyreau, C. R. Picu, O.U. Salman, "Mechanics and Physics of Solids at Micro- and Nano-Scales," ISBN: 978-1-786-30531-2 February (2020)</li>
                    <li class="text-gray-600">O.U. Salman, R. Baggio, "Homogeneous Dislocation Nucleation in Landau Theory of Crystal Plasticity," appeared in the book Mechanics and Physics of Solids at Micro- and Nano-Scales, (2019)</li>
                    <li class="text-gray-600">R. Baggio, E. Arbib, P. Biscari, S. Conti, L. Truskinovsky, G. Zanzotto, and O.U. Salman, "Landau-Type Theory of Planar Crystal Plasticity," Phys. Rev. Lett. 123, 205501, (2019)</li>
                    <li class="text-gray-600">O.U. Salman, G. Vitale, L. Truskinovsky, "Continuum theory of bending-to-stretching transition," Phys. Rev. E 100, 051001(R), Rapid Communication (2019)</li>
                    <li class="text-gray-600">O.U. Salman, B. Muite, A. Finel, "Origin of stabilisation of macrotwin boundaries in martensites," The European Physical Journal B 92 (1), 20, (2019)</li>
                    <li class="text-gray-600">C. Baruffi, A. Finel, Y. Le Bouar, B. Bacroix, O.U. Salman, "Overdamped Langevin Dynamics simulations of grain boundary motion," Materials Theory, 3,4 (2019)</li>
                    <li class="text-gray-600">P. Franciosi, M.Spagnuolo, O.U. Salman, "Mean Green operators of deformable fiber networks embedded in a compliant matrix and property estimates," Continuum Mechanics and Thermodynamics, Volume 31, Issue 1, pp 101–132, (2019)</li>
                    <li class="text-gray-600">A. Ask, S. Forest, B. Appolaire, K. Ammar, O.U. Salman, "A Cosserat crystal plasticity and phase field theory for grain boundary migration," Journal of the Mechanics and Physics of Solids 115, 167-194, (2018)</li>
                    <li class="text-gray-600">P. Zhang, O.U. Salman, J.-Y. Zhang, G. Liu, J. Weiss, L. Truskinovsky and J. Sun, "Taming intermittent plasticity at small scales," Acta Mater, 128, 351-364, (2018)</li>
                    <li class="text-gray-600">M. Jedrychowski, B. Bacroix, O.U. Salman, J. Tarasiuk, S. Wronski, "Investigation of SIBM driven recrystallization in alpha Zirconium based on EBSD data and Monte Carlo modeling," Materials Science and Engineering 89, 012029, (2016)</li>
                    <li class="text-gray-600">A. Taloni, O.U. Salman, S. Zapperi, "Volume Changes During Active Shape Fluctuations in Cells," Phys. Rev. Lett. 114, 208101, (2015) - (Highlighted in Nature Physics and APS Physics Journals)</li>
                    <li class="text-gray-600">O. Schylgo, O.U. Salman, A. Finel, "Martensitic phase transformations in Ni-Ti base shape memory alloys: Landau Theory," Acta Materialia 60, 6784-6792, (2012)</li>
                    <li class="text-gray-600">O.U. Salman, A. Finel, R. Delville, D. Schryvers, "The role of phase compatibility in martensite," J.Appl.Phys.111,103517, (2012)</li>
                    <li class="text-gray-600">O.U. Salman, L. Truskinovsky, "On the critical nature of the plastic flow: one and two dimensional models," International Journal of Engineering Science, 59:219.254, (2012)</li>
                    <li class="text-gray-600">O.U. Salman, L. Truskinovsky, "Minimal discrete automaton behind crystal plasticity," Phys. Rev. Lett. 106, 175503, (2011)</li>
                    <li class="text-gray-600">A. Finel, O.U. Salman, "Phase Field Methods: microstructures, mechanical properties and complexity," Comptes Rendus Physique, Vol. 11, Issues 3-4, p. 245-256, (2010)</li>
                    <li class="text-gray-600">O.U. Salman, "Criticality in martensite," Mathematisches Forschungsinstitut Oberwolfach, DOI: 10.4171/OWR/2009/57 (2009)</li>
                    <li class="text-gray-600">R. Delville R. D. James, O.U. Salman, A. Finel and D. Schryvers, "Transmission electron microscopy study of low-hysteresis shape memory alloys," DOI:10.1051/esomat/200902005, ESOMAT 2009, 02005 (2009)</li>
                    <li class="text-gray-600">B. Muite, O.U. Salman, "Computations of geometrically linear and nonlinear Ginzburg-Landau models for martensitic pattern formation," in ESOMAT 2009 edited by E. Sciences, P. Sittner, V. Paidar, L. Heller, H. Seiner, 587 p. 03008, (2009)</li>
                    <li class="text-gray-600">S. Ugur, O.U. Salman, G. Tepehan, F. Tepehan, O. Pekcan, "Fluorescence study on $Al_2O_3$ polystyrene latex composite film formation," Polymer composites 26 (3), 352-360, (2005)</li>
                </ul>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderConferencesSection() {
    const content = `
        <div id="content-conferences" role="tabpanel" aria-labelledby="tab-conferences" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Conférences</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="font-semibold text-lg text-gray-700">Organisation scientifique</h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                            <li>Organisation de deux mini-symposiums à la conférence internationale COMPLAS 2025 (Computational Plasticity, Fundamentals and Applications).</li>
                            <li>Organisation et intervention lors du 11ᵉ Symposium France–US "Mechanics and Physics of Solids" (Paris, 2018).</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-lg text-gray-700">Conférences invitées (sélection)</h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-2 mt-2">
                            <li>2xMePhy-IDE days: Plasticity of amorphous and crystalline materials (Paris, FRANCE, 2024).</li>
                            <li>"Multiscale Modeling of Materials" Conference (Montpellier, FRANCE, 2023).</li>
                            <li>"Materials Theory" Workshop (Vienna, AUSTRIA, 2023).</li>
                            <li>Journées d'étude « Transition de phase et plasticité » (Porquerolles, FRANCE, 2023).</li>
                            <li>MePhy-Ide days: Instabilities in disordered systems (Paris, FRANCE, 2022).</li>
                            <li>Workshop on "Statistical Physics of Disordered Systems" (Les Houches, FRANCE, 2021).</li>
                            <li>Journées d'étude "Mécanique du Solide" (Paris, FRANCE, 2021).</li>
                            <li>International Congress of Theoretical and Applied Mechanics (ICTAM) (Milan, ITALIE, 2020).</li>
                            <li>European Mechanics Society Conference (EUROMECH) (Prague, RÉPUBLIQUE TCHÈQUE, 2019).</li>
                            <li>Workshop on "Disordered Systems" (Vienna, AUSTRIA, 2018).</li>
                            <li>"Mechanics of Materials" Conference (Boston, USA, 2018).</li>
                            <li>International Conference on Computational Plasticity (COMPLAS) (Barcelona, SPAIN, 2017).</li>
                            <li>"Phase Transformations" Workshop (Zurich, SWITZERLAND, 2017).</li>
                            <li>Workshop on "Multiscale Modeling" (Lund, SWEDEN, 2016).</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderSoftwareSection() {
    const content = `
        <div id="content-software" role="tabpanel" aria-labelledby="tab-software" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Software & Tools</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${profileData.software.map(software => `
                        <div class="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${software.borderColor}">
                            <div class="flex items-start space-x-4">
                                <div class="text-4xl">${software.icon}</div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-lg text-gray-800">${software.title}</h3>
                                    <p class="text-gray-600 text-sm mt-2 mb-4">${software.description}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${software.links.map(link => `
                                            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
                                               class="inline-flex items-center px-4 py-2 ${link.color} rounded-lg transition-colors text-sm font-bold">
                                                <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                                ${link.label}
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderDocumentsSection() {
    const iconPaths = {
        document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    };

    const colorClasses = {
        blue: 'text-blue-500',
        green: 'text-green-500',
        purple: 'text-purple-500',
        indigo: 'text-indigo-500'
    };

    const buttonColors = {
        blue: 'bg-blue-500 hover:bg-blue-600',
        green: 'bg-green-500 hover:bg-green-600',
        purple: 'bg-purple-500 hover:bg-purple-600',
        indigo: 'bg-indigo-500 hover:bg-indigo-600'
    };

    const content = `
        <div id="content-documents" role="tabpanel" aria-labelledby="tab-documents" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Documents à Télécharger</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${profileData.documents.map(doc => `
                        <div class="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div class="flex items-start space-x-4">
                                <svg class="w-12 h-12 ${colorClasses[doc.color]} flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPaths[doc.icon]}"></path>
                                </svg>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-lg text-gray-800 mb-2">${doc.title}</h3>
                                    <p class="text-gray-600 text-sm mb-3">${doc.description}</p>
                                    <div class="flex flex-col space-y-2">
                                        ${doc.downloads.map(download => `
                                            <a href="${download.file}" ${download.filename ? `download="${download.filename}"` : 'download'}
                                               class="inline-flex items-center px-4 py-2 ${buttonColors[doc.color]} text-white rounded-lg transition-colors text-sm">
                                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                </svg>
                                                ${download.label}
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p class="text-sm text-gray-700">
                        <strong>Note:</strong> Tous les documents sont au format PDF. Pour toute demande de document supplémentaire ou dans un format différent, n'hésitez pas à me contacter par email.
                    </p>
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}

function renderInteractiveSection() {
    const content = `
        <div id="content-interactive" role="tabpanel" aria-labelledby="tab-interactive" class="tab-content hidden">
            <section class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Interactive Visualisations</h2>
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <p class="text-gray-700 mb-4 text-center">
                        Visualisation interactive du paysage d'énergie sur un réseau carré.
                    </p>
                    <div class="flex justify-center">
                        <iframe src="./3d_square_interactive.html" style="width:100%; height:500px; border:none;"></iframe>
                    </div>
                </div>
            </section>
        </div>
    `;
    document.getElementById('tab-content-container').insertAdjacentHTML('beforeend', content);
}
