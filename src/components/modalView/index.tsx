import React, { ReactNode } from "react";
import { Modal, View, ModalProps } from 'react-native';
import Background from "../background";
import { styles } from "./style";

type Props = ModalProps & {
    children: ReactNode;
}

export default function ModalView({ children, ...rest }: Props) {
    return (

        <Modal transparent animationType="slide" {...rest}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}></View>
                        {children}
                    </Background>
                </View>
            </View>
        </Modal>

    )
}