import { StyleSheet } from "react-native";
import { color } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: color.red,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: color.heading,
        fontSize: 15,
        textAlign: 'center',
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: color.redWine,
        borderRightWidth: 1,

    },
    icon: {
        width: 24,
        height: 18
    }

})