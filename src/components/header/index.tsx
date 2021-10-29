import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { Text, View } from 'react-native';
import { color } from "../../utils/Constants";
import { styles } from "./style";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
type Props = {
    title: string;
    action?: ReactNode;
}

export default function Header({ title, action }: Props) {

    const navigation = useNavigation();

    function handleGoback() {
        navigation.goBack();
    }

    return (
        <LinearGradient colors={[color.blue80, color.blue40]} style={styles.container}>
            <BorderlessButton onPress={handleGoback}>
                <Feather name="arrow-left" size={24} color={color.heading} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {action &&
                <View>{action}</View>
            }
        </LinearGradient>
    )
}