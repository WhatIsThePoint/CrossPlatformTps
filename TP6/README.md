# 🔐 TP6 : Authentification multi-utilisateurs

## 📋 Objectif

Application React Native avec système d'authentification permettant à plusieurs utilisateurs prédéfinis de se connecter. Le nom d'utilisateur est affiché sur toutes les pages de l'application.

## ✨ Fonctionnalités

- ✅ Page de connexion avec validation des identifiants
- ✅ 3 utilisateurs prédéfinis
- ✅ Navigation entre 4 écrans (Login, Home, Profile, Settings)
- ✅ Affichage du nom d'utilisateur sur tous les écrans
- ✅ Bouton de déconnexion
- ✅ Gestion des erreurs d'authentification

## 👥 Utilisateurs de test

| Nom d'utilisateur | Mot de passe |
|-------------------|--------------|
| alex              | 1234         |
| marie             | abcd         |
| tomi              | pass         |

## 🚀 Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Expo CLI (optionnel mais recommandé)

### Étapes d'installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer l'application** :
```bash
npm start
```

3. **Tester l'application** :
   - Scannez le QR code avec l'application Expo Go (Android/iOS)
   - Ou appuyez sur `a` pour Android, `i` pour iOS, `w` pour web

## 📱 Structure de l'application

```
TP6/
├── App.js                      # Configuration de la navigation
├── screens/
│   ├── LoginScreen.js         # Écran de connexion
│   ├── HomeScreen.js          # Écran d'accueil
│   ├── ProfileScreen.js       # Écran de profil
│   └── SettingsScreen.js      # Écran des paramètres
├── package.json               # Dépendances du projet
└── README.md                  # Documentation
```

## 🎯 Utilisation

### Connexion

1. Lancez l'application
2. Entrez un nom d'utilisateur et un mot de passe (voir tableau ci-dessus)
3. Cliquez sur "Se connecter"
4. En cas d'erreur, un message d'alerte s'affiche

### Navigation

Une fois connecté, vous pouvez :
- Naviguer vers le **Profil** pour voir vos informations
- Accéder aux **Paramètres** pour configurer vos préférences
- Vous **déconnecter** pour revenir à l'écran de connexion

### Déconnexion

Sur l'écran d'accueil, cliquez sur le bouton rouge "🚪 Déconnexion" pour retourner à la page de connexion.

## 🔧 Technologies utilisées

- **React Native** : Framework mobile
- **React Navigation** : Navigation entre écrans
- **Expo** : Plateforme de développement React Native

## 📝 Détails techniques

### Authentification

L'authentification est gérée localement avec un tableau d'utilisateurs prédéfinis dans `LoginScreen.js`. La validation se fait par comparaison du nom d'utilisateur et du mot de passe.

### Transmission du nom d'utilisateur

Le nom d'utilisateur est transmis via les paramètres de navigation :
```javascript
navigation.replace('Home', { username });
```

Et récupéré dans chaque écran :
```javascript
const username = route.params?.username || 'Utilisateur';
```

### Navigation

- `navigation.replace()` est utilisé pour la connexion/déconnexion (empêche le retour arrière)
- `navigation.navigate()` est utilisé pour la navigation normale entre écrans

## 🎨 Personnalisation

Vous pouvez facilement :
- Ajouter de nouveaux utilisateurs dans le tableau `users` de `LoginScreen.js`
- Modifier les styles dans chaque fichier d'écran
- Ajouter de nouveaux écrans en les enregistrant dans `App.js`

## 📄 Licence

Projet éducatif - TP6 Authentification
