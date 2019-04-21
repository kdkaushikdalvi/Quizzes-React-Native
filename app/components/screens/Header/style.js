import { StyleSheet, Platform } from 'react-native'
import { WINDOW, iPhoneX, headerHeight } from '../../../libs/globals';
import { darkGray, darkGreen, white, lightGreen } from '../../../assets/styles/colors';

const style = StyleSheet.create({
    wrapper: {
        padding: 20,
        paddingTop: (iPhoneX) ? 44 : Platform.OS === 'ios' ? 30 : 35,
        zIndex: 1000,
        backgroundColor: lightGreen,
        elevation: 7
    },
    childrenContainer: {
        marginTop: 15
    },
    defaultHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    defaultHeaderLeft:{
        width: 40
    },
    defaultHeaderCenter: {
        flex: 1,
        alignItems: 'center'
    },
    defaultHeaderCenterTxt: {
        fontWeight: '600',
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    defaultHeaderRight: {
        width: 40,
        alignItems: 'flex-end'
    }
});

export default style;
