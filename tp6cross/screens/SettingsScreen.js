import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen({ route }) {
    // Récupérer le nom d'utilisateur depuis les paramètres
    const username = route.params?.username || 'Utilisateur';

    return (
        <View style={styles.container}>
            <Text style={styles.connectedText}>
                Connecté en tant que : {username}
            </Text>

            <Text style={styles.title}>⚙️ Paramètres</Text>
            <Text style={styles.subtitle}>Configurez votre application</Text>

            <View style={styles.settingsCard}>
                <Text style={styles.settingItem}>🔔 Notifications</Text>
                <Text style={styles.settingItem}>🌙 Mode sombre</Text>
                <Text style={styles.settingItem}>🌐 Langue</Text>
                <Text style={styles.settingItem}>ℹ️ À propos</Text>
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
    settingsCard: {
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
    settingItem: {
        fontSize: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        color: '#333',
    },
});
