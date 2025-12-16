import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price} €</Text>
                    </View>
                    <View style={styles.actions}>
                        <Button title="Modifier" onPress={() => onEdit(item)} />
                        <View style={{ width: 10 }} />
                        <Button title="Supprimer" onPress={() => onDelete(item.id)} color="red" />
                    </View>
                </View>
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>Aucun produit enregistré.</Text>}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        color: '#666',
        marginTop: 4,
    },
    actions: {
        flexDirection: 'row',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
        fontStyle: 'italic',
    },
});

export default ProductList;
