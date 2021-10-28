import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ButtonAdd from '../../components/buttonAdd';
import CategorySelect from '../../components/categorySelect';
import Profile from '../../components/profile';
import { styles } from './style';

export default function Home() {

    const [category, setCategory] = useState('');


    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
            </View>
        </View>
    )
}
