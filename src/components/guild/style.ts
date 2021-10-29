import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: fonts.RadBold,
        color: color.heading,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        fontFamily: fonts.InterRegular,
        color: color.greyWinter,
        fontSize: 13,
    }


})