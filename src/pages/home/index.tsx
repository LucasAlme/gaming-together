import React from 'react';
import { Text, View } from 'react-native';
import ButtonAdd from '../../components/buttonAdd';
import CategorySelect from '../../components/categorySelect';
import Profile from '../../components/profile';
import { styles } from './style';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect />
            </View>
        </View>
    )
}
