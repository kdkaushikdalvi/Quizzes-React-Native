import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    btnWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRegistration: {
        backgroundColor: '#15e0b7',
        borderRadius: 50,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 30,
        height: 50
    },
    text: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'center'
    },
    quizCategory: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    options:{
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
});