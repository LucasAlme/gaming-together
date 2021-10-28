import React from "react";
import { View, Text } from 'react-native';
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { categories } from "../../utils/Categories";
import GuildIcon from "../guildIcon";
import { styles } from "./style";
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { color } from "../../utils/Constants";

export type GuildProps = {
    id: string,
    name: string,
    icon: null,
    owner: boolean
}

export type AppointmentsProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentsProps
}

export default function Appointments({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild;

    return (
        <RectButton {...rest}>
            <View style={styles.container} >
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{data.guild.name}</Text>
                        <Text style={styles.category}>{category.title}</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>{data.date}</Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? color.red : color.green} />
                            <Text style={[styles.players, { color: owner ? color.red : color.green }]}>{owner ? 'Anfitrião' : 'Visitante'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton >
    )
}