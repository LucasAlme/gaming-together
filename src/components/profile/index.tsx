import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./style";
import Avatar from '../avatar';
export default function Profile() {
    return (
        <View style={styles.container}>
                <Avatar urlImage="https://github.com/lucasalme.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Hello,</Text>
                    <Text style={styles.username}>Lucas</Text>
                </View>
                <Text style={styles.message}>Today is victory day</Text>
            </View>
        </View >
    )
}