import React from "react";
import { TextInput, TextInputProps } from 'react-native';
import { styles } from "./style";
import Avatar from '../avatar';

export default function SmallInput({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.container} {...rest} keyboardType="numeric"/>


    )
}