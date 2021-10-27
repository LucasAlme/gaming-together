import React from "react";
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

const discordImg = require('../../assets/discord.png');
import { styles } from './style';

type Props = TouchableOpacityProps & {
    title?: string;
}

export default function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} { ...rest }>
            <View style={styles.iconWrapper}>
                <Image source={discordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}