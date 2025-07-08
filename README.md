# Climactif

Site web pour sensibiliser et accompagner les utilisateurs dans leurs actions climat..

## Get Started

### Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Angular CLI](https://angular.io/cli) : `npm install -g @angular/cli`

### Installation

1. Cloner le repository :
   ```bash
   git clone https://github.com/MaelMainsard/climactif.git
   cd climactif
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm run start
   ```

4. Ouvrir votre navigateur sur [http://localhost:4200](http://localhost:4200)

## Développement

### Messages de commit

Ce projet utilise **semantic release** pour la gestion automatique des versions. Il est **obligatoire** d'utiliser le format de commit conventionnel.

Format : `type(scope): description`

**Types autorisés :**
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Changements de style (formatage, indentation)
- `refactor`: Refactorisation du code
- `test`: Ajout ou modification de tests
- `chore`: Tâches de maintenance

**Exemples :**
```
feat(auth): ajout de l'authentification par email
fix(navbar): correction du menu responsive
docs(readme): mise à jour des instructions d'installation
refactor(api): réorganisation des services
test(user): ajout des tests unitaires pour le composant utilisateur
```

### Structure du projet

```
src/
├── app/
│   ├── components/          # Composants réutilisables
│   ├── pages/              # Pages de l'application
│   ├── models/             # Modèles de données
│   ├── services/           # Services Angular
│   └── utils/              # Utilitaires
├── assets/                 # Ressources statiques
└── styles.css             # Styles globaux
```

## CI/CD

Le projet utilise GitHub Actions pour l'intégration continue et le déploiement automatique.

### Déploiement

L'application est automatiquement déployée sur **Vercel** à chaque push sur la branche prod.

**URL de production :** [https://climactif.vercel.app](https://climactif.vercel.app)

### Pipeline CI/CD

#### Pull request vers dev

- **Linting** : Vérification du code avec ESLint
- **Lighthouse** : Exécution de l'audit lighthouse
- **Ecoindex** : Exécution de l'audit ecoindex

#### Push dev vers prod
- **Release** : Versioning & release créés par semantic-release


## Contributeurs

- **Maël Mainsard** - Développeur / DevOps
- **Maxence Pille** - Développeur
