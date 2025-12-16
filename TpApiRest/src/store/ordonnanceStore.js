import { create } from "zustand";
import { getOrdonnances, addOrdonnance, updateOrdonnance } from "../api/ordonnanceService";

export const useOrdonnanceStore = create((set) => ({
    ordonnances: [],
    loadOrdonnances: async () => {
        const data = await getOrdonnances();
        set({ ordonnances: data });
    },
    addOrdonnance: async (ord) => {
        const updated = await addOrdonnance(ord);
        set({ ordonnances: updated });
    },
    updateOrdonnance: async (id, updated) => {
        const newList = await updateOrdonnance(id, updated);
        set({ ordonnances: newList });
    }
}));
