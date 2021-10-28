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
        backgroundColor: color.blue40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7
    },
    title: {
        fontFamily: fonts.RadMedium,
        color: color.heading,
        fontSize: 15
    },
    check: {
        width: 12,
        height: 12,
        backgroundColor: color.blue100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: color.blue50,
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: color.red,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3
    },


})