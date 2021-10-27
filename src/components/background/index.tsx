import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { color } from "../../utils/Constants";
import { styles } from './style';

type Props = {
    children: ReactNode;
}

export default function Background({ children }: Props) {
    return (
        <LinearGradient style={styles.container} colors={[color.blue80, color.blue100]} >
            {children}
        </LinearGradient>
    )
}