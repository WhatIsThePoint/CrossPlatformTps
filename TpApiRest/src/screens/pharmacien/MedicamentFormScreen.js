import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useMedicamentStore } from '../../store/medicamentStore';

export default function MedicamentFormScreen({ route, navigation }) {
    const medicamentToEdit = route.params?.medicament;
    const isEdit = !!medicamentToEdit;

    const [nom, setNom] = useState(medicamentToEdit?.nom || '');
    const [dosage, setDosage] = useState(medicamentToEdit?.dosage || '');
    const [forme, setForme] = useState(medicamentToEdit?.forme || '');
    const [quantiteStock, setQuantiteStock] = useState(medicamentToEdit?.quantiteStock?.toString() || '');

    const { addMedicament, updateMedicament, deleteMedicament } = useMedicamentStore();

    const handleSave = async () => {
        if (!nom || !dosage || !quantiteStock) {
            Alert.alert('Erreur', 'Veuillez remplir les champs obligatoires');
            return;
        }

        const medData = {
            id: isEdit ? medicamentToEdit.id : 'm' + Date.now(),
            nom,
            dosage,
            forme,
            quantiteStock: parseInt(quantiteStock, 10)
        };

        if (isEdit) {
            await updateMedicament(medData.id, medData);
        } else {
            await addMedicament(medData);
        }
        navigation.goBack();
    };

    const handleDelete = async () => {
        Alert.alert(
            "Supprimer",
            "Êtes-vous sûr de vouloir supprimer ce médicament ?",
            [
                { text: "Annuler", style: "cancel" },
                {
                    text: "Supprimer", style: "destructive", onPress: async () => {
                        await deleteMedicament(medicamentToEdit.id);
                        navigation.goBack();
                    }
                }
            ]
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Input label="Nom" value={nom} onChangeText={setNom} placeholder="Ex: Doliprane" />
            <Input label="Dosage" value={dosage} onChangeText={setDosage} placeholder="Ex: 500mg" />
            <Input label="Forme" value={forme} onChangeText={setForme} placeholder="Ex: Comprimé" />
            <Input
                label="Quantité en stock"
                value={quantiteStock}
                onChangeText={setQuantiteStock}
                placeholder="Ex: 100"
                keyboardType="numeric"
            />

            <Button title={isEdit ? "Mettre à jour" : "Ajouter"} onPress={handleSave} />

            {isEdit && (
                <Button
                    title="Supprimer"
                    onPress={handleDelete}
                    style={{ backgroundColor: '#FF3B30', marginTop: 10 }}
                />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
});
