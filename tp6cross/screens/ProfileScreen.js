import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
    // Récupérer le nom d'utilisateur depuis les paramètres
    const username = route.params?.username || 'Utilisateur';

    return (
        <View style={styles.container}>
            <Text style={styles.connectedText}>
                Connecté en tant que : {username}
            </Text>

            <Text style={styles.title}>👤 Profil</Text>
            <Text style={styles.subtitle}>Page de profil de {username}</Text>

            <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>Nom d'utilisateur</Text>
                <Text style={styles.infoValue}>{username}</Text>
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
    infoCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoLabel: {
        fontSize: 12,
        color: '#999',
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
});
