// Données éditoriales du portfolio.
window.skillsData = [
    {
        category: "Langages de programmation",
        icon: "fa-code",
        items: ["Python", "Java", "Dart / Flutter", "HTML5 & CSS3", "SQL"]
    },
    {
        category: "Outils & environnements",
        icon: "fa-laptop-code",
        items: ["Linux (Arch)", "Git & GitHub", "Neovim", "VS Code", "Android Studio", "SQLite"]
    },
    {
        category: "Architectures & frameworks",
        icon: "fa-cubes",
        items: ["Clean Architecture", "Pattern MVC", "POO", "Riverpod", "Tkinter GUI", "Matplotlib"]
    }
];

window.projectsData = [
    {
        title: "Comparateur de prix de l'électronique",
        category: "data",
        status: "Projet académique",
        featured: true,
        tech: ["Python", "Streamlit", "Pandas", "openpyxl", "MVC"],
        description: "Application d'analyse comparative des prix d'appareils électroniques à Abidjan. Le pipeline importe des sources CSV, JSON et Excel, nettoie et journalise les anomalies, rapproche les produits, compare les prix, construit des paniers et étudie l'historique. Les enseignes et données commerciales utilisées sont fictives.",
        icon: "fa-chart-line",
        github: "https://github.com/YobDelor/Analyse-comparative-de-marche",
        repoLabel: "Voir le dépôt"
    },
    {
        title: "Application Manga Reader",
        category: "mobile",
        status: "Projet d'équipe",
        featured: false,
        tech: ["Flutter", "Dart", "Clean Architecture", "Riverpod", "Jikan API"],
        description: "Application mobile de lecture avec thèmes d'inspiration Tachiyomi, gestion d'état Riverpod et intégration de l'API REST Jikan v4.",
        icon: "fa-book-open",
        github: "",
        repoLabel: "Dépôt à associer"
    },
    {
        title: "Gestion CAN Football",
        category: "desktop",
        status: "Projet académique",
        featured: false,
        tech: ["Python", "Tkinter", "SQLite", "Architecture MVC"],
        description: "Application desktop de gestion d'un tournoi de Coupe d'Afrique des Nations, structurée selon le pattern MVC, avec plusieurs vues et une base de données relationnelle SQLite.",
        icon: "fa-trophy",
        github: "",
        repoLabel: "Dépôt à associer"
    },
    {
        title: "Calculateur de forces coplanaires",
        category: "desktop",
        status: "Projet académique",
        featured: false,
        tech: ["Python", "Tkinter", "Matplotlib"],
        description: "Outil de mécanique appliquée pour calculer et visualiser des forces coplanaires en 2D, avec représentation vectorielle interactive via Matplotlib.",
        icon: "fa-calculator",
        github: "",
        repoLabel: "Dépôt à associer"
    },
    {
        title: "Site web de voyage",
        category: "web",
        status: "Projet web",
        featured: false,
        tech: ["HTML5", "CSS3", "Keyframes", "Flexbox"],
        description: "Interface web de deux pages inspirée des plateformes de voyage, avec animations CSS, mise en page responsive et typographie Google Fonts.",
        icon: "fa-plane-departure",
        github: "",
        repoLabel: "Dépôt à associer"
    },
    {
        title: "KODJ — Application Flutter",
        category: "mobile",
        status: "En développement",
        featured: false,
        tech: ["Flutter", "Dart", "Android", "iOS", "Web", "Desktop"],
        description: "Projet Flutter multi-plateforme présent sur le compte Hiemmel-boop. Le dépôt est encore à l'étape de structure initiale ; il est présenté ici comme un travail en cours, pas comme une application achevée.",
        icon: "fa-mobile-screen-button",
        github: "https://github.com/Hiemmel-boop/KODJ",
        repoLabel: "Voir le dépôt"
    }
];

// Dépôts forkés ou d'exercices : visibles séparément des projets originaux.
window.learningRepos = [
    {
        title: "CSS Exercises",
        description: "Exercices de mise en pratique CSS — fork du dépôt The Odin Project.",
        url: "https://github.com/Hiemmel-boop/css-exercises",
        icon: "fa-paintbrush"
    },
    {
        title: "30 Days of Python",
        description: "Dépôt de suivi d'un parcours d'exercices Python — fork.",
        url: "https://github.com/Hiemmel-boop/30DaysOfPythonChallenge",
        icon: "fa-code"
    },
    {
        title: "Project Based Learning",
        description: "Collection de ressources et tutoriels orientés projets — fork.",
        url: "https://github.com/Hiemmel-boop/project-based-learning",
        icon: "fa-book-open"
    }
];
