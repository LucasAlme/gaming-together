import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { color } from "../../utils/Constants";
import { styles } from "./style";


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export default function Category({ title, icon: Icon, checked = false, ...rest }: Props) {
    return (
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors={[color.blue50, color.blue70]} >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.check}>
                        <Icon width={48} height={48} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </LinearGradient>
        </RectButton>
    )
}