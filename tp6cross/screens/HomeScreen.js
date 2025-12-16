import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
    // Récupérer le nom d'utilisateur depuis les paramètres
    const username = route.params?.username || 'Utilisateur';

    return (
        <View style={styles.container}>
            <Text style={styles.connectedText}>
                Connecté en tant que : {username}
            </Text>

            <Text style={styles.title}>🏠 Accueil</Text>
            <Text style={styles.subtitle}>Bienvenue sur la page d'accueil !</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Profil"
                    onPress={() => navigation.navigate('Profile', { username })}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Paramètres"
                    onPress={() => navigation.navigate('Settings', { username })}
                />
            </View>

            <View style={styles.logoutContainer}>
                <Button
                    title="Déconnexion"
                    color="red"
                    onPress={() => navigation.replace('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
    },
    connectedText: {
        position: 'absolute',
        top: 60,
        fontSize: 14,
        color: '#666',
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
    },
    buttonContainer: {
        width: '80%',
        marginBottom: 15,
    },
    logoutContainer: {
        width: '80%',
        marginTop: 30,
    },
});
