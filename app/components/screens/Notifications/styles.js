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
    },
    root: {
        backgroundColor: "#FFFFFF"
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
    },
    avatar: {
        width:50,
        height:50,
        borderRadius:25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
    },
    mainContent: {
        marginRight: 60
    },
    img: {
        height: 50,
        width: 50,
        margin: 0
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    timeAgo:{
        fontSize:12,
        color:"#696969"
    },
    name:{
        fontSize:16,
        color:"#1E90FF"
    }
});