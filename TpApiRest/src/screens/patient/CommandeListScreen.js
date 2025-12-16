import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useCommandeStore } from '../../store/commandeStore';
import { CommandeItem } from '../../components/patient/CommandeItem';
import { useAuthStore } from '../../store/authStore';

export default function CommandeListScreen({ navigation }) {
    const { commandes, loadCommandes } = useCommandeStore();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        loadCommandes();
        const unsubscribe = navigation.addListener('focus', loadCommandes);
        return unsubscribe;
    }, [navigation]);

    const myCommandes = commandes.filter(c => c.patientId === user.id);

    return (
        <View style={styles.container}>
            <FlatList
                data={myCommandes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CommandeItem
                        commande={item}
                        onPress={() => navigation.navigate('CommandeDetail', { commande: item })}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text>Aucune commande en cours</Text>
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
