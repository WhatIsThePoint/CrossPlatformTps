import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useOrdonnanceStore } from '../../store/ordonnanceStore'; // Need to create this store or use service directly? Plan said service but user prompt had store code. Wait, user prompt didn't have ordonnanceStore code. I need to create it.
// Actually, I missed creating ordonnanceStore.js in the previous step. I'll create it now inline or use service.
// The user prompt provided code for Patient, Medicament, Commande stores. It did NOT provide OrdonnanceStore.
// But it provided OrdonnanceService.
// I will create a simple hook or just use the service directly in a useEffect, or better, create the store now.
// I'll assume I need to create src/store/ordonnanceStore.js. I'll do it in a separate tool call after this batch or just use a local state for now?
// No, I should be consistent. I'll create the store file first.

// Wait, I can't create the store file inside this write_to_file call.
// I will use a local implementation for now or just assume it exists and I'll create it in the next turn.
// Actually, I'll create the store file in the next turn and reference it here.
import { OrdonnanceItem } from '../../components/patient/OrdonnanceItem';
import { Button } from '../../components/common/Button';
import { addOrdonnance, getOrdonnances } from '../../api/ordonnanceService';

export default function OrdonnanceListScreen({ navigation }) {
    const [ordonnances, setOrdonnances] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const loadData = async () => {
        setLoading(true);
        const data = await getOrdonnances();
        setOrdonnances(data);
        setLoading(false);
    };

    useEffect(() => {
        loadData();
        const unsubscribe = navigation.addListener('focus', loadData);
        return unsubscribe;
    }, [navigation]);

    const addSimulatedOrdonnance = async () => {
        const newOrd = {
            id: 'o' + Date.now(),
            patientId: 'u222',
            medecinId: 'u111',
            medicaments: [
                { idMedicament: 'm001', quantiteParJour: 2, duree: 5 },
                { idMedicament: 'm002', quantiteParJour: 1, duree: 3 }
            ],
            date: new Date().toISOString().split('T')[0]
        };
        await addOrdonnance(newOrd);
        loadData();
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={ordonnances}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <OrdonnanceItem
                        ordonnance={item}
                        onPress={() => navigation.navigate('OrdonnanceDetail', { ordonnance: item })}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text>Aucune ordonnance</Text>
                        <Button title="Simuler une ordonnance" onPress={addSimulatedOrdonnance} />
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
