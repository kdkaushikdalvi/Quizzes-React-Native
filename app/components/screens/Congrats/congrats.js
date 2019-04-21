import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, ScrollView, StyleSheet, Image,ImageBackground
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import mainStyles from '../../../assets/styles/MainStyles';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {WINDOW} from "../../../libs/globals";
import {Images} from "../../../assets/contansts/Images";
import {ImageContainer3} from "../../../assets/contansts/FontSizes";

let deviceWidth = Dimensions.get('window').width;


class Congrats extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);
    }

    _onPressPlayNewQuiz(){
        this.props.navigation.navigate('PlayGames');
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor={'#666666'} animated={true}/>

                <View style={{
                    width: WINDOW.width,
                    flex: 1,
                }}>
                    <View style={[styles.menuList,styles.centerItems]}>
                        <ImageBackground
                            source={Images.CongratLayer}
                            style={styles.CongratLayer}
                        >
                            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                <View style={styles.profilePicConatiner}>
                                    <Image
                                        source={Images.proPic}
                                        style={styles.profilePic}
                                    />
                                </View>
                                <View style={styles.profilePicConatiner}>
                                    <Image
                                        source={Images.Congratulations}
                                        style={styles.profilePic2}
                                    />
                                </View>
                                <View style={{flexDirection:'row',justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>You've Won </Text>
                                    <Image
                                        style={styles.menuIcon}
                                        source={Images.IconCoin}
                                    />
                                    <Text  style={styles.text}> 850 conis </Text>
                                </View>
                            </View>

                        </ImageBackground>

                    </View>

                    <View style={{flex: 0.1, paddingHorizontal: 30}}>
                        <TouchableOpacity onPress={()=>this._onPressPlayNewQuiz()} style={styles.changePasswordButton}>
                            <View>
                                <Text style={styles.textChanges}>Share Result</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._onPressPlayNewQuiz()} style={styles.signInButton}>
                            <View>
                                <Text style={styles.textUpdate}>Play New Quiz</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}


export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#e6e1e8'
    },
    menuList: {
        flex: 0.7,
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    CongratLayer: {
        width: '100%', height: '100%'
    },
    centerItems: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    signInButton: {
        backgroundColor: '#521af7',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        height: 50
    },
    changePasswordButton: {
        backgroundColor: '#dcf0fa',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        height: 50
    },
    textUpdate: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'center',
        paddingVertical: 10
    },
    textChanges: {
        color: '#521af7',
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'center',
        paddingVertical: 10
    },
    profilePic: {
        width: ImageContainer3,
        height: ImageContainer3,
        borderRadius: ImageContainer3/2,
    },
    profilePic2: {
        width: Dimensions.get('window').width*0.5,
        height: ImageContainer3,
        resizeMode:'contain'
    },
    menuIcon: {
        resizeMode: 'contain',
        height: 18,
        width: 18,
        marginLeft: 5
    },
});


const mapStateToProps = state => ({
    navProps: state.navProps
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setNavigation: setNavigation
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Congrats);