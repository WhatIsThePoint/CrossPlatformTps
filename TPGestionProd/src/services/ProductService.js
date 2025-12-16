import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'products';

const ProductService = {
    // Récupérer tous les produits
    async getAll() {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error("Erreur lors du chargement des produits", e);
            return [];
        }
    },

    // Sauvegarder la liste complète (usage interne principalement)
    async saveAll(products) {
        try {
            const jsonValue = JSON.stringify(products);
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
        } catch (e) {
            console.error("Erreur lors de la sauvegarde des produits", e);
        }
    },

    // Ajouter un produit
    async add(product) {
        const products = await this.getAll();
        const newProduct = { ...product, id: Date.now().toString() };
        const newProducts = [...products, newProduct];
        await this.saveAll(newProducts);
        return newProducts;
    },

    // Mettre à jour un produit
    async update(updatedProduct) {
        const products = await this.getAll();
        const newProducts = products.map(p =>
            p.id === updatedProduct.id ? updatedProduct : p
        );
        await this.saveAll(newProducts);
        return newProducts;
    },

    // Supprimer un produit
    async remove(id) {
        const products = await this.getAll();
        const newProducts = products.filter(p => p.id !== id);
        await this.saveAll(newProducts);
        return newProducts;
    }
};

export default ProductService;
