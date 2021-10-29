import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 234,
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.RadBold,
        color: color.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: fonts.InterRegular,
        color: color.heading
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
})