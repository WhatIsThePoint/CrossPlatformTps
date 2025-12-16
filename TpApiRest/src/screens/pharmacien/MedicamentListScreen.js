import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useMedicamentStore } from '../../store/medicamentStore';
import { MedicamentItem } from '../../components/pharmacien/MedicamentItem';
import { Button } from '../../components/common/Button';
import presetList from '../../data/medicamentPresetList.json';

export default function MedicamentListScreen({ navigation }) {
    const { medicaments, loadMedicaments, addMedicament } = useMedicamentStore();

    useEffect(() => {
        loadMedicaments();
        const unsubscribe = navigation.addListener('focus', loadMedicaments);
        return unsubscribe;
    }, [navigation]);

    // Seed data if empty
    useEffect(() => {
        if (medicaments.length === 0) {
            // Optional: Auto-seed or just show button
        }
    }, [medicaments]);

    const seedData = async () => {
        for (const med of presetList) {
            await addMedicament(med);
        }
    };

    return (
        <View style={styles.container}>
            <Button
                title="Ajouter un médicament"
                onPress={() => navigation.navigate('MedicamentForm')}
            />

            <FlatList
                data={medicaments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MedicamentItem
                        medicament={item}
                        onPress={() => navigation.navigate('MedicamentForm', { medicament: item })}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text>Aucun médicament en stock</Text>
                        <Button title="Charger le stock initial" onPress={seedData} style={{ marginTop: 20 }} />
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
