import { useContext, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import ProductForm from './src/components/ProductForm';
import ProductList from './src/components/ProductList';
import { ProductContext, ProductProvider } from './src/context/ProductContext';

const MainScreen = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
    const [productToEdit, setProductToEdit] = useState(null);

    const handleAdd = (name, price) => {
        addProduct(name, price);
    };

    const handleUpdate = (id, name, price) => {
        updateProduct(id, name, price);
        setProductToEdit(null);
    };

    const handleDelete = (id) => {
        deleteProduct(id);
        if (productToEdit && productToEdit.id === id) {
            setProductToEdit(null);
        }
    };

    const handleEdit = (product) => {
        setProductToEdit(product);
    };

    const handleCancelEdit = () => {
        setProductToEdit(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Gestion de Produits</Text>
            <ProductForm
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                productToEdit={productToEdit}
                onCancel={handleCancelEdit}
            />
            <ProductList
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </SafeAreaView>
    );
};

export default function App() {
    return (
        <ProductProvider>
            <StatusBar barStyle="dark-content" />
            <MainScreen />
        </ProductProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: StatusBar.currentHeight || 0,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
});
