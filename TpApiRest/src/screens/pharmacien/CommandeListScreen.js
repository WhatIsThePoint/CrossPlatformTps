import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useCommandeStore } from '../../store/commandeStore';
import { CommandeItem } from '../../components/patient/CommandeItem'; // Reusing component
import { useAuthStore } from '../../store/authStore';

export default function CommandeListScreen({ navigation }) {
    const { commandes, loadCommandes } = useCommandeStore();
    // In a real app, we would filter by pharmacy ID. 
    // For this mock, we show all commandes or filter by mock pharmacy ID 'ph001' if we want to be specific, 
    // but let's just show all for simplicity or filter if user has a pharmacy ID.
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        loadCommandes();
        const unsubscribe = navigation.addListener('focus', loadCommandes);
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={commandes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CommandeItem
                        commande={item}
                        onPress={() => navigation.navigate('CommandeDetail', { commande: item })}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text>Aucune commande à traiter</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    empty: {
        marginTop: 50,
        alignItems: 'center',
    },
});
