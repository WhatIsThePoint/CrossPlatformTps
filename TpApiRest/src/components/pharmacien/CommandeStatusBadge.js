import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const STATUS_COLORS = {
    en_attente: '#FF9500',
    en_preparation: '#5856D6',
    prete: '#34C759',
    recuperee: '#8E8E93',
};

const STATUS_LABELS = {
    en_attente: 'En attente',
    en_preparation: 'En préparation',
    prete: 'Prête',
    recuperee: 'Récupérée',
};

export const CommandeStatusBadge = ({ status }) => {
    const color = STATUS_COLORS[status] || '#8E8E93';
    const label = STATUS_LABELS[status] || status;

    return (
        <View style={[styles.badge, { backgroundColor: color }]}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});
