import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import SignIn from '../pages/sign-in';

const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: 'transparent'
            }
        }}>
            <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignIn} />
            <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        </Stack.Navigator>
    )
}