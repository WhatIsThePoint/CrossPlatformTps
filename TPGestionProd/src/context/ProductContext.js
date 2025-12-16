import { createContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await ProductService.getAll();
        setProducts(data);
    };

    const addProduct = async (name, price) => {
        const newProducts = await ProductService.add({ name, price });
        setProducts(newProducts);
    };

    const updateProduct = async (id, name, price) => {
        const newProducts = await ProductService.update({ id, name, price });
        setProducts(newProducts);
    };

    const deleteProduct = async (id) => {
        const newProducts = await ProductService.remove(id);
        setProducts(newProducts);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
