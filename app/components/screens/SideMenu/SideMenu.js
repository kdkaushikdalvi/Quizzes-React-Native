import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions,Image,Platform} from "react-native";
import Leaderboard from "../Leaderboard/Leaderboard";

import Notificatios from "../Notifications/Notificatios";
import { Images } from '../../../assets/contansts/Images';
import { ImageContainer3 } from '../../../assets/contansts/FontSizes';

class SideMenu extends Component {

    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.userProfile}>
                    <View style={[styles.centerItems,{flex:1,flexDirection: 'row'}]}>
                        <View style={[styles.centerItems,{flex:5}]}>
                            <View style={styles.profilePicConatiner}>
                                <Image
                                    source={Images.proPic}
                                    style={styles.profilePic}
                                />
                            </View>
                        </View>
                        <View style={{flex:5}}>
                            <Text style={{color:'#000',fontSize:18,fontWeight: 'bold'}}>Samantha</Text>
                            <Text style={{color:'#000',fontSize:18,fontWeight: 'bold'}}>Smith</Text>
                            <Text style={{color:'gray',fontSize:15,fontWeight: 'bold'}}>@samantha_smith</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.menuList]}>
                    <ScrollView>
                        <View>
                            <TouchableOpacity onPress={this.navigateToScreen("PlayGames")} style={{flexDirection:'row',marginHorizontal:30,marginVertical: 15}}>
                                <Image
                                    style={styles.menuIcon}
                                    source={Images.IconPlay}
                                />
                                <Text  style={styles.text}> Play Quiz </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.navigateToScreen("Leaderboard")} style={{flexDirection:'row',marginHorizontal:30,marginVertical: 15}}>
                                <Image
                                    style={styles.menuIcon}
                                    source={Images.IconLeaderboard}
                                />
                                <Text  style={styles.text}> Leaderboard </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.navigateToScreen("Profile")} style={{flexDirection:'row',marginHorizontal:30,marginVertical: 15}}>
                                <Image
                                    style={styles.menuIcon}
                                    source={Images.IconSetting}
                                />
                                <Text  style={styles.text}> My Profile </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.navigateToScreen("Earncoins")} style={{flexDirection:'row',marginHorizontal:30,marginVertical: 15}}>
                                <Image
                                    style={styles.menuIcon}
                                    source={Images.IconCoin}
                                />
                                <Text  style={styles.text}> Earn Coins </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.navigateToScreen("Notificatios")} style={{flexDirection:'row',marginHorizontal:30,marginVertical: 15}}>
                                <Image
                                    style={styles.menuIcon}
                                    source={Images.IconNotification}
                                />
                                <Text  style={styles.text}> Notifications </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>

                <TouchableOpacity onPress={this.navigateToScreen("Home")} style={[styles.logout,styles.centerItems]}>
                    <Text style={[styles.text,{ color: "red"}]}>Logout</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default SideMenu;

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#e6e1e8'
    },
    userProfile:{
        flex: 0.4,
        backgroundColor: '#fff'
    },
    menuList:{
        flex: 0.5,
        backgroundColor: '#fff',
    },
    logout:{
        flex: 0.1,
        backgroundColor: '#e6e1e8',
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
    menuIcon: {
        resizeMode: 'contain',
        height: 18,
        width: 18,
        marginTop: 2
    },
    centerItems:{
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:18,
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 10
    }
});