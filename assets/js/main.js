// Rendu des contenus et interactions du portfolio.

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-btn');
    const navigation = document.getElementById('primary-navigation');

    const closeMenu = () => {
        if (!menuButton || !navigation) return;
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Ouvrir le menu');
        menuButton.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    };

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
            menuButton.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        });
        navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
        window.addEventListener('resize', () => { if (window.innerWidth > 680) closeMenu(); });
    }

    const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));

    // Thème clair / sombre, mémorisé localement.
    const themeToggle = document.getElementById('theme-toggle');
    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        if (!themeToggle) return;
        const dark = theme === 'dark';
        themeToggle.innerHTML = dark
            ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
        themeToggle.setAttribute('aria-label', dark ? 'Activer le thème clair' : 'Activer le thème sombre');
        themeToggle.title = dark ? 'Passer au thème clair' : 'Passer au thème sombre';
    };
    let savedTheme = 'light';
    try { savedTheme = localStorage.getItem('delor-theme') || 'light'; } catch (error) { /* stockage indisponible : thème clair par défaut */ }
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
    themeToggle?.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        try { localStorage.setItem('delor-theme', nextTheme); } catch (error) { /* le thème reste actif pour la session */ }
    });

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && Array.isArray(window.skillsData)) {
        skillsContainer.innerHTML = window.skillsData.map((group) => `
            <article class="skill-card js-reveal">
                <div class="skill-card-header">
                    <span class="skill-icon"><i class="fa-solid ${escapeHTML(group.icon)}" aria-hidden="true"></i></span>
                    <h3>${escapeHTML(group.category)}</h3>
                </div>
                <div class="skill-tags">${group.items.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</div>
            </article>
        `).join('');
    }

    const projectsContainer = document.getElementById('projects-container');
    const projects = Array.isArray(window.projectsData) ? window.projectsData : [];
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map((project, index) => `
            <article class="project-card js-reveal ${project.featured ? 'is-featured' : ''}" data-category="${escapeHTML(project.category)}" data-search="${escapeHTML([project.title, project.description, ...project.tech].join(' ').toLowerCase())}">
                <div class="project-cover">
                    <span class="project-icon"><i class="fa-solid ${escapeHTML(project.icon)}" aria-hidden="true"></i></span>
                    <div class="project-cover-meta">
                        ${project.featured ? '<span class="featured-label"><i class="fa-solid fa-star" aria-hidden="true"></i> À la une</span>' : ''}
                        <span class="project-number">${project.status === 'En développement' ? 'EN COURS' : `PROJET ${String(index + 1).padStart(2, '0')}`}</span>
                    </div>
                </div>
                <div class="project-body">
                    <div class="project-title-row"><h3>${escapeHTML(project.title)}</h3><span class="project-status ${project.status === 'En développement' ? 'status-progress' : ''}">${escapeHTML(project.status)}</span></div>
                    <p>${escapeHTML(project.description)}</p>
                    <div class="project-footer">
                        <div class="project-tech" aria-label="Technologies utilisées">${project.tech.map((technology) => `<span>${escapeHTML(technology)}</span>`).join('')}</div>
                        ${project.github
                            ? `<a class="project-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.repoLabel)} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
                            : '<span class="project-link project-link-muted" title="Le lien précis du dépôt reste à renseigner">Dépôt à associer</span>'}
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Filtres combinables avec la recherche textuelle.
    const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
    const searchInput = document.getElementById('project-search');
    const resultCount = document.getElementById('project-results');
    const emptyMessage = document.getElementById('project-empty');
    let activeFilter = 'all';
    const filterProjects = () => {
        const term = (searchInput?.value || '').trim().toLowerCase();
        let visibleCount = 0;
        projectsContainer?.querySelectorAll('.project-card').forEach((card) => {
            const categoryMatches = activeFilter === 'all' || card.dataset.category === activeFilter;
            const searchMatches = !term || card.dataset.search.includes(term);
            const visible = categoryMatches && searchMatches;
            card.hidden = !visible;
            if (visible) visibleCount += 1;
        });
        if (resultCount) resultCount.textContent = `${visibleCount} projet${visibleCount > 1 ? 's' : ''} affiché${visibleCount > 1 ? 's' : ''} sur ${projects.length}`;
        if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    };
    filterButtons.forEach((button) => button.addEventListener('click', () => {
        activeFilter = button.dataset.filter || 'all';
        filterButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle('is-active', active);
            item.setAttribute('aria-pressed', String(active));
        });
        filterProjects();
    }));
    searchInput?.addEventListener('input', filterProjects);
    filterProjects();

    // Dépôts d'apprentissage et forks : volontairement séparés des projets originaux.
    const learningContainer = document.getElementById('learning-repos');
    if (learningContainer && Array.isArray(window.learningRepos)) {
        learningContainer.innerHTML = window.learningRepos.map((repo) => `
            <a class="learning-repo" href="${escapeHTML(repo.url)}" target="_blank" rel="noopener noreferrer">
                <span class="learning-icon"><i class="fa-solid ${escapeHTML(repo.icon)}" aria-hidden="true"></i></span>
                <span><strong>${escapeHTML(repo.title)}</strong><small>${escapeHTML(repo.description)}</small></span>
                <i class="fa-solid fa-arrow-up-right-from-square learning-arrow" aria-hidden="true"></i>
            </a>
        `).join('');
    }

    // Formulaire de contact : envoi via Formspree (réponse JSON, puis page de remerciement).
    // Tant que l'identifiant Formspree n'est pas renseigné dans l'attribut action,
    // le formulaire ouvre la messagerie de l'utilisateur avec le message pré-rempli.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const status = document.getElementById('form-status');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const setStatus = (message, isError) => {
            if (!status) return;
            status.textContent = message;
            status.dataset.state = isError ? 'error' : 'ok';
        };
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const data = new FormData(contactForm);
            if (data.get('_gotcha')) return;
            const endpoint = contactForm.getAttribute('action') || '';
            const mailto = contactForm.dataset.mailto;

            if (endpoint.includes('VOTRE_ID_FORMSPREE')) {
                const body = `Nom : ${data.get('name')}\nE-mail : ${data.get('email')}\n\n${data.get('message')}`;
                window.location.href = `mailto:${mailto}?subject=${encodeURIComponent(data.get('subject') || 'Contact portfolio')}&body=${encodeURIComponent(body)}`;
                return;
            }

            if (submitButton) submitButton.disabled = true;
            setStatus('Envoi en cours…', false);
            try {
                const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
                if (!response.ok) throw new Error('Erreur ' + response.status);
                window.location.href = 'merci.html';
            } catch (error) {
                setStatus(`Le message n'a pas pu être envoyé. Écris-moi directement à ${mailto}.`, true);
                if (submitButton) submitButton.disabled = false;
            }
        });
    }

    // Progression de lecture et bouton retour en haut.
    const progressBar = document.getElementById('scroll-progress-bar');
    const backToTop = document.getElementById('back-to-top');
    const updateScrollUI = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        if (progressBar) progressBar.style.width = `${progress}%`;
        backToTop?.classList.toggle('is-visible', window.scrollY > 550);
    };
    window.addEventListener('scroll', updateScrollUI, { passive: true });
    updateScrollUI();
    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Apparition douce au défilement, sans bloquer le contenu si l'API n'existe pas.
    const revealItems = document.querySelectorAll('.js-reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach((item, index) => {
            item.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
            observer.observe(item);
        });
    } else {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    }
});
