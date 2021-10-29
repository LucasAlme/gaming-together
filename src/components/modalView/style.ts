import { StyleSheet } from "react-native";
import { color, fonts } from "../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: color.black,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: color.blue30,
        alignSelf: 'center',
        marginTop: 13,
       
    }



})