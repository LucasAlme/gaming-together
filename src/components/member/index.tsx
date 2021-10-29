import React from "react";
import { Text, View } from 'react-native';
import { color } from "../../utils/Constants";
import Avatar from '../avatar';
import { styles } from "./style";


export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps


}

export default function Member({ data }: Props) {
    const isOnline = data.status === 'online';
    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>{data.username}</Text>
                <View style={styles.status}>
                    <View style={[styles.bulletStatus, { backgroundColor: isOnline ? color.green : color.red }]} />
                    <Text style={styles.nameStatus}>{isOnline ? 'Diponível' : 'Ocupado'}</Text>
                </View>
            </View>
        </View >
    )
}