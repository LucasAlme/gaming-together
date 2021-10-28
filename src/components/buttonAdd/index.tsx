import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from "../../utils/Constants";
type Props = RectButtonProps

export default function ButtonAdd({ ...rest }: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
            <MaterialCommunityIcons name='plus' color={color.heading} size={24}/>
        </RectButton>
    )
}