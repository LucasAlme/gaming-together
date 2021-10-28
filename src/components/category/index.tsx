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
    hasCheckBox?: boolean;
    checked?: boolean;
}

export default function Category({ title, icon: Icon, checked = false, hasCheckBox = true, ...rest }: Props) {
    return (
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors={[color.blue50, color.blue70]} >
                <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.5 }]} colors={[checked ? color.blue75 : color.blue50, color.blue40]} >
                    {hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }
                    <Icon width={48} height={48} />
                    <Text style={styles.title}>{title}</Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}