import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, StyleSheet, Platform
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import {WINDOW} from '../../../libs/globals';
import {Images} from "../../../assets/contansts/Images";
import {ImageContainer3} from "../../../assets/contansts/FontSizes";
import {ImageContainer2} from "../../../assets/contansts/FontSizes";

class PlayGames extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAlert: false
        };
    }

    _onPressRegister = () => {
        this.setState({
            showAlert: true
        });
    };

    _onPressQuizScreen = () => {
        this.props.navigation.navigate('QuizScreen');
    }

    _onPressProfile = () => {
        this.props.navigation.navigate('Profile');
    }


    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);
        console.disableYellowBox = true;
    }


    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor={'#666666'} animated={true}/>

                {/*Header*/}
                <View style={{
                    flex: 0.8,
                    flexDirection: 'row',
                    paddingLeft: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'gray'
                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}
                                      style={{flex: 0.2, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Icon name="menu" style={{fontSize: 18, color: 'black', marginLeft: 5}}/>
                    </TouchableOpacity>

                    <View style={{flex: 0.6, justifyItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: 25}}>Quizer</Text>
                    </View>
                </View>

                {/*Section 1 */}
                <View style={{width: WINDOW.width, flex: 5, backgroundColor: '#fcfafa'}}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        borderColor: '#fcfafa',
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingVertical: 5,
                        paddingHorizontal: 5
                    }}>
                        <View style={{backgroundColor: 'white', flex: 5}}>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <View style={{flex: 5}}>
                                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                                    colors={['#62c1f2', '#6377e8', '#7213d7']}
                                                    style={[styles.transactionHistoryLiner]}>
                                        <Text style={{color: '#fff', fontSize: 18}}>Your Ranking</Text>
                                        <Text style={{color: '#fff', fontSize: 20}}># 11,257</Text>
                                    </LinearGradient>
                                </View>
                                <View style={{flex: 5}}>
                                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                                    colors={['#12d661', '#39cab1', '#59bff1']}
                                                    style={[styles.transactionHistoryLiner]}>
                                        <Text style={{color: '#fff', fontSize: 18}}>COINS EARNED</Text>
                                        <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
                                            <View>
                                                <Image
                                                    source={Images.IconCoin}
                                                    style={{height:15,width:20,resizeMode:'contain'}}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{color: '#fff', fontSize: 20,marginLeft:5}}>2688</Text>
                                            </View>

                                        </View>
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: '#fff', flex: 5, justifyContent: 'center',
                            alignItems: 'center', textAlign: 'center'
                        }}>

                            <View style={{
                                flex: 0.9,
                                borderColor: 'gray',
                                borderWidth: 0.5,
                                borderRadius: 10,
                                paddingVertical: 5,
                                paddingHorizontal: 10
                            }}>
                                <Text style={{
                                    color: 'rgb(169,169,169)',
                                    marginTop: 8,
                                    fontSize: 18,
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>YOUR PROFILE</Text>
                                <View style={{
                                    flex: 1, justifyContent: 'center',
                                    alignItems: 'center', textAlign: 'center'
                                }}>

                                    <TouchableOpacity onPress={this._onPressProfile} style={styles.profilePicConatiner}>
                                        <Image
                                            source={Images.proPic}
                                            style={styles.profilePic}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{color: '#000', fontSize: 18, marginTop: 8}}>SAMANTHA</Text>
                                    <Text style={{color: '#000', fontSize: 18, marginTop: 8}}>SAMITH</Text>
                                    <Text style={{
                                        color: 'rgb(169,169,169)',
                                        fontSize: 15,
                                        marginTop: 8
                                    }}>@samantha_samith</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/*Section 2 */}
                <View style={{
                    width: WINDOW.width,
                    flex: 4,
                    backgroundColor: '#fcfafa',
                    paddingVertical: 5,
                    paddingHorizontal: 5
                }}>
                    <View style={{flex: 1, borderColor: 'gray', borderWidth: 0.5}}>
                        <View style={{backgroundColor: '#fff', flex: 1}}>
                            <Text style={{fontSize: 18, marginLeft: 30}}>QUIZ CATEGORIES</Text>
                        </View>
                        <View style={{
                            flex: 4.5, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center',
                            alignItems: 'center', textAlign: 'center'
                        }}>
                            <TouchableOpacity  onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#12c46e'}]}>
                                <Image
                                    source={Images.IconSport}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#ffb818'}]}>
                                <Image
                                    source={Images.IconPhysics}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#43b9e9'}]}>
                                <Image
                                    source={Images.IconFlim}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#ff536a'}]}>
                                <Image
                                    source={Images.IconPolitics}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: '#fff', flexDirection: 'row', flex: 4.5, justifyContent: 'center',
                            alignItems: 'center', textAlign: 'center'
                        }}>
                            <TouchableOpacity  onPress={this._onPressQuizScreen}  style={[styles.quizCategory, {backgroundColor: '#bd4dfe'}]}>
                                <Image
                                    source={Images.IconHistory}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#a3e039'}]}>
                                <Image
                                    source={Images.IconCalculator}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#4857b8'}]}>
                                <Image
                                    source={Images.IconLogo}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._onPressQuizScreen} style={[styles.quizCategory, {backgroundColor: '#e5e72f'}]}>
                                <Image
                                    source={Images.IconTech}
                                    style={styles.QuizPic}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                {/*Section 3 */}
                <View style={{width: WINDOW.width, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={this._onPressQuizScreen} style={styles.startButton}>
                        <View>
                            <Text style={styles.text}>Start Random Quiz</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    subHeading: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: 'gray'
    },
    startButton: {
        backgroundColor: '#521af7',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 45
    },
    text: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'center',
        paddingVertical: 10
    },
    transactionHistoryLiner: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 2,
        borderRadius: 10,
        padding: 25,
        textAlign: 'center',
        margin: 5
    },
    quizCategory: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    profile_circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuCardIcon: {
        fontSize: 25,
        width: 20,
        color: 'black'
    },
    profilePicConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    profilePic: {
        width: ImageContainer2,
        height: ImageContainer2,
        borderRadius: ImageContainer3/2
    },
    QuizPic: {
        width: ImageContainer2,
        height: ImageContainer2,
        borderRadius: ImageContainer2/2
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayGames);