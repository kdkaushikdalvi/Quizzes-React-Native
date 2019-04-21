import { Dimensions, Platform } from 'react-native';
import { _isEmptyObjectHelper, _encryptHelper, _sortByKeyArrHelper } from './helpers';

export const WINDOW = Dimensions.get('window');



export const iPhoneX = (Platform.OS == 'ios' && WINDOW.height == 812 && WINDOW.width == 375) ? true : false;
export const footerHeight = iPhoneX ? 80 : 60;

export const COLORS = {
    primiaryColor: '#fff',
    secondaryColor: '#555165',
    themeColor: '#988dbf',
    inactiveColor: '#6b56af'
}

export const helpers = {
    isEmptyObject: _isEmptyObjectHelper,
    encrypt: _encryptHelper,
    sortByKeyArrHelper: _sortByKeyArrHelper
}