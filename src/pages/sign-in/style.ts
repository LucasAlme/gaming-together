import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 360
    },
    title: {
        color: color.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: fonts.RadBold,
        lineHeight: 40
    },
    subTitle: {
        color: color.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
        fontFamily: fonts.RadMedium,
        lineHeight: 25

    },
    content: {
        marginTop: -40,
        padding: 50
    }
})