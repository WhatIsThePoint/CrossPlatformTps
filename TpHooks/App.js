import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // 1. État pour le nom (texte)
  const [nom, setNom] = useState('');

  // 2. État pour l'utilisateur (objet)
  const [user, setUser] = useState({ nom: '', age: 0 });

  // 3. État pour la visibilité (booléen)
  const [isVisible, setIsVisible] = useState(false);

  // 4. État pour les tâches (liste)
  const [tasks, setTasks] = useState([]);

  // Fonction pour mettre à jour l'utilisateur
  const mettreAJourUtilisateur = () => {
    setUser({ ...user, nom: nom });
  };

  // Fonction pour augmenter l'âge
  const augmenterAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  // Fonction pour ajouter une tâche
  const ajouterTache = () => {
    const nouvelleTache = {
      id: tasks.length + 1,
      text: `Tâche de ${user.nom || 'Utilisateur'}`
    };
    setTasks([...tasks, nouvelleTache]);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Gestion Utilisateur & Tâches</Text>
      </View>

      {/* Section 1: Saisie du nom */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Saisie du nom</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom"
          value={nom}
          onChangeText={setNom}
        />
        <Text style={styles.infoText}>Nom saisi : {nom}</Text>
      </View>

      {/* Section 2: Mettre à jour l'utilisateur */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Gestion de l'utilisateur</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Mettre à jour l'utilisateur"
            onPress={mettreAJourUtilisateur}
            color="#4CAF50"
          />
        </View>
      </View>

      {/* Section 3: Affichage conditionnel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👁️ Affichage des informations</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={isVisible ? "Cacher les infos" : "Afficher les infos"}
            onPress={() => setIsVisible(!isVisible)}
            color="#2196F3"
          />
        </View>

        {isVisible && (
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>→ Nom : {user.nom || '(non défini)'}</Text>
            <Text style={styles.userInfoText}>→ Âge : {user.age}</Text>
            <View style={[styles.buttonContainer, styles.marginTop]}>
              <Button
                title="Augmenter l'âge"
                onPress={augmenterAge}
                color="#FF9800"
              />
            </View>
          </View>
        )}
      </View>

      {/* Section 4: Liste de tâches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Liste des tâches</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Ajouter une tâche"
            onPress={ajouterTache}
            color="#9C27B0"
          />
        </View>

        {tasks.length > 0 ? (
          <View style={styles.taskList}>
            <Text style={styles.taskListTitle}>🎯 Tâches :</Text>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.taskItem}>
                  <Text style={styles.taskText}>• {item.text}</Text>
                </View>
              )}
              scrollEnabled={false}
            />
          </View>
        ) : (
          <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#3F51B5',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginVertical: 5,
  },
  marginTop: {
    marginTop: 10,
  },
  userInfo: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  userInfoText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  taskList: {
    marginTop: 15,
  },
  taskListTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  taskItem: {
    backgroundColor: '#F3E5F5',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#9C27B0',
  },
  taskText: {
    fontSize: 15,
    color: '#333',
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
});
