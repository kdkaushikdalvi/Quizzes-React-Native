import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, ScrollView, Image
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {WINDOW} from "../../../libs/globals";
import {styles} from "../Earncoins/styles";
import {Images} from "../../../assets/contansts/Images";

class Earncoins extends Component {
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

                {/*Header*/}
                <View style={{flex: 0.1, flexDirection: 'row', paddingLeft: 10,borderBottomWidth: 0.5,borderBottomColor:'gray'}}>

                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}
                                      style={{flex: 0.2, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Icon name="menu" style={{fontSize: 18, color: 'black', marginLeft: 5}}/>
                    </TouchableOpacity>

                    <View style={{flex: 0.6, justifyItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: 25}}>Earn coins</Text>
                    </View>
                </View>

                {/*Section 1 */}
                <TouchableOpacity style={{right:0,alignItems:'flex-end',justifyContent:'flex-end',padding:10,flexDirection:'row'}}>
                    <Image
                        style={styles.menuIcon}
                        source={Images.IconCoin}
                    />
                    <Text style={styles.text}> 1,20,657 </Text>
                </TouchableOpacity>

                <View style={{width: WINDOW.width, flex: 0.9}}>
                    <View style={{flex:1,paddingVertical: 20}}>
                        <View style={{flex:3}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={[styles.centerItems,{flex:4,}]}>
                                    <Image
                                        source={Images.Video}
                                        style={styles.profilePic}
                                    />
                                </View>
                                <View style={[styles.centerTextItems,{flex:6}]}>
                                    <Text style={{color:'#000',fontSize:18}}>Watch Video</Text>
                                    <Text style={{color:'gray',fontSize:12,marginTop: 5}}>Text demo Text demo Text demo</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={[styles.centerItems,{flex:4,}]}>
                                    <Image
                                        source={Images.Invite}
                                        style={styles.profilePic}
                                    />
                                </View>
                                <View style={[styles.centerTextItems,{flex:6}]}>
                                    <Text style={{color:'#000',fontSize:18}}>Invite Friend</Text>
                                    <Text style={{color:'gray',fontSize:12,marginTop: 5}}>Text demo Text demo Text demo</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={[styles.centerItems,{flex:4,}]}>
                                    <Image
                                        source={Images.facebok}
                                        style={styles.profilePic}
                                    />
                                </View>
                                <View style={[styles.centerTextItems,{flex:6}]}>
                                    <Text style={{color:'#000',fontSize:18}}>Connect Facebook</Text>
                                    <Text style={{color:'gray',fontSize:12,marginTop: 5}}>Text demo Text demo Text demo</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={[styles.centerItems,{flex:4,}]}>
                                    <Image
                                        source={Images.rate}
                                        style={styles.profilePic}
                                    />
                                </View>
                                <View style={[styles.centerTextItems,{flex:6}]}>
                                    <Text style={{color:'#000',fontSize:18}}>Rate us</Text>
                                    <Text style={{color:'gray',fontSize:12,marginTop: 5}}>Text demo Text demo Text demo</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    navProps: state.navProps
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setNavigation: setNavigation
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Earncoins);