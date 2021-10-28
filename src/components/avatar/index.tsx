import React from "react";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "../../utils/Constants";
import { Image } from "react-native";

type Props = {
    urlImage: string;
}

export default function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient style={styles.container} colors={[color.blue50, color.blue70]} >
            <Image source={{ uri: urlImage }} style={styles.avatarStyle} />
        </LinearGradient>
    )
}