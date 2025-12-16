import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { CommandeStatusBadge } from '../../components/pharmacien/CommandeStatusBadge';
import { useCommandeStore } from '../../store/commandeStore';

export default function CommandeDetailScreen({ route, navigation }) {
    const { commande } = route.params;
    const updateStatus = useCommandeStore((state) => state.updateCommandeStatus);
    const [currentStatus, setCurrentStatus] = useState(commande.status);

    const handleStatusChange = async (newStatus) => {
        await updateStatus(commande.id, newStatus);
        setCurrentStatus(newStatus);
        Alert.alert('Succès', 'Statut mis à jour');
    };

    return (
        <ScrollView style={styles.container}>
            <Card>
                <View style={styles.header}>
                    <Text style={styles.title}>Commande #{commande.id}</Text>
                    <CommandeStatusBadge status={currentStatus} />
                </View>
                <Text style={styles.date}>Date: {commande.dateCreation}</Text>
                <Text style={styles.detail}>Patient ID: {commande.patientId}</Text>
                <Text style={styles.detail}>Ordonnance ID: {commande.ordonnanceId}</Text>
            </Card>

            {commande.remarques ? (
                <Card>
                    <Text style={styles.label}>Remarques du patient :</Text>
                    <Text>{commande.remarques}</Text>
                </Card>
            ) : null}

            <Text style={styles.sectionTitle}>Actions</Text>

            <View style={styles.actions}>
                <Button
                    title="Marquer comme Reçue"
                    onPress={() => handleStatusChange('recue')}
                    style={{ backgroundColor: '#FF9500' }}
                />
                <Button
                    title="Marquer en Préparation"
                    onPress={() => handleStatusChange('en_preparation')}
                    style={{ backgroundColor: '#5856D6' }}
                />
                <Button
                    title="Marquer comme Prête"
                    onPress={() => handleStatusChange('prete')}
                    style={{ backgroundColor: '#34C759' }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        marginBottom: 4,
    },
    detail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 2,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    actions: {
        gap: 10,
    },
});
