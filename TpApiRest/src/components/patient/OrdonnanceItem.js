import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../common/Card';

export const OrdonnanceItem = ({ ordonnance, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card>
                <View style={styles.header}>
                    <Text style={styles.date}>Date: {ordonnance.date}</Text>
                    <Text style={styles.id}>#{ordonnance.id}</Text>
                </View>
                <Text style={styles.meds}>
                    {ordonnance.medicaments.length} médicament(s) prescrit(s)
                </Text>
                <Text style={styles.doctor}>Dr. {ordonnance.medecinId}</Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    date: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    id: {
        color: '#666',
    },
    meds: {
        fontSize: 14,
        marginBottom: 4,
    },
    doctor: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
});
