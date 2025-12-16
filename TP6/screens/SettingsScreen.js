import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Switch } from 'react-native';

export default function SettingsScreen({ route, navigation }) {
    const username = route.params?.username || 'Utilisateur';
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>⚙️ Paramètres</Text>

                <View style={styles.userCard}>
                    <Text style={styles.userLabel}>Connecté en tant que :</Text>
                    <Text style={styles.username}>{username}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Préférences</Text>

                    <View style={styles.settingRow}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingLabel}>🔔 Notifications</Text>
                            <Text style={styles.settingDescription}>
                                Recevoir des notifications push
                            </Text>
                        </View>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                        />
                    </View>

                    <View style={styles.settingRow}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingLabel}>🌙 Mode sombre</Text>
                            <Text style={styles.settingDescription}>
                                Activer le thème sombre
                            </Text>
                        </View>
                        <Switch
                            value={darkModeEnabled}
                            onValueChange={setDarkModeEnabled}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Navigation</Text>
                    <View style={styles.buttonSpacing}>
                        <Button
                            title="🏠 Retour à l'accueil"
                            onPress={() => navigation.navigate('Home', { username })}
                            color="#4CAF50"
                        />
                    </View>
                    <View style={styles.buttonSpacing}>
                        <Button
                            title="👤 Profil"
                            onPress={() => navigation.navigate('Profile', { username })}
                            color="#2196F3"
                        />
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>
                        ⚙️ Configurez vos préférences d'application ici. Votre nom d'utilisateur
                        reste accessible sur toutes les pages.
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
        backgroundColor: '#FF9800',
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
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    settingInfo: {
        flex: 1,
        marginRight: 10,
    },
    settingLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    settingDescription: {
        fontSize: 13,
        color: '#666',
    },
    buttonSpacing: {
        marginBottom: 10,
    },
    infoBox: {
        backgroundColor: '#fff3e0',
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#FF9800',
    },
    infoText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});
