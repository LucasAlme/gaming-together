import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontFamily: fonts.RadBold,
        color: color.heading,
        fontSize: 18
    },
    nameStatus: {
        fontFamily: fonts.InterRegular,
        color: color.greyWinter,
        fontSize: 13
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})