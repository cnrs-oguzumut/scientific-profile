/**
 * Rendering, language switching, publication filtering and navigation.
 * All content comes from DATA / T in content.js.
 */
(function () {
    'use strict';

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const STORE_KEY = 'profile-lang';

    /** Pick the right language out of a string or an {fr, en} object. */
    function t(value, lang) {
        if (value == null) return '';
        return typeof value === 'object' ? (value[lang] ?? value.en ?? value.fr ?? '') : value;
    }

    function esc(s) {
        return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function readLang() {
        try {
            const saved = localStorage.getItem(STORE_KEY);
            if (saved === 'fr' || saved === 'en') return saved;
        } catch (e) { /* private mode */ }
        return (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    }

    let lang = readLang();

    /* ---------------- sections ---------------- */

    function sectionShell(id, label, title, intro, body) {
        return `
        <section class="section" id="${id}">
            <div class="wrap section-grid">
                <div class="section-label">${esc(label)}</div>
                <div>
                    <h2 class="section-title">${esc(title)}</h2>
                    ${intro ? `<p class="section-intro">${intro}</p>` : ''}
                    <div class="section-body">${body}</div>
                </div>
            </div>
        </section>`;
    }

    function researchSection(s, L) {
        const items = DATA.research.map(area => `
            <article class="research-item reveal">
                <div>
                    <h3>${esc(t(area.title, lang))}</h3>
                    <p>${esc(t(area.text, lang))}</p>
                </div>
                <div class="figures">
                    ${area.images.map(src => `<img src="${src}" alt="${esc(t(area.title, lang))}" loading="lazy">`).join('')}
                </div>
            </article>`).join('');
        return sectionShell('research', '01', s.research, '', `<div class="research">${items}</div>`);
    }

    function careerSection(s, L) {
        const positions = DATA.positions.map(p => `
            <div class="entry reveal">
                <div class="entry-period">${esc(p.period)}</div>
                <div>
                    <div class="entry-title">${esc(t(p.role, lang))}</div>
                    <div class="entry-org">${esc(t(p.org, lang))}</div>
                    <div class="entry-text">${esc(t(p.text, lang))}</div>
                </div>
            </div>`).join('');

        const education = DATA.education.map(e => `
            <div class="entry reveal">
                <div class="entry-period">${esc(e.period)}</div>
                <div>
                    <div class="entry-title">${esc(t(e.degree, lang))}</div>
                    <div class="entry-org">${esc(t(e.org, lang))}</div>
                    <div class="entry-text">${esc(t(e.note, lang))}</div>
                </div>
            </div>`).join('');

        return sectionShell('career', '02', s.career, '',
            `<div class="subhead">${esc(s.positions)}</div><div class="entries">${positions}</div>
             <div class="subhead">${esc(s.education)}</div><div class="entries">${education}</div>`);
    }

    function publicationsSection(s, L) {
        const years = [...new Set(DATA.publications.map(p => p.year))].sort((a, b) => b - a);
        const options = [`<option value="">${esc(L.ui.allYears)}</option>`]
            .concat(years.map(y => `<option value="${y}">${y}</option>`)).join('');

        // the preprints block disappears entirely once everything is published
        const preprints = DATA.preprints.length ? `
            <div class="subhead">${esc(s.preprints)}</div>
            <div class="pubs">${DATA.preprints.map(p => pubMarkup(p, true)).join('')}</div>` : '';

        return sectionShell('publications', '03', s.publications, esc(L.pubIntro), `
            ${preprints}
            <div class="subhead">${esc(s.published)}</div>
            <div class="filters">
                <input id="pub-search" class="field" type="search" placeholder="${esc(L.ui.search)}"
                       aria-label="${esc(L.ui.search)}">
                <select id="pub-year" class="field" aria-label="${esc(L.ui.allYears)}">${options}</select>
                <span class="count" id="pub-count"></span>
            </div>
            <div class="pubs" id="pub-list">${DATA.publications.map(p => pubMarkup(p)).join('')}</div>
            <p class="empty" id="pub-empty" hidden>${esc(L.ui.noResults)}</p>`);
    }

    function pubMarkup(p, isPreprint) {
        const L = T[lang];
        const note = p.note ? `<span class="tag">${esc(t(p.note, lang))}</span>` : '';
        const audio = p.audio ? `
            <div class="pub-audio">
                <div class="pub-audio-head">
                    <span class="pub-audio-label">${esc(L.ui.podcast)}</span>
                    <span>${esc(t(p.audio.title, lang))}</span>
                    <span class="pub-audio-credit">${esc(L.ui.podcastBy)}
                        <a href="https://siliconsuite.app/CleverGhost/" target="_blank"
                           rel="noopener">${esc(L.ui.cleverghost)}</a></span>
                </div>
                <audio controls preload="none" src="${p.audio.src}"></audio>
            </div>` : '';
        return `
        <article class="pub${isPreprint ? '' : ' pub-filterable'}" data-year="${p.year}">
            <div class="pub-year">${p.year}</div>
            <div>
                <div class="pub-title">${esc(p.title)}${note}</div>
                <div class="pub-meta">${esc(p.authors)} · <span class="pub-venue">${esc(p.venue)}</span></div>
                ${audio}
            </div>
        </article>`;
    }

    function conferencesSection(s, L) {
        const org = DATA.conferences.organisation
            .map(i => `<li>${esc(t(i, lang))}</li>`).join('');
        const invited = DATA.conferences.invited.map(c => `
            <li>${esc(t(c.title, lang))} — ${esc(t(c.place, lang))}, ${c.year}.</li>`).join('');
        return sectionShell('conferences', '04', s.conferences, '',
            `<div class="subhead">${esc(s.organisation)}</div><ul class="bullets">${org}</ul>
             <div class="subhead">${esc(s.invited)}</div><ul class="bullets">${invited}</ul>`);
    }

    function teachingSection(s, L) {
        const courses = DATA.teaching.map(i => `<li>${esc(t(i, lang))}</li>`).join('');

        const funding = DATA.funding.map(f => `
            <div class="entry reveal">
                <div class="entry-period">${esc(t(f.role, lang))}</div>
                <div>
                    <div class="entry-title">${esc(t(f.name, lang))}</div>
                    <div class="entry-text">${esc(t(f.text, lang))}</div>
                </div>
            </div>`).join('');

        const group = list => list.map(x => `
            <div class="entry reveal">
                <div class="entry-period">${esc(x.years)}</div>
                <div>
                    <div class="entry-title">${esc(x.who)}${x.kind ? ` <span class="tag">${esc(x.kind)}</span>` : ''}</div>
                    ${x.title ? `<div class="entry-org">${esc(x.title)}</div>` : ''}
                    <div class="entry-text">${esc(t(x.note, lang))}</div>
                </div>
            </div>`).join('');

        return sectionShell('teaching', '05', s.teaching, '', `
            <div class="subhead">${esc(s.courses)}</div><ul class="bullets">${courses}</ul>
            <div class="subhead">${esc(s.funding)}</div><div class="entries">${funding}</div>
            <div class="subhead">${esc(s.supervision)} — ${esc(s.current)}</div>
            <div class="entries">${group(DATA.supervision.current)}</div>
            <div class="subhead">${esc(s.supervision)} — ${esc(s.completed)}</div>
            <div class="entries">${group(DATA.supervision.completed)}</div>
            <div class="subhead">${esc(s.internships)}</div>
            <div class="entries">${group(DATA.supervision.internships)}</div>`);
    }

    function softwareSection(s, L) {
        const cards = list => list.map(app => `
            <article class="card reveal">
                <h3>${esc(t(app.title, lang))}</h3>
                <p>${esc(t(app.text, lang))}</p>
                <div class="card-links">
                    ${app.links.map(l => `<a class="btn${l.primary ? ' btn-primary' : ''}" href="${l.url}"
                        target="_blank" rel="noopener">${esc(t(l.label, lang))}</a>`).join('')}
                </div>
            </article>`).join('');
        return sectionShell('software', '06', s.software, '', `
            <div class="subhead">${esc(s.softwareMine)}</div>
            <div class="cards">${cards(DATA.software.mine)}</div>
            <div class="subhead">${esc(s.softwareLiked)}</div>
            <div class="cards">${cards(DATA.software.liked)}</div>`);
    }

    function documentsSection(s, L) {
        const cards = DATA.documents.map(d => `
            <article class="card reveal">
                <h3>${esc(t(d.title, lang))}</h3>
                <p>${esc(t(d.text, lang))}</p>
                <div class="card-links">
                    ${d.files.map(f => `<a class="btn btn-primary" href="${f.url}" target="_blank"
                        rel="noopener">${esc(t(f.label, lang))} ↓</a>`).join('')}
                </div>
            </article>`).join('');
        return sectionShell('documents', '07', s.documents, '', `<div class="cards">${cards}</div>`);
    }

    function visualSection(s, L) {
        return sectionShell('visual', '08', s.visual, esc(L.visualIntro), `
            <div class="viz reveal"><iframe src="${DATA.visualisation.src}" loading="lazy"
                title="${esc(s.visual)}"></iframe></div>
            <p style="margin-top:12px"><a class="btn" href="${DATA.visualisation.src}"
                target="_blank" rel="noopener">${esc(L.ui.openFull)} →</a></p>`);
    }

    /* ---------------- masthead & nav ---------------- */

    function renderHeader(L) {
        const p = DATA.personal;
        document.getElementById('masthead').innerHTML = `
        <div class="wrap">
            <div class="utility">
                <div class="lang" role="group" aria-label="Language">
                    <button type="button" data-lang="fr" aria-pressed="${lang === 'fr'}">FR</button>
                    <button type="button" data-lang="en" aria-pressed="${lang === 'en'}">EN</button>
                </div>
                <button type="button" class="print-link" id="print-btn">${esc(L.ui.printCv)}</button>
            </div>
            <div class="masthead-grid">
                <div>
                    <h1 class="name">${esc(p.name)}</h1>
                    <div class="role">${esc(L.role)}</div>
                    <div class="affil">${esc(L.affiliation)}</div>
                    <p class="tagline">${esc(L.tagline)}</p>
                    <div class="contact">
                        <span><span class="label">${esc(L.email)}</span><a href="mailto:${p.email}">${esc(p.email)}</a></span>
                        <span><span class="label">${esc(L.website)}</span><a href="${p.website}">${esc(p.website.replace(/^https?:\/\//, ''))}</a></span>
                    </div>
                </div>
                <img class="portrait" src="${p.photo}" alt="${esc(p.name)}"
                     onerror="this.src='https://placehold.co/264x264/f2efe8/56534c?text=O.S'">
            </div>
        </div>`;

        document.getElementById('nav').innerHTML = `
        <div class="wrap nav-inner">
            ${Object.keys(L.nav).map(id => `<a href="#${id}">${esc(L.nav[id])}</a>`).join('')}
        </div>`;

        document.querySelectorAll('.lang button').forEach(b =>
            b.addEventListener('click', () => setLang(b.dataset.lang)));
        document.getElementById('print-btn').addEventListener('click', () => window.print());
    }

    /* ---------------- publication filtering ---------------- */

    function wirePublications(L) {
        const search = document.getElementById('pub-search');
        const year = document.getElementById('pub-year');
        const count = document.getElementById('pub-count');
        const empty = document.getElementById('pub-empty');
        const items = Array.from(document.querySelectorAll('.pub-filterable'));
        if (!search) return;

        function apply() {
            const q = search.value.trim().toLowerCase();
            const y = year.value;
            let shown = 0;
            items.forEach(el => {
                const hit = (!q || el.textContent.toLowerCase().includes(q)) && (!y || el.dataset.year === y);
                el.hidden = !hit;
                if (hit) shown++;
            });
            count.textContent = L.ui.results(shown);
            empty.hidden = shown > 0;
        }

        search.addEventListener('input', apply);
        year.addEventListener('change', apply);
        search.addEventListener('keydown', e => {
            if (e.key === 'Escape') { search.value = ''; apply(); }
        });
        apply();
    }

    /* ---------------- scroll behaviour ---------------- */

    function wireScroll() {
        const links = Array.from(document.querySelectorAll('.nav a'));
        const sections = links
            .map(a => document.getElementById(a.getAttribute('href').slice(1)))
            .filter(Boolean);

        const spy = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
            });
        }, { rootMargin: '-64px 0px -70% 0px', threshold: 0 });
        sections.forEach(s => spy.observe(s));

        const reveals = Array.from(document.querySelectorAll('.reveal'));
        const revealAll = () => reveals.forEach(el => el.classList.add('in'));
        if (reduced || !('IntersectionObserver' in window)) revealAll();
        // never leave the page blank if the observer never reports
        setTimeout(() => { if (!document.querySelector('.reveal.in')) revealAll(); }, 1600);

        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
        reveals.forEach(el => io.observe(el));

        const top = document.getElementById('to-top');
        addEventListener('scroll', () => top.classList.toggle('show', scrollY > 700), { passive: true });
        top.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
    }

    /* ---------------- boot ---------------- */

    function render() {
        const L = T[lang];
        const s = L.sections;
        document.documentElement.lang = lang;
        document.title = `${DATA.personal.name} — ${L.role}`;

        renderHeader(L);
        document.getElementById('main').innerHTML = [
            researchSection(s, L),
            careerSection(s, L),
            publicationsSection(s, L),
            conferencesSection(s, L),
            teachingSection(s, L),
            softwareSection(s, L),
            documentsSection(s, L),
            visualSection(s, L)
        ].join('');

        document.getElementById('foot').innerHTML = `
            <div class="wrap foot">
                <span>© ${new Date().getFullYear()} ${esc(DATA.personal.name)}</span>
                <span><a href="mailto:${DATA.personal.email}">${esc(DATA.personal.email)}</a></span>
            </div>`;

        wirePublications(L);
        wireScroll();
    }

    function setLang(next) {
        if (next === lang) return;
        lang = next;
        try { localStorage.setItem(STORE_KEY, next); } catch (e) { /* private mode */ }
        const y = scrollY;
        render();
        scrollTo({ top: y, behavior: 'auto' });
    }

    render();
})();
