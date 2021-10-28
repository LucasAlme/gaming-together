import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,

    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12
    },
    title: {
        fontFamily: fonts.RadBold,
        color: color.heading,
        fontSize: 18
    },
    category: {
        fontFamily: fonts.InterRegular,
        color: color.greyWinter,
        fontSize: 13,
        marginRight: 24,

    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    date:{
        fontFamily: fonts.InterMedium,
        color: color.heading,
        fontSize: 13,
        marginLeft: 7
    },
    players:{
        fontFamily: fonts.InterMedium,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    }




})