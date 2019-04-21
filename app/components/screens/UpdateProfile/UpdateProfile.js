import React, {Component} from 'react';
import {
    View,
    Image,
    TextInput,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, ScrollView, StyleSheet, Platform
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import {WINDOW} from "../../../libs/globals";
import {Row} from "react-native-easy-grid";
import {Images} from "../../../assets/contansts/Images";
import {ImageContainer3} from "../../../assets/contansts/FontSizes";

let deviceWidth = Dimensions.get('window').width;

class UpdateProfile extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);
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
                    <View style={styles.userProfile}>
                        <View style={[styles.centerItems, {flex: 1,flexDirection:'row'}]}>
                            <View style={[styles.centerItems, {flex: 1}]}>
                                <View style={styles.profilePicConatiner}>
                                    <Image
                                        source={Images.proPic}
                                        style={styles.profilePic}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <View>
                                    <Text>Full Name</Text>
                                </View>
                                <TextInput
                                    value="Samantha Smith"
                                    style={[styles.input,{width: 160}]}
                                    placeholderTextColor={'#000'}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.centerItems,styles.menuList]}>
                        <View>
                            <View>
                                <Text>Username</Text>
                            </View>
                            <TextInput
                                value="Samantha_smith"
                                style={styles.input}
                                placeholderTextColor={'#000'}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={{marginTop: 25}}>
                            <View>
                                <Text>Email Address</Text>
                            </View>
                            <TextInput
                                value="samanthasmith@gmail.com"
                                style={styles.input}
                                placeholderTextColor={'#000'}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                    </View>

                    <View style={{flex:0.1,paddingHorizontal: 30}}>
                        <TouchableOpacity onPress={this._onPressLogin} style={styles.signInButton}>
                            <View>
                                <Text style={styles.textUpdate}>Update Info</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._onPressLogin} style={styles.changePasswordButton}>
                            <View>
                                <Text style={styles.textChanges}>Change Password</Text>
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
    input: {
        width: 250,
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: "#000",
        fontSize:18
    },
    userProfile: {
        flex: 0.3,
        backgroundColor: '#fff'
    },
    menuList: {
        flex: 0.4,
        backgroundColor: '#fff',
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
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    signInButton: {
        backgroundColor: '#521af7',
        borderRadius: 50,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        height: 50
    },
    changePasswordButton: {
        backgroundColor: '#dcf0fa',
        borderRadius: 50,
        flexDirection:'row',
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);