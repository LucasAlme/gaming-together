import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import SignIn from '../pages/sign-in';
import { color } from '../utils/Constants';
import AppointmentsDetails from '../pages/appointments-details';

const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: color.blue100
            }
        }}>
            <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignIn} />
            <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
            <Stack.Screen options={{ headerShown: false }} name='AppointmentsDetails' component={AppointmentsDetails} />
        </Stack.Navigator>
    )
}