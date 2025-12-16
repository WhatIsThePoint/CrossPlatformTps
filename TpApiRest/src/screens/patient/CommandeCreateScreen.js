import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { useCommandeStore } from '../../store/commandeStore';
import { useAuthStore } from '../../store/authStore';
import pharmacieList from '../../data/pharmacieList.json';

export default function CommandeCreateScreen({ route, navigation }) {
    const { ordonnance } = route.params;
    const [selectedPharmacie, setSelectedPharmacie] = useState(null);
    const [remarques, setRemarques] = useState('');
    const addCommande = useCommandeStore((state) => state.addCommande);
    const user = useAuthStore((state) => state.user);

    const handleCreate = async () => {
        if (!selectedPharmacie) {
            Alert.alert('Erreur', 'Veuillez choisir une pharmacie');
            return;
        }

        const newCommande = {
            id: 'c' + Date.now(),
            ordonnanceId: ordonnance.id,
            patientId: user.id,
            pharmacienId: selectedPharmacie.id, // In a real app this would be linked to a user ID
            status: 'en_attente',
            dateCreation: new Date().toISOString().split('T')[0],
            remarques,
            pharmacieNom: selectedPharmacie.nom
        };

        await addCommande(newCommande);
        Alert.alert('Succès', 'Votre commande a été envoyée', [
            { text: 'OK', onPress: () => navigation.navigate('CommandeList') }
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Nouvelle Commande</Text>

            <Text style={styles.subtitle}>Choisir une pharmacie :</Text>
            {pharmacieList.map((pharmacie) => (
                <Card key={pharmacie.id} style={selectedPharmacie?.id === pharmacie.id ? styles.selectedCard : null}>
                    <Text onPress={() => setSelectedPharmacie(pharmacie)} style={styles.pharmacieName}>
                        {pharmacie.nom}
                    </Text>
                    <Text>{pharmacie.adresse}</Text>
                </Card>
            ))}

            <Input
                label="Remarques ou lieu de livraison"
                value={remarques}
                onChangeText={setRemarques}
                placeholder="Ex: Code porte 1234..."
            />

            <Button
                title="Valider la commande"
                onPress={handleCreate}
                style={styles.button}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    selectedCard: {
        borderColor: '#007AFF',
        borderWidth: 2,
    },
    pharmacieName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    button: {
        marginTop: 30,
        marginBottom: 50,
    },
});
