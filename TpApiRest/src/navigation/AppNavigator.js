import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View, Button } from 'react-native';
import { useAuthStore } from '../store/authStore';

import AuthNavigator from './AuthNavigator';
import PatientNavigator from './PatientNavigator';
import PharmacienNavigator from './PharmacienNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { user, isAuthenticated, checkAuth, logout } = useAuthStore();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const init = async () => {
            await checkAuth();
            setLoading(false);
        };
        init();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated ? (
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                ) : user?.role === 'patient' ? (
                    <Stack.Screen
                        name="PatientApp"
                        component={PatientNavigator}
                        options={{
                            headerShown: true,
                            title: `Patient: ${user.name}`,
                            headerRight: () => <Button onPress={logout} title="Déco" />
                        }}
                    />
                ) : user?.role === 'pharmacien' ? (
                    <Stack.Screen
                        name="PharmacienApp"
                        component={PharmacienNavigator}
                        options={{
                            headerShown: true,
                            title: `Pharmacie: ${user.name}`,
                            headerRight: () => <Button onPress={logout} title="Déco" />
                        }}
                    />
                ) : (
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
