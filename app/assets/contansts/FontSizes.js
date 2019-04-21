import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const DeviceType = (height / width) > 1.6 ? 'Phone' : 'Tablet';

export const xSmall = DeviceType === 'Phone'? 10: 14;
export const small = DeviceType === 'Phone'? 12: 16;
export const medium = DeviceType === 'Phone'? 14: 18;
export const large = DeviceType === 'Phone'? 16: 20;
export const xLarge = DeviceType === 'Phone'? 18: 24;
export const xxLarge = DeviceType === 'Phone'? 22: 26;

export const ImageContainer3=Dimensions.get('window').width * 0.3;
export const ImageContainer2=Dimensions.get('window').width * 0.2;
export const ImageContainerSmall=Dimensions.get('window').width * 0.12;