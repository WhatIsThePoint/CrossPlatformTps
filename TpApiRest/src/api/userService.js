import { getItem, saveItem } from "./asyncStorage";

const USERS_KEY = "users";

// Mock initial users if empty
const INITIAL_USERS = [
    {
        id: "u111",
        role: "medecin",
        name: "Dr Dupont",
        email: "medecin@test.com",
        password: "123"
    },
    {
        id: "u222",
        role: "patient",
        name: "Jean Martin",
        email: "patient@test.com",
        password: "123"
    },
    {
        id: "u333",
        role: "pharmacien",
        name: "Pharmacie Centrale",
        email: "pharma@test.com",
        password: "123"
    }
];

export const initUsers = async () => {
    const users = await getItem(USERS_KEY);
    if (!users) {
        await saveItem(USERS_KEY, INITIAL_USERS);
    }
};

export const loginUser = async (email, password) => {
    await initUsers();
    const users = await getItem(USERS_KEY);
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
};

export const getUsers = async () => {
    await initUsers();
    return await getItem(USERS_KEY);
};

export const registerUser = async (newUser) => {
    await initUsers();
    const users = await getItem(USERS_KEY);
    // Check if email exists
    if (users.find(u => u.email === newUser.email)) {
        return false; // User already exists
    }
    const updatedUsers = [...users, newUser];
    await saveItem(USERS_KEY, updatedUsers);
    return true;
};
