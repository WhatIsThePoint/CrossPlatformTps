import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';

export default function OrdonnanceDetailScreen({ route, navigation }) {
    const { ordonnance } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Card>
                <Text style={styles.title}>Ordonnance #{ordonnance.id}</Text>
                <Text style={styles.date}>Date: {ordonnance.date}</Text>
                <Text style={styles.doctor}>Médecin: {ordonnance.medecinId}</Text>
            </Card>

            <Text style={styles.sectionTitle}>Médicaments prescrits</Text>
            {ordonnance.medicaments.map((med, index) => (
                <Card key={index}>
                    <Text style={styles.medName}>Médicament ID: {med.idMedicament}</Text>
                    <Text>Quantité/jour: {med.quantiteParJour}</Text>
                    <Text>Durée: {med.duree} jours</Text>
                </Card>
            ))}

            <Button
                title="Commander cette ordonnance"
                onPress={() => navigation.navigate('CommandeCreate', { ordonnance })}
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 16,
        marginBottom: 4,
    },
    doctor: {
        fontSize: 16,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    medName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    button: {
        marginTop: 30,
        marginBottom: 50,
    },
});
