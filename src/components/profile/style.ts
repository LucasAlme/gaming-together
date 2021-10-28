import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: fonts.RadMedium,
        fontSize: 24,
        color: color.heading,
        marginRight: 6
    },
    username: {
        fontFamily: fonts.RadBold,
        fontSize: 24,
        color: color.heading,
    },
    message: {
        fontFamily: fonts.InterRegular,
        color: color.greyWinter
    }


})