import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView } from 'react-native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useAuthStore } from '../../store/authStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const login = useAuthStore((state) => state.login);
    const register = useAuthStore((state) => state.register);

    const handleAction = async () => {
        if (!email || !password || (!isLogin && !name)) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs');
            return;
        }

        setLoading(true);
        try {
            if (isLogin) {
                const success = await login(email, password);
                if (!success) {
                    Alert.alert('Erreur', 'Email ou mot de passe incorrect');
                }
            } else {
                // Default role patient for registration demo
                const success = await register(name, email, password, 'patient');
                if (!success) {
                    Alert.alert('Erreur', 'Cet email est déjà utilisé');
                }
            }
        } catch (error) {
            Alert.alert('Erreur', 'Une erreur est survenue');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const clearData = async () => {
        try {
            await AsyncStorage.clear();
            Alert.alert('Succès', 'Données effacées. Redémarrez l\'application.');
        } catch (e) {
            console.error(e);
        }
    };

    const fillPatient = () => {
        setEmail('patient@test.com');
        setPassword('123');
    };

    const fillPharma = () => {
        setEmail('pharma@test.com');
        setPassword('123');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Ma Santé</Text>

            {!isLogin && (
                <Input
                    label="Nom complet"
                    value={name}
                    onChangeText={setName}
                    placeholder="Jean Dupont"
                />
            )}

            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="exemple@email.com"
            />
            <Input
                label="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="******"
            />

            <Button
                title={isLogin ? "Se connecter" : "S'inscrire"}
                onPress={handleAction}
                loading={loading}
            />

            <Button
                title={isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
                onPress={() => setIsLogin(!isLogin)}
                style={styles.switchBtn}
                textStyle={styles.switchText}
            />

            <View style={styles.debug}>
                <Text style={styles.debugTitle}>Zone de Test / Debug</Text>
                <Button title="Remplir Patient" onPress={fillPatient} style={styles.debugBtn} textStyle={styles.debugText} />
                <Button title="Remplir Pharmacien" onPress={fillPharma} style={styles.debugBtn} textStyle={styles.debugText} />
                <Button title="⚠️ Effacer toutes les données" onPress={clearData} style={[styles.debugBtn, { backgroundColor: '#ffcccc' }]} textStyle={{ color: 'red' }} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#007AFF',
    },
    switchBtn: {
        backgroundColor: 'transparent',
        marginTop: 10,
    },
    switchText: {
        color: '#007AFF',
    },
    debug: {
        marginTop: 40,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 20,
    },
    debugTitle: {
        textAlign: 'center',
        marginBottom: 10,
        color: '#666',
    },
    debugBtn: {
        backgroundColor: '#ddd',
        marginVertical: 5,
        padding: 10,
    },
    debugText: {
        color: '#333',
    },
});
