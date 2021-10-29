import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import GuildIcon from '../guildIcon';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { color } from '../../utils/Constants';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

export default function Guild({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <GuildIcon />
            <View style={styles.content}>
                <View style={styles.type}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.type}>{data.owner ? 'Adminstrador' : 'Convidado'}</Text>
                </View>
            </View>
            <Feather name="chevron-right" color={color.heading} size={24} />
        </TouchableOpacity>
    )
}