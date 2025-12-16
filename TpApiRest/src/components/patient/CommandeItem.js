import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../common/Card';
import { CommandeStatusBadge } from '../pharmacien/CommandeStatusBadge';

export const CommandeItem = ({ commande, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card>
                <View style={styles.header}>
                    <Text style={styles.date}>Commande du {commande.dateCreation}</Text>
                    <CommandeStatusBadge status={commande.status} />
                </View>
                <Text style={styles.detail}>Ordonnance #{commande.ordonnanceId}</Text>
                <Text style={styles.detail}>Pharmacie: {commande.pharmacienId}</Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    date: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    detail: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});
