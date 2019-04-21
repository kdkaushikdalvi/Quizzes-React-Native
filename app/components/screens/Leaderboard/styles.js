import {Dimensions, Platform, StyleSheet} from 'react-native';
import {ImageContainerSmall,ImageContainer3} from "../../../assets/contansts/FontSizes";

export const styles = StyleSheet.create({
    subHeading: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: 'gray'
    },
    text: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'center',
        paddingVertical: 10
    },
    section1: {
        flex: 3
    },
    section2: {
        flex: 5,
        backgroundColor: '#fbf8ff'
    },
    section3: {
        flex: 1,
        backgroundColor: '#00a2e8',
    },
    childSection: {
        flex: 1,
        flexDirection: 'row',
    },
    col11:{
        backgroundColor: '#fcfafa',
        flex: 3,
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    col1:{
        flex: 3.3,
        flexDirection:'column',
    },
    col2:{
        flex: 3.3,
    },
    col3:{
        flex: 3.3,
    },
    rankSecond: {
        borderRadius:
            Math.round(
                Dimensions.get('window').width + Dimensions.get('window').height
            ) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'gray',
    },
    rankFirst: {
        borderRadius:ImageContainer3/2,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    rankThird: {
        borderRadius:
            Math.round(
                Dimensions.get('window').width + Dimensions.get('window').height
            ) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'gray',
    },
    menuIcon: {
        fontSize: 10,
    },
    section1Wrapper:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        flex: 4,
        width: Dimensions.get('window').width,
    },
    section1Sub1:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'center',
        flex: 4,
        width: Dimensions.get('window').width,
    },
    section1Sub2:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        width: Dimensions.get('window').width,
    },
    headerWrapper:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    },
    body:{
        flex: 9,
        backgroundColor: 'gray',
    },
    centerItems:{
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    profilePicConatiner: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    profilePic2: {
        width: ImageContainerSmall,
        height: ImageContainerSmall,
    },
    listPerson: {
        borderRadius:
            Math.round(
                Dimensions.get('window').width + Dimensions.get('window').height
            ) / 2,
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'gray',
    },
    listPerson2: {
        borderRadius:ImageContainerSmall/2,
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
});