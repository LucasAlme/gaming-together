import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.RadBold,
        color: color.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: color.blue50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',

    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: color.blue50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.blue60
    },
    field: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: fonts.InterMedium,
        color: color.greyWinter
    },
    limit: {
        fontFamily: fonts.InterRegular,
        fontSize: 13,
        color: color.greyWinter
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
})