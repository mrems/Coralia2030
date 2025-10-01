# CORALIA 2032 - Composant React

Ce projet contient la transformation de la page HTML Coralia en composant React réutilisable.

## 📁 Fichiers

- **`CoraliaEmail.jsx`** : Version simple du composant React
- **`CoraliaEmailOptimized.jsx`** : Version optimisée avec props et hooks
- **`coralia.css`** : Styles CSS pour le composant
- **`App.jsx`** : Exemple d'utilisation du composant
- **`App.css`** : Styles pour l'application d'exemple

## 🚀 Installation

1. Copiez les fichiers dans votre projet React
2. Assurez-vous que le fichier `coralia.css` est dans le même dossier
3. Importez le composant dans votre application

## 💻 Utilisation

### Version Simple

```jsx
import CoraliaEmail from './CoraliaEmail';

function App() {
  return (
    <div>
      <CoraliaEmail />
    </div>
  );
}
```

### Version Optimisée

```jsx
import CoraliaEmailOptimized from './CoraliaEmailOptimized';

function App() {
  return (
    <div>
      <CoraliaEmailOptimized 
        contactEmail="votre@email.com"
        contactPhone="06 12 34 56 78"
        showHeader={true}
        showFooter={true}
        customTitle="Votre titre personnalisé"
      />
    </div>
  );
}
```

## ⚙️ Props Disponibles

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `contactEmail` | string | "mat_mail@ymail.com" | Email de contact |
| `contactPhone` | string | "06 93 49 90 85" | Téléphone de contact |
| `showHeader` | boolean | true | Afficher le header |
| `showFooter` | boolean | true | Afficher le footer |
| `customTitle` | string | "CORALIA 2032..." | Titre personnalisé |

## 🎨 Personnalisation

### Styles CSS

Le composant utilise le fichier `coralia.css` pour le styling. Vous pouvez :

1. Modifier directement le fichier CSS
2. Créer vos propres classes CSS
3. Utiliser des styles inline avec les props

### Contenu

Pour modifier le contenu, éditez directement le composant ou créez une version avec des props pour le contenu :

```jsx
const CoraliaEmailCustom = ({ 
  sections, 
  headerTitle, 
  footerText 
}) => {
  // Votre logique personnalisée
};
```

## 📱 Responsive

Le composant est responsive et s'adapte automatiquement aux différentes tailles d'écran grâce aux media queries dans le CSS.

## 🔧 Fonctionnalités

- ✅ Conversion HTML vers JSX
- ✅ Styles CSS intégrés
- ✅ Props configurables
- ✅ Hooks React (useState, useEffect)
- ✅ Gestion des événements
- ✅ Responsive design
- ✅ Accessibilité (ARIA)

## 📋 Prérequis

- React 16.8+ (pour les hooks)
- Node.js et npm/yarn

## 🚀 Démarrage Rapide

```bash
# Cloner ou télécharger les fichiers
# Installer les dépendances (si nécessaire)
npm install

# Démarrer l'application
npm start
```

## 📝 Notes

- Le composant utilise des images hébergées sur `https://www.super-abu.com/coralia/`
- Assurez-vous que ces URLs sont accessibles dans votre environnement
- Pour un usage en production, considérez héberger les images localement

## 🤝 Contribution

N'hésitez pas à améliorer le composant en ajoutant :
- Plus de props de personnalisation
- Des animations CSS
- Une meilleure gestion des erreurs
- Des tests unitaires


