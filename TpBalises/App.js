import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    ScrollView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

const App = () => {
    // États pour gérer les différentes interactions
    const [inputText, setInputText] = useState('');
    const [taskList, setTaskList] = useState([
        { key: '1', text: 'Apprendre View' },
        { key: '2', text: 'Apprendre Text' },
        { key: '3', text: 'Apprendre Image' },
        { key: '4', text: 'Apprendre TextInput' },
        { key: '5', text: 'Apprendre Button' },
    ]);

    // Fonction pour ajouter une tâche
    const addTask = () => {
        if (inputText.trim()) {
            const newTask = {
                key: Date.now().toString(),
                text: inputText,
            };
            setTaskList([...taskList, newTask]);
            setInputText('');
            Alert.alert('Succès', 'Tâche ajoutée avec succès!');
        } else {
            Alert.alert('Erreur', 'Veuillez entrer du texte');
        }
    };

    // Fonction pour supprimer une tâche
    const deleteTask = (key) => {
        setTaskList(taskList.filter(task => task.key !== key));
    };

    return (
        <ScrollView style={styles.container}>
            {/* Section 1: View et Text */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>1. Composant View et Text</Text>
                <View style={styles.card}>
                    <Text style={styles.normalText}>
                        Le composant <Text style={styles.boldText}>View</Text> est un conteneur de base.
                    </Text>
                    <Text style={styles.coloredText}>
                        Le composant <Text style={styles.boldText}>Text</Text> affiche du texte stylisé.
                    </Text>
                </View>
            </View>

            {/* Section 2: Image */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>2. Composant Image</Text>
                <View style={styles.card}>
                    <Text style={styles.normalText}>Exemple d'image locale:</Text>
                    <View style={styles.imagePlaceholder}>
                        <Text style={styles.placeholderText}>📷 Image Placeholder</Text>
                        <Text style={styles.smallText}>
                            (Ajoutez une image dans ./assets/logo.png)
                        </Text>
                    </View>
                </View>
            </View>

            {/* Section 3: TextInput */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>3. Composant TextInput</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez une nouvelle tâche..."
                        placeholderTextColor="#999"
                        onChangeText={setInputText}
                        value={inputText}
                    />
                    <Text style={styles.normalText}>
                        Vous avez écrit: <Text style={styles.boldText}>{inputText}</Text>
                    </Text>
                </View>
            </View>

            {/* Section 4: Button */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>4. Composant Button</Text>
                <View style={styles.card}>
                    <Button
                        title="Ajouter la tâche"
                        onPress={addTask}
                        color="#007AFF"
                    />
                </View>
            </View>

            {/* Section 5: TouchableOpacity */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>5. Composant TouchableOpacity</Text>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={styles.customButton}
                        onPress={() => Alert.alert('Info', 'Bouton personnalisé pressé!')}
                    >
                        <Text style={styles.customButtonText}>
                            Bouton Personnalisé avec TouchableOpacity
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Section 6: FlatList */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>6. Composant FlatList</Text>
                <View style={styles.card}>
                    <Text style={styles.normalText}>Liste des tâches:</Text>
                    <FlatList
                        data={taskList}
                        renderItem={({ item }) => (
                            <View style={styles.taskItem}>
                                <Text style={styles.taskText}>{item.text}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteTask(item.key)}
                                    style={styles.deleteButton}
                                >
                                    <Text style={styles.deleteButtonText}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.key}
                        scrollEnabled={false}
                    />
                </View>
            </View>

            {/* Section 7: ScrollView */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>7. Composant ScrollView</Text>
                <View style={styles.card}>
                    <Text style={styles.normalText}>
                        Ce composant ScrollView permet de faire défiler tout le contenu de cette page!
                    </Text>
                    <Text style={styles.smallText}>
                        Essayez de faire défiler vers le haut et vers le bas.
                    </Text>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    🎓 TP Balises React Native - Tous les composants de base
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    section: {
        marginTop: 15,
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    normalText: {
        fontSize: 15,
        color: '#444',
        marginBottom: 6,
        lineHeight: 22,
    },
    boldText: {
        fontWeight: '600',
        color: '#007AFF',
    },
    coloredText: {
        fontSize: 15,
        color: '#28a745',
        lineHeight: 22,
    },
    imagePlaceholder: {
        backgroundColor: '#e9ecef',
        height: 140,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    placeholderText: {
        fontSize: 22,
        color: '#6c757d',
    },
    smallText: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    input: {
        height: 42,
        borderColor: '#ced4da',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    customButton: {
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 8,
    },
    customButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 6,
        marginTop: 8,
        borderLeftWidth: 3,
        borderLeftColor: '#007AFF',
    },
    taskText: {
        fontSize: 14,
        color: '#333',
        flex: 1,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    footer: {
        padding: 20,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 25,
    },
    footerText: {
        fontSize: 13,
        color: '#6c757d',
        textAlign: 'center',
    },
});

export default App;
