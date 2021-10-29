import React from 'react';
import { Text, View, ImageBackground, FlatList } from 'react-native';
import { styles } from './style';
import Background from '../../components/background';
import Header from '../../components/header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { color } from '../../utils/Constants';
import ListHeader from '../../components/listHeader';
import Member from '../../components/member';
import ListDivider from '../../components/listDivider';
import ButtonIcon from '../../components/buttonIcon';

const banner = require('../../assets/banner.png')

export default function AppointmentsDetails() {

    const members = [
        {
            id: '1',
            username: "Lucas",
            avatar_url: 'https://github.com/lucasalme.png',
            status: 'online'
        },
        {
            id: '2',
            username: "Lucas",
            avatar_url: 'https://github.com/lucasalme.png',
            status: 'offline'
        },
    ]

    return (
        <Background>
            <Header title="Detalhes" action={
                <BorderlessButton>
                    <Fontisto name="share" color={color.red} size={24} />
                </BorderlessButton>} />
            <ImageBackground source={banner} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendários</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3" />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}
