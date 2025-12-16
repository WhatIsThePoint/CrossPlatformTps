# TP Balises React Native 📱

## Description

Ce projet est une application React Native complète qui démontre l'utilisation de tous les composants de base (balises) en React Native. Il s'agit d'un TP pratique qui illustre chaque composant avec des exemples interactifs.

## 🎯 Objectifs du TP

Apprendre et maîtriser les 8 composants fondamentaux de React Native :

1. **View** - Conteneur de base pour organiser les composants
2. **Text** - Affichage de texte stylisé
3. **Image** - Affichage d'images locales ou distantes
4. **TextInput** - Champ de saisie de texte
5. **Button** - Bouton standard cliquable
6. **ScrollView** - Conteneur défilable pour contenu long
7. **FlatList** - Liste optimisée pour afficher des données
8. **TouchableOpacity** - Élément interactif personnalisé avec effet d'opacité

## 📋 Fonctionnalités de l'Application

L'application inclut :

- ✅ Démonstration de chaque composant dans des sections dédiées
- ✅ Gestion d'état avec `useState` pour l'interactivité
- ✅ Système de gestion de tâches (ajout/suppression)
- ✅ Champs de saisie avec validation
- ✅ Boutons standards et personnalisés
- ✅ Liste défilable et optimisée
- ✅ Interface utilisateur moderne et responsive
- ✅ Styles personnalisés avec StyleSheet

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (version 20.16 ou supérieure - **recommandé pour SDK 54**)
- npm ou yarn
- Expo CLI (recommandé pour les débutants)
- Application Expo Go sur votre téléphone (iOS ou Android) - **Version SDK 54**

> **Note**: Ce projet utilise Expo SDK 54 avec React Native 0.81 et React 19. Si vous avez Node.js v18, le projet fonctionnera mais vous verrez des avertissements. Pour une expérience optimale, utilisez Node.js v20+.

### Étapes d'installation

1. **Cloner ou naviguer vers le projet**
   ```bash
   cd /home/yawsef/Desktop/CrossTPs/TpBalises
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Le fichier App.js est déjà configuré**
   Le fichier `App.js` fourni contient déjà tout le code nécessaire.

4. **Lancer l'application**
   ```bash
   npm start
   # ou
   npx expo start
   ```

5. **Tester l'application**
   - Scannez le QR code avec l'application Expo Go (Android) ou l'appareil photo (iOS)
   - Assurez-vous d'avoir la dernière version d'Expo Go (SDK 54) installée
   - L'application se chargera sur votre téléphone

## 📱 Structure du Code

### Composants Utilisés

#### 1. View
```javascript
<View style={styles.container}>
  {/* Autres composants */}
</View>
```
- Conteneur principal pour organiser l'interface
- Équivalent de `<div>` en HTML
- Utilisé avec Flexbox pour la mise en page

#### 2. Text
```javascript
<Text style={styles.sectionTitle}>Titre de Section</Text>
```
- Affiche du texte
- Supporte les styles (couleur, taille, police, etc.)
- Peut être imbriqué pour des styles mixtes

#### 3. Image
```javascript
<Image
  source={require('./assets/logo.png')}
  style={{ width: 200, height: 200 }}
/>
```
- Affiche des images locales ou distantes
- Nécessite des dimensions explicites
- Supporte différents modes de redimensionnement

#### 4. TextInput
```javascript
<TextInput
  style={styles.input}
  placeholder="Entrez du texte..."
  onChangeText={setInputText}
  value={inputText}
/>
```
- Champ de saisie de texte
- Gère l'état avec `useState`
- Supporte les placeholders et la validation

#### 5. Button
```javascript
<Button
  title="Ajouter"
  onPress={addTask}
  color="#007AFF"
/>
```
- Bouton standard avec style natif
- Déclenche une action avec `onPress`
- Personnalisable avec la couleur

#### 6. ScrollView
```javascript
<ScrollView style={styles.container}>
  {/* Contenu défilable */}
</ScrollView>
```
- Rend le contenu défilable
- Utilisé comme conteneur principal de l'app
- Idéal pour contenu de longueur variable

#### 7. FlatList
```javascript
<FlatList
  data={taskList}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  keyExtractor={item => item.key}
/>
```
- Liste optimisée pour grandes quantités de données
- Rend uniquement les éléments visibles
- Nécessite une clé unique pour chaque élément

#### 8. TouchableOpacity
```javascript
<TouchableOpacity
  style={styles.customButton}
  onPress={() => Alert.alert('Pressé!')}
>
  <Text>Bouton Personnalisé</Text>
</TouchableOpacity>
```
- Élément cliquable personnalisé
- Effet d'opacité au toucher
- Plus flexible que Button pour le style

## 🎨 Styles et Design

L'application utilise `StyleSheet.create()` pour définir les styles :

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  // ... autres styles
});
```

### Principes de design utilisés :
- **Cards** : Sections avec ombres et bordures arrondies
- **Couleurs** : Palette cohérente (bleu, vert, rouge)
- **Espacement** : Marges et padding consistants
- **Typographie** : Hiérarchie claire des tailles de texte
- **Interactivité** : Feedback visuel sur les actions

## 🔧 Fonctionnalités Interactives

### Gestion de Tâches
L'application inclut un système complet de gestion de tâches :

1. **Ajouter une tâche** :
   - Saisir du texte dans le TextInput
   - Cliquer sur "Ajouter la tâche"
   - Validation : alerte si le champ est vide

2. **Afficher les tâches** :
   - Liste affichée avec FlatList
   - Chaque tâche a un style distinct

3. **Supprimer une tâche** :
   - Cliquer sur le bouton ✕ rouge
   - La tâche est retirée de la liste

### État de l'Application
```javascript
const [inputText, setInputText] = useState('');
const [taskList, setTaskList] = useState([...]);
```
- `inputText` : Texte saisi dans le champ
- `taskList` : Tableau des tâches

## 📚 Concepts React Native Abordés

1. **Hooks** :
   - `useState` pour la gestion d'état
   - Mise à jour d'état avec les setters

2. **Props** :
   - Passage de propriétés aux composants
   - `style`, `onPress`, `value`, etc.

3. **Événements** :
   - `onChangeText` pour TextInput
   - `onPress` pour les boutons
   - `Alert.alert()` pour les notifications

4. **Listes** :
   - Rendu de listes avec `map()` et FlatList
   - Gestion des clés uniques
   - Optimisation des performances

5. **Styles** :
   - StyleSheet API
   - Flexbox pour la mise en page
   - Styles conditionnels

## 🎓 Exercices Suggérés

Pour approfondir vos connaissances :

1. **Ajouter une image réelle** :
   - Créez un dossier `assets/`
   - Ajoutez une image `logo.png`
   - Remplacez le placeholder par l'image réelle

2. **Améliorer la gestion de tâches** :
   - Ajouter une case à cocher pour marquer les tâches complétées
   - Filtrer les tâches (toutes, complétées, actives)
   - Persister les données avec AsyncStorage

3. **Personnaliser les styles** :
   - Changer la palette de couleurs
   - Ajouter des animations
   - Créer un thème sombre/clair

4. **Ajouter de nouveaux composants** :
   - Modal pour confirmer la suppression
   - Switch pour activer/désactiver des fonctionnalités
   - ActivityIndicator pour les chargements

## 📖 Ressources Supplémentaires

- [Documentation officielle React Native](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [StyleSheet API](https://reactnative.dev/docs/stylesheet)

## 🐛 Dépannage

### L'application ne démarre pas
```bash
# Nettoyer le cache
npx expo start -c
```

### Erreur de dépendances
```bash
# Réinstaller les dépendances
rm -rf node_modules
npm install
```

### Problème de connexion
- Vérifiez que votre téléphone et ordinateur sont sur le même réseau Wi-Fi
- Redémarrez Expo Go
- Redémarrez le serveur de développement

## 👨‍💻 Auteur

TP créé pour l'apprentissage des composants de base de React Native.

## 📝 Licence

Ce projet est à usage éducatif.

---

**Bon apprentissage ! 🚀**
