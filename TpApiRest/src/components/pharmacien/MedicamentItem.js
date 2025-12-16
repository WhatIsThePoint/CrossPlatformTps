import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../common/Card';

export const MedicamentItem = ({ medicament, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card>
                <View style={styles.header}>
                    <Text style={styles.name}>{medicament.nom}</Text>
                    <Text style={[styles.stock, { color: medicament.quantiteStock < 10 ? 'red' : 'green' }]}>
                        Stock: {medicament.quantiteStock}
                    </Text>
                </View>
                <Text style={styles.detail}>{medicament.dosage} - {medicament.forme}</Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    stock: {
        fontWeight: '600',
    },
    detail: {
        color: '#666',
    },
});
