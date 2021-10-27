import { StyleSheet } from "react-native";
import { color } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.blue
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
    },
    subTitle: {
        color: color.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64
    },
    content: {
        marginTop: -40,
        padding: 50
    }
})