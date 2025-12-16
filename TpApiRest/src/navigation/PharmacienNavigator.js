import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import CommandeListScreen from '../screens/pharmacien/CommandeListScreen';
import CommandeDetailScreen from '../screens/pharmacien/CommandeDetailScreen';
import MedicamentListScreen from '../screens/pharmacien/MedicamentListScreen';
import MedicamentFormScreen from '../screens/pharmacien/MedicamentFormScreen';

const Tab = createBottomTabNavigator();
const CommandeStack = createNativeStackNavigator();
const MedicamentStack = createNativeStackNavigator();

function CommandeStackNavigator() {
    return (
        <CommandeStack.Navigator>
            <CommandeStack.Screen name="CommandeList" component={CommandeListScreen} options={{ title: 'Commandes Reçues' }} />
            <CommandeStack.Screen name="CommandeDetail" component={CommandeDetailScreen} options={{ title: 'Traitement Commande' }} />
        </CommandeStack.Navigator>
    );
}

function MedicamentStackNavigator() {
    return (
        <MedicamentStack.Navigator>
            <MedicamentStack.Screen name="MedicamentList" component={MedicamentListScreen} options={{ title: 'Stock Médicaments' }} />
            <MedicamentStack.Screen name="MedicamentForm" component={MedicamentFormScreen} options={{ title: 'Édition Médicament' }} />
        </MedicamentStack.Navigator>
    );
}

export default function PharmacienNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Commandes') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'Stock') {
                        iconName = focused ? 'medkit' : 'medkit-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Commandes" component={CommandeStackNavigator} />
            <Tab.Screen name="Stock" component={MedicamentStackNavigator} />
        </Tab.Navigator>
    );
}
