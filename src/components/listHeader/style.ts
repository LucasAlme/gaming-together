import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    title: {
        fontFamily: fonts.RadBold,
        color: color.heading,
        fontSize: 18
    },
    subtitle: {
        fontFamily: fonts.InterRegular,
        color: color.greyWinter,
        fontSize: 13
    }


})