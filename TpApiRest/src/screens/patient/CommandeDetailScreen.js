import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/common/Card';
import { CommandeStatusBadge } from '../../components/pharmacien/CommandeStatusBadge';

export default function CommandeDetailScreen({ route }) {
    const { commande } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Card>
                <View style={styles.header}>
                    <Text style={styles.title}>Commande #{commande.id}</Text>
                    <CommandeStatusBadge status={commande.status} />
                </View>
                <Text style={styles.date}>Créée le: {commande.dateCreation}</Text>
                <Text style={styles.detail}>Pharmacie: {commande.pharmacieNom || commande.pharmacienId}</Text>
                <Text style={styles.detail}>Ordonnance liée: #{commande.ordonnanceId}</Text>
            </Card>

            {commande.remarques ? (
                <Card>
                    <Text style={styles.label}>Vos remarques :</Text>
                    <Text>{commande.remarques}</Text>
                </Card>
            ) : null}

            <View style={styles.info}>
                <Text style={styles.infoText}>
                    Le statut de votre commande sera mis à jour par le pharmacien.
                </Text>
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
    info: {
        marginTop: 20,
        padding: 10,
    },
    infoText: {
        textAlign: 'center',
        color: '#666',
        fontStyle: 'italic',
    },
});
