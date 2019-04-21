import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signInButton: {
        backgroundColor: '#521af7',
        borderRadius: 50,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 25,
        height: 50
    },
    text: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'center',
        paddingVertical: 10
    },
    forgotPassword:{
        color:'gray'
    }
});