import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ route, navigation }) {
    const username = route.params?.username || 'Utilisateur';

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>🏠 Accueil</Text>

                <View style={styles.userCard}>
                    <Text style={styles.userLabel}>Connecté en tant que :</Text>
                    <Text style={styles.username}>{username}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Navigation</Text>
                    <View style={styles.buttonSpacing}>
                        <Button
                            title="📱 Profil"
                            onPress={() => navigation.navigate('Profile', { username })}
                            color="#4CAF50"
                        />
                    </View>
                    <View style={styles.buttonSpacing}>
                        <Button
                            title="⚙️ Paramètres"
                            onPress={() => navigation.navigate('Settings', { username })}
                            color="#FF9800"
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Session</Text>
                    <Button
                        title="🚪 Déconnexion"
                        onPress={() => navigation.replace('Login')}
                        color="red"
                    />
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>
                        Bienvenue sur l'écran d'accueil ! Vous pouvez naviguer vers votre profil
                        ou les paramètres. Votre nom d'utilisateur sera affiché sur toutes les pages.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    userCard: {
        backgroundColor: '#4CAF50',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userLabel: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 5,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    section: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    buttonSpacing: {
        marginBottom: 10,
    },
    infoBox: {
        backgroundColor: '#e8f5e9',
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    infoText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});
