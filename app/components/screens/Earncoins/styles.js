import {Dimensions, StyleSheet} from 'react-native';
import {ImageContainer2} from "../../../assets/contansts/FontSizes";

export const styles = StyleSheet.create({
    quizCategory: {
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderColor: 'white',
        borderWidth: 0.5,
    },
    centerItems:{
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    centerTextItems:{
        textAlign: 'center',
        justifyContent: 'center'
    },
    profilePic: {
        width: ImageContainer2,
        height: ImageContainer2,
    },
    menuIcon: {
        resizeMode: 'contain',
        height: 15,
        width: 15,
    },
});