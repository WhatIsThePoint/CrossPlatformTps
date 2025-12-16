# 📚 Le Hook useState en React Native - Explication Syntaxique

## 🎯 Objectif Pédagogique du TP

Ce TP vise à maîtriser la **syntaxe et l'utilisation du Hook useState** en React Native à travers 4 types de données différents. Voici l'explication détaillée de chaque concept syntaxique.

---

## 1️⃣ Syntaxe de Base du Hook useState

### **Structure Générale**
```javascript
const [state, setState] = useState(valeurInitiale);
```

**Décomposition syntaxique :**
- `const` : déclaration constante (ne peut pas être réassignée)
- `[state, setState]` : **destructuration de tableau** - extrait 2 éléments du tableau retourné
- `state` : variable qui contient la **valeur actuelle** de l'état
- `setState` : fonction pour **modifier** l'état
- `useState(...)` : Hook React qui retourne un tableau de 2 éléments
- `valeurInitiale` : valeur de départ de l'état

---

## 2️⃣ Type 1 : État avec Texte (String)

### **Syntaxe dans le TP**
```javascript
const [nom, setNom] = useState('');
```

**Explication :**
- `nom` : variable d'état de type **string**
- `setNom` : fonction pour modifier `nom`
- `''` : chaîne vide comme valeur initiale

### **Utilisation avec TextInput**
```javascript
<TextInput
  value={nom}                    // Lie l'input à l'état
  onChangeText={setNom}          // Met à jour l'état à chaque frappe
/>
```

**Points syntaxiques importants :**
- `value={nom}` : **composant contrôlé** - la valeur vient de l'état
- `onChangeText={setNom}` : passe directement la fonction setter (pas besoin de `(text) => setNom(text)`)
- Les accolades `{}` permettent d'insérer du JavaScript dans JSX

### **Affichage dynamique**
```javascript
<Text>Nom saisi : {nom}</Text>
```
- `{nom}` : **interpolation** - affiche la valeur de la variable dans le JSX

---

## 3️⃣ Type 2 : État avec Booléen (Boolean)

### **Syntaxe dans le TP**
```javascript
const [isVisible, setIsVisible] = useState(false);
```

**Explication :**
- `isVisible` : variable booléenne (true/false)
- `false` : valeur initiale (caché par défaut)
- Convention : préfixer avec `is`, `has`, `should` pour les booléens

### **Toggle (Basculer) la Valeur**
```javascript
<Button 
  onPress={() => setIsVisible(!isVisible)}
/>
```

**Points syntaxiques :**
- `!isVisible` : **opérateur NOT** - inverse la valeur (true → false, false → true)
- `() => ...` : **fonction fléchée** - nécessaire car on passe une expression
- Sans `() =>`, le code s'exécuterait immédiatement au rendu

### **Rendu Conditionnel avec &&**
```javascript
{isVisible && (
  <View>
    <Text>Contenu visible</Text>
  </View>
)}
```

**Explication syntaxique :**
- `{...}` : bloc JavaScript dans JSX
- `isVisible &&` : **opérateur logique AND**
  - Si `isVisible` est `true` → affiche le composant
  - Si `isVisible` est `false` → n'affiche rien
- `(...)` : parenthèses pour grouper le JSX multi-lignes

### **Opérateur Ternaire pour Texte Dynamique**
```javascript
title={isVisible ? "Cacher les infos" : "Afficher les infos"}
```

**Syntaxe :**
- `condition ? valeurSiVrai : valeurSiFaux`
- Si `isVisible` est `true` → "Cacher les infos"
- Si `isVisible` est `false` → "Afficher les infos"

---

## 4️⃣ Type 3 : État avec Objet (Object)

### **Syntaxe dans le TP**
```javascript
const [user, setUser] = useState({ nom: '', age: 0 });
```

**Explication :**
- `user` : objet avec 2 propriétés
- `{ nom: '', age: 0 }` : **objet littéral** comme valeur initiale
- `nom` et `age` : propriétés de l'objet

### **⚠️ RÈGLE CRITIQUE : Immutabilité**

#### ❌ **MAUVAIS - Mutation Directe**
```javascript
// NE JAMAIS FAIRE ÇA !
user.nom = 'Ali';        // Modifie directement l'objet
user.age = 25;           // React ne détectera PAS le changement
```

#### ✅ **BON - Spread Operator**
```javascript
setUser({ ...user, nom: 'Ali' });
```

**Explication syntaxique du Spread Operator `...` :**
```javascript
{ ...user, nom: 'Ali' }
```

**Étapes :**
1. `...user` : **décompose** toutes les propriétés de `user`
   - Équivalent à : `{ nom: user.nom, age: user.age }`
2. `, nom: 'Ali'` : **écrase** la propriété `nom` avec la nouvelle valeur
3. Résultat : `{ nom: 'Ali', age: 0 }` (nouveau objet créé)

**Pourquoi c'est important :**
- React compare les références d'objets
- Modifier directement ne crée pas de nouvelle référence
- Le spread operator crée un **nouvel objet** → React détecte le changement

### **Exemples Pratiques**

#### Mettre à jour le nom
```javascript
const mettreAJourUtilisateur = () => {
  setUser({ ...user, nom: nom });
};
```
- Copie toutes les propriétés de `user`
- Remplace `nom` avec la valeur de la variable `nom`
- `age` reste inchangé

#### Incrémenter l'âge
```javascript
const augmenterAge = () => {
  setUser({ ...user, age: user.age + 1 });
};
```
- `user.age + 1` : calcule la nouvelle valeur
- Spread operator préserve `nom`

---

## 5️⃣ Type 4 : État avec Liste (Array)

### **Syntaxe dans le TP**
```javascript
const [tasks, setTasks] = useState([]);
```

**Explication :**
- `tasks` : tableau vide au départ
- `[]` : **tableau littéral** vide

### **⚠️ RÈGLE : Immutabilité des Tableaux**

#### ❌ **MAUVAIS - Mutation Directe**
```javascript
// NE JAMAIS FAIRE ÇA !
tasks.push(nouvelleTache);     // Modifie le tableau original
setTasks(tasks);               // React ne voit pas le changement
```

#### ✅ **BON - Spread Operator**
```javascript
setTasks([...tasks, nouvelleTache]);
```

**Explication syntaxique :**
```javascript
[...tasks, nouvelleTache]
```

**Étapes :**
1. `[...]` : crée un **nouveau tableau**
2. `...tasks` : **décompose** tous les éléments existants
   - Si `tasks = [1, 2, 3]`, alors `...tasks` donne `1, 2, 3`
3. `, nouvelleTache` : ajoute le nouvel élément à la fin
4. Résultat : nouveau tableau avec tous les anciens + le nouveau

### **Création d'une Tâche**
```javascript
const ajouterTache = () => {
  const nouvelleTache = {
    id: tasks.length + 1,
    text: `Tâche de ${user.nom || 'Utilisateur'}`
  };
  setTasks([...tasks, nouvelleTache]);
};
```

**Points syntaxiques :**

#### Template Literal (Chaîne de Caractères)
```javascript
`Tâche de ${user.nom || 'Utilisateur'}`
```
- **Backticks** `` ` ` `` : permettent l'interpolation
- `${...}` : insère une expression JavaScript
- `user.nom || 'Utilisateur'` : **opérateur OR logique**
  - Si `user.nom` existe et n'est pas vide → utilise `user.nom`
  - Sinon → utilise `'Utilisateur'` (valeur par défaut)

#### ID Unique
```javascript
id: tasks.length + 1
```
- `tasks.length` : nombre d'éléments dans le tableau
- `+ 1` : génère un ID unique (1, 2, 3, ...)

### **Affichage avec FlatList**
```javascript
<FlatList
  data={tasks}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Text>{item.text}</Text>
  )}
/>
```

**Explication syntaxique :**

#### `keyExtractor`
```javascript
keyExtractor={(item) => item.id.toString()}
```
- `(item) => ...` : fonction fléchée qui reçoit chaque élément
- `item.id` : accède à la propriété `id`
- `.toString()` : convertit le nombre en chaîne (requis par React)
- **But** : fournir une clé unique pour chaque élément (optimisation React)

#### `renderItem`
```javascript
renderItem={({ item }) => (...)}
```
- `({ item })` : **destructuration de paramètre**
  - Équivalent à : `(props) => { const item = props.item; ... }`
- Reçoit un objet avec la propriété `item`
- Retourne le JSX à afficher pour chaque élément

---

## 6️⃣ Syntaxes Importantes du TP

### **1. Fonction Fléchée (Arrow Function)**
```javascript
// Syntaxe classique
function maFonction() { ... }

// Syntaxe fléchée
const maFonction = () => { ... }
```

**Utilisations dans le TP :**
```javascript
onPress={() => setIsVisible(!isVisible)}    // Avec expression
onPress={mettreAJourUtilisateur}            // Référence directe
```

### **2. Destructuration**

#### Destructuration de Tableau
```javascript
const [nom, setNom] = useState('');
// Équivalent à :
const result = useState('');
const nom = result[0];
const setNom = result[1];
```

#### Destructuration d'Objet
```javascript
renderItem={({ item }) => ...}
// Équivalent à :
renderItem={(props) => {
  const item = props.item;
  ...
}}
```

### **3. Spread Operator `...`**

#### Avec Objets
```javascript
{ ...user, nom: 'Ali' }
// Copie toutes les propriétés + écrase nom
```

#### Avec Tableaux
```javascript
[...tasks, nouvelleTache]
// Copie tous les éléments + ajoute à la fin
```

### **4. Opérateurs Logiques**

#### OR `||` (Valeur par Défaut)
```javascript
user.nom || '(non défini)'
// Si user.nom est vide/null/undefined → utilise '(non défini)'
```

#### AND `&&` (Rendu Conditionnel)
```javascript
{isVisible && <View>...</View>}
// Affiche seulement si isVisible est true
```

#### NOT `!` (Inversion)
```javascript
!isVisible
// true → false, false → true
```

### **5. Template Literals**
```javascript
`Tâche de ${user.nom}`
// Backticks + ${} pour interpolation
```

---

## 7️⃣ Bonnes Pratiques Syntaxiques

### **1. Ne JAMAIS Modifier l'État Directement**
```javascript
// ❌ MAUVAIS
state = 'nouvelle valeur';
user.nom = 'Ali';
tasks.push(item);

// ✅ BON
setState('nouvelle valeur');
setUser({ ...user, nom: 'Ali' });
setTasks([...tasks, item]);
```

### **2. Toujours Créer de Nouveaux Objets/Tableaux**
```javascript
// Principe d'immutabilité
setUser({ ...user, age: user.age + 1 });    // Nouvel objet
setTasks([...tasks, newTask]);              // Nouveau tableau
```

### **3. Utiliser des Fonctions Fléchées pour les Callbacks**
```javascript
// ✅ Correct - fonction fléchée
onPress={() => setCount(count + 1)}

// ❌ Erreur - s'exécute immédiatement
onPress={setCount(count + 1)}
```

### **4. Nommer les États de Manière Descriptive**
```javascript
// ✅ BON
const [isVisible, setIsVisible] = useState(false);
const [tasks, setTasks] = useState([]);

// ❌ MAUVAIS
const [x, setX] = useState(false);
const [data, setData] = useState([]);
```

---

## 8️⃣ Résumé des 4 Types d'États

| Type | Syntaxe | Mise à Jour | Exemple |
|------|---------|-------------|---------|
| **String** | `useState('')` | `setState('valeur')` | Nom d'utilisateur |
| **Boolean** | `useState(false)` | `setState(!state)` | Visibilité |
| **Object** | `useState({...})` | `setState({...state, prop: val})` | Données utilisateur |
| **Array** | `useState([])` | `setState([...state, item])` | Liste de tâches |

---

## 🎓 Compétences Syntaxiques Acquises

Après ce TP, vous maîtrisez :

1. ✅ **Syntaxe du Hook useState** avec destructuration
2. ✅ **Spread operator** (`...`) pour objets et tableaux
3. ✅ **Fonctions fléchées** (`() => {}`)
4. ✅ **Template literals** (`` `${variable}` ``)
5. ✅ **Opérateurs logiques** (`&&`, `||`, `!`)
6. ✅ **Opérateur ternaire** (`condition ? vrai : faux`)
7. ✅ **Destructuration** de tableaux et objets
8. ✅ **Principe d'immutabilité** en React
9. ✅ **Composants contrôlés** (`value` + `onChange`)
10. ✅ **Rendu conditionnel** en JSX

---

## 📝 Points Clés à Retenir

> **useState retourne toujours un tableau de 2 éléments**
> - [0] : valeur actuelle
> - [1] : fonction pour modifier

> **Immutabilité = Créer de nouveaux objets/tableaux**
> - Utiliser `...` (spread operator)
> - Ne jamais modifier directement

> **Composants contrôlés = État unique source de vérité**
> - `value={state}` : affiche l'état
> - `onChange={setState}` : met à jour l'état

> **Rendu conditionnel avec `&&` et ternaire**
> - `{condition && <Component />}` : affiche si vrai
> - `{condition ? <A /> : <B />}` : choix entre deux

---

## 🎯 Application dans le TP

Le projet implémente **exactement** les 4 types d'états demandés :

1. **Texte** → `nom` : saisie utilisateur
2. **Booléen** → `isVisible` : affichage conditionnel
3. **Objet** → `user` : données structurées
4. **Liste** → `tasks` : collection d'éléments

Chaque type démontre les syntaxes et concepts essentiels de React Native ! 🚀
