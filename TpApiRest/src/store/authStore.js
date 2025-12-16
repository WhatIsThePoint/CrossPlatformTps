import { create } from "zustand";
import { loginUser } from "../api/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    login: async (email, password) => {
        const user = await loginUser(email, password);
        if (user) {
            set({ user, isAuthenticated: true });
            await AsyncStorage.setItem("currentUser", JSON.stringify(user));
            return true;
        }
        return false;
    },
    logout: async () => {
        set({ user: null, isAuthenticated: false });
        await AsyncStorage.removeItem("currentUser");
    },
    checkAuth: async () => {
        const userJson = await AsyncStorage.getItem("currentUser");
        if (userJson) {
            set({ user: JSON.parse(userJson), isAuthenticated: true });
        }
    },
    register: async (name, email, password, role) => {
        const newUser = {
            id: 'u' + Date.now(),
            name,
            email,
            password,
            role
        };
        const success = await import("../api/userService").then(m => m.registerUser(newUser));
        if (success) {
            // Auto login after register
            const user = await loginUser(email, password);
            if (user) {
                set({ user, isAuthenticated: true });
                await AsyncStorage.setItem("currentUser", JSON.stringify(user));
            }
            return true;
        }
        return false;
    }
}));
