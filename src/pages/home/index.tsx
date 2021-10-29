import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import Appointments from '../../components/appointment';
import Background from '../../components/background';
import ButtonAdd from '../../components/buttonAdd';
import CategorySelect from '../../components/categorySelect';
import ListDivider from '../../components/listDivider';
import ListHeader from '../../components/listHeader';
import Profile from '../../components/profile';
import { styles } from './style';

export default function Home() {

    const navigation = useNavigation();
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ];

    function handleAppointmentDetails() { 
        navigation.navigate('AppointmentsDetails')
    }

    function handleAppointmentCreate() { 
        navigation.navigate('AppointmentsCreate')
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} hasCheckBox/>
            <View style={styles.content}>
                <ListHeader title={"Partida agendadas"} subtitle={"Total 6"} />
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Appointments data={item} onPress={() => handleAppointmentDetails()} />

                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                />

            </View>
        </Background>
    )
}
