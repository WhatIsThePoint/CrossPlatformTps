import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const ProductForm = ({ onAdd, onUpdate, productToEdit, onCancel }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (productToEdit) {
            setName(productToEdit.name);
            setPrice(productToEdit.price);
        } else {
            setName('');
            setPrice('');
        }
    }, [productToEdit]);

    const handleSubmit = () => {
        if (!name || !price) return; // Simple validation
        if (productToEdit) {
            onUpdate(productToEdit.id, name, price);
        } else {
            onAdd(name, price);
        }
        // Only clear if adding, or if we want to reset after update (which we do)
        // But if updating, the parent might clear productToEdit which triggers useEffect to clear inputs too.
        // However, if we don't clear here, and parent clears productToEdit, useEffect runs.
        // If we clear here, it's fine too.
        setName('');
        setPrice('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{productToEdit ? "Modifier le produit" : "Ajouter un produit"}</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom du produit"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Prix"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <Button
                    title={productToEdit ? "Modifier" : "Ajouter"}
                    onPress={handleSubmit}
                />
                {productToEdit && (
                    <View style={styles.cancelButton}>
                        <Button title="Annuler" onPress={onCancel} color="red" />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 8,
        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    cancelButton: {
        marginLeft: 10,
    }
});

export default ProductForm;
