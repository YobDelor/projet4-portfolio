# Portfolio — Yobouet Jean Luc Delor KASSIÉ

Portfolio personnel d'un étudiant en Licence 2 Génie Logiciel à l'Institut Ivoirien de Technologie (IIT, Côte d'Ivoire). Le site présente mon parcours, mes compétences, mes projets et un formulaire de contact.

**Démo en ligne : <https://delor-dev.netlify.app>**

**Vidéo de présentation : [▶ Regarder (≈ 6 min)](https://drive.google.com/file/d/1ACge_cPi1ttSDz9WFXRQnVJQ-TcAmztZ/view?usp=sharing)**

Le design est inspiré de [Escape Velocity](https://html5up.net/escape-velocity) (HTML5 UP) : composition éditoriale, bandeaux corail, en-tête bleu nuit, sections claires.

## Vidéo de présentation

[▶ Regarder la vidéo de présentation](https://drive.google.com/file/d/1ACge_cPi1ttSDz9WFXRQnVJQ-TcAmztZ/view?usp=sharing)

Visite commentée du parcours, du site et des projets. Le lien ouvre la vidéo sur Google Drive.

## Fonctionnalités

- **Site statique** : HTML, CSS et JavaScript, sans framework ni étape de compilation.
- **Thème clair / sombre**, mémorisé d'une visite à l'autre.
- **Projets filtrables** par catégorie, avec recherche par titre ou par technologie.
- **Compétences et projets pilotés par les données** (`assets/js/data.js`) : ajouter un projet ne demande pas de toucher au HTML.
- **CV téléchargeable** au format PDF.
- **Formulaire de contact** (Formspree) avec page de confirmation et champ anti-spam.
- **Responsive** : navigation mobile, grilles adaptatives.
- **Accessibilité** : attributs ARIA, navigation au clavier, respect de `prefers-reduced-motion`.
- Barre de progression de lecture et bouton « retour en haut ».

## Technologies

| Domaine | Outils |
| --- | --- |
| Structure et style | HTML5, CSS3 (variables CSS, Flexbox, Grid) |
| Interactions | JavaScript natif (aucune dépendance) |
| Icônes et police | Font Awesome 6 et Google Fonts (Source Sans 3), via CDN |
| Formulaire | Formspree |

## Structure du projet

```text
.
├── index.html              # Page principale (sections, navigation, formulaire)
├── merci.html              # Page affichée après l'envoi du formulaire
├── assets/
│   ├── css/style.css       # Palette, mise en page, responsive, thème sombre
│   ├── js/data.js          # Compétences, projets, dépôts d'apprentissage
│   ├── js/main.js          # Rendu des cartes, filtres, recherche, thème
│   ├── images/profile.jpg  # Portrait
│   └── cv/CV_Yobouet_Delor_Kassie.pdf
└── README.md
```

## Lancer le site en local

Aucune installation n'est nécessaire. Depuis la racine du projet :

```bash
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Personnaliser le contenu

- **Projets et compétences** : modifier `assets/js/data.js`. Chaque projet a un titre, une catégorie, des technologies, une description et un lien GitHub. Un projet dont le champ `github` est vide affiche « Dépôt à associer ».
- **CV** : remplacer `assets/cv/CV_Yobouet_Delor_Kassie.pdf` en gardant le même nom de fichier.
- **Portrait** : remplacer `assets/images/profile.jpg`.
- **Couleurs et thème** : ajuster les variables CSS en haut de `assets/css/style.css`.

## Formulaire de contact

Le formulaire envoie les messages à [Formspree](https://formspree.io), qui les transmet par e-mail. Cela fonctionne sur n'importe quel hébergeur statique (Netlify, GitHub Pages, Cloudflare Pages…).

1. Créer un compte gratuit sur Formspree, puis un nouveau formulaire avec l'adresse de réception souhaitée.
2. Copier l'identifiant du formulaire (par exemple `xyzabcde`).
3. Dans `index.html`, remplacer `VOTRE_ID_FORMSPREE` dans l'attribut `action` du formulaire par cet identifiant.

Tant que l'identifiant n'est pas renseigné, le bouton d'envoi ouvre la messagerie de l'utilisateur avec le message pré-rempli (`mailto:`). Le champ `_gotcha` est un piège anti-spam invisible.

## Déploiement

Le site étant statique, il peut être publié tel quel : il n'y a aucune commande de build, et le dossier à publier est la racine du dépôt. Il est actuellement hébergé sur Netlify.

## Auteur

**Yobouet Jean Luc Delor KASSIÉ**

- E-mail : [yobouetdelor@gmail.com](mailto:yobouetdelor@gmail.com)
- GitHub : [YobDelor](https://github.com/YobDelor) · [Hiemmel-boop](https://github.com/Hiemmel-boop)

Les textes, le portrait et le CV m'appartiennent : merci de ne pas les réutiliser sans mon accord.

## Crédits

Design inspiré de [Escape Velocity](https://html5up.net/escape-velocity) par [HTML5 UP](https://html5up.net/), sous licence [CC BY 3.0](https://html5up.net/license).