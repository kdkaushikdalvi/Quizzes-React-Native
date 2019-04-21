import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, Platform
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {WINDOW} from '../../../libs/globals';
import {Images} from "../../../assets/contansts/Images";
import {ImageContainer3} from "../../../assets/contansts/FontSizes";
import {ImageContainer2} from "../../../assets/contansts/FontSizes";


class Profile extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);
        console.disableYellowBox = true;
    }


    _onPressUpdateProfile(){
        this.props.navigation.navigate('UpdateProfile');
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
                    flex: 0.1,
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
                        <Text style={{color: 'black', fontSize: 25}}>My Profile</Text>
                    </View>
                </View>

                {/*Section 1 */}
                <View style={{
                    width: WINDOW.width,
                    flex: 0.9,
                }}>
                    <View style={styles.userProfile}>
                        <TouchableOpacity style={{right:0,alignItems:'flex-end',justifyContent:'flex-end',padding:10 }} onPress={()=>this._onPressUpdateProfile()}>
                            <Text style={styles.text}>Edit Profile</Text>
                        </TouchableOpacity>
                        <View style={[styles.centerItems, {flex: 1}]}>

                            <View style={[styles.centerItems, {flex: 1}]}>
                                <View style={styles.profilePicConatiner}>
                                    <Image
                                        source={Images.proPic}
                                        style={styles.profilePic}
                                    />
                                </View>
                            </View>


                            <View style={[styles.centerItems, {flex: 1}]}>
                                <Text style={{color: '#000', fontSize: 22, fontWeight: 'bold'}}>Samantha Smith</Text>
                                <Text style={{color: 'gray', fontSize: 18, fontWeight: 'bold'}}>@samantha_smith</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.menuList}>
                        <View style={{flex:1}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-evenly',backgroundColor:'#fbf8ff',flex:4}}>
                                <TouchableOpacity style={[styles.centerItems,{flexDirection: 'column',paddingHorizontal: 10}]}>
                                    <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>Quiz</Text>
                                    <Text style={styles.text}>287</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.centerItems,{flexDirection: 'column',paddingHorizontal: 10}]}>
                                    <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>Ranking</Text>
                                    <Text style={styles.text}>#11,257 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.centerItems,{flexDirection: 'column',paddingHorizontal: 10,backgroundColor:'#fff'}]}>
                                    <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>Coins</Text>
                                    <Text style={styles.text}> 2688 </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.centerItems2,{backgroundColor:'#fff',flex:4}]}>
                                <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
                                    <Text style={{fontSize:15,color:'gray'}}>Earned this week</Text>
                                    <Text style={{paddingHorizontal:20,fontSize:15,color:'#000'}}>858</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
                                    <Text style={{fontSize:15,color:'gray'}}>Earn more</Text>
                                    <Text style={{paddingHorizontal:30}}></Text>
                                    <Text style={{paddingHorizontal:20}}></Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.centerItems3,{flex:0.2,flexDirection:'row'}]}>
                        <Image
                            source={Images.Video}
                            style={styles.profilePic2}
                        />
                        <Image
                            source={Images.Invite}
                            style={styles.profilePic2}
                        />
                        <Image
                            source={Images.More}
                            style={styles.profilePic2}
                        />
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
    profilePicConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    profilePic: {
        width: ImageContainer3,
        height: ImageContainer3,
        borderRadius: ImageContainer3/2
    },
    profilePic2: {
        width: ImageContainer2,
        height: ImageContainer2,
    },
    userProfile: {
        flex: 0.5,
        backgroundColor:'#fbf8ff'
    },
    menuList: {
        flex: 0.3,
        backgroundColor: '#f9fadc',
    },
    bottom: {
        flex: 0.2,
        backgroundColor: '#fff',
    },
    logout: {
        flex: 0.1,
        backgroundColor: '#e6e1e8',
    },
    menuIcon: {
        fontSize: 21,
        marginBottom: 4
    },
    centerItems: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    centerItems2: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-evenly'
    },
    centerItems3: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    quizCategory: {
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderColor: 'white',
        borderWidth: 0.5,
    }
});


const mapStateToProps = state => ({
    navProps: state.navProps
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setNavigation: setNavigation
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);