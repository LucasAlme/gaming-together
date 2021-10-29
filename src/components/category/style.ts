import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title: {
        fontFamily: fonts.RadBold,
        color: color.heading,
        fontSize: 15,
        marginTop: 15
    },
    check: {
        position: 'absolute',
        width: 12,
        height: 12,
        top: 7,
        right: 7,
        backgroundColor: color.blue100,
        borderColor: color.blue50,
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        width: 10,
        height: 10,
        top: 7,
        right: 7,
        backgroundColor: color.red,
        borderRadius: 3
    },


})