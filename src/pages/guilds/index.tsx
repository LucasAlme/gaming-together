import React from 'react';
import { View, FlatList } from 'react-native';
import Background from '../../components/background';
import Guild, { GuildProps } from '../../components/guild';
import ListDivider from '../../components/listDivider';
import { styles } from './style';


type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export default function Guilds({ handleGuildSelected }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList data={guilds}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
                ItemSeparatorComponent={() => <ListDivider />}
                renderItem={({ item }) => (
                    <Guild data={item} onPress={() => handleGuildSelected(item)} />

                )}
            />
        </View>
    )
}
