import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import OrdonnanceListScreen from '../screens/patient/OrdonnanceListScreen';
import OrdonnanceDetailScreen from '../screens/patient/OrdonnanceDetailScreen';
import CommandeCreateScreen from '../screens/patient/CommandeCreateScreen';
import CommandeListScreen from '../screens/patient/CommandeListScreen';
import CommandeDetailScreen from '../screens/patient/CommandeDetailScreen';

const Tab = createBottomTabNavigator();
const OrdonnanceStack = createNativeStackNavigator();
const CommandeStack = createNativeStackNavigator();

function OrdonnanceStackNavigator() {
    return (
        <OrdonnanceStack.Navigator>
            <OrdonnanceStack.Screen name="OrdonnanceList" component={OrdonnanceListScreen} options={{ title: 'Mes Ordonnances' }} />
            <OrdonnanceStack.Screen name="OrdonnanceDetail" component={OrdonnanceDetailScreen} options={{ title: 'Détail Ordonnance' }} />
            <OrdonnanceStack.Screen name="CommandeCreate" component={CommandeCreateScreen} options={{ title: 'Nouvelle Commande' }} />
        </OrdonnanceStack.Navigator>
    );
}

function CommandeStackNavigator() {
    return (
        <CommandeStack.Navigator>
            <CommandeStack.Screen name="CommandeList" component={CommandeListScreen} options={{ title: 'Mes Commandes' }} />
            <CommandeStack.Screen name="CommandeDetail" component={CommandeDetailScreen} options={{ title: 'Suivi Commande' }} />
        </CommandeStack.Navigator>
    );
}

export default function PatientNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Ordonnances') {
                        iconName = focused ? 'document-text' : 'document-text-outline';
                    } else if (route.name === 'Commandes') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Ordonnances" component={OrdonnanceStackNavigator} />
            <Tab.Screen name="Commandes" component={CommandeStackNavigator} />
        </Tab.Navigator>
    );
}
