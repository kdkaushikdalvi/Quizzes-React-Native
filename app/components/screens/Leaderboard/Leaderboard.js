import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './styles';
import {WINDOW} from "../../../libs/globals";
import {Images} from "../../../assets/contansts/Images";

class Leaderboard extends Component {

    constructor(props) {
        super(props)
    }

    _onPressQuizScreen = () => {
        this.props.navigation.navigate('QuizScreen');
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
                        <Text style={{color: 'black', fontSize: 25}}>Leaderboard</Text>
                    </View>
                </View>

                {/*Section 1 */}
                <View style={{width: WINDOW.width, flex: 0.9}}>
                    <View style={{flex: 1}}>
                        <View style={styles.section1}>
                            <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#ffffff'}}>
                                <View style={[styles.col1]}>
                                    <View style={[styles.centerItems,{flex: 7}]}>
                                        <TouchableOpacity style={styles.rankSecond} />
                                    </View>
                                    <View style={[styles.centerItems,{flex: 2}]}>
                                        <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                        <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                    </View>
                                    <View style={[styles.centerItems,{flex: 1,flexDirection:'row',padding:5}]}>
                                        <Image
                                            style={{height: 5,width:5,padding:10,resizeMode: 'contain',marginRight: 5}}
                                            source={Images.IconCoin}
                                        />
                                        <Text style={{color:'#000',fontSize:15}}>1,25,269</Text>
                                    </View>
                                </View>

                                <View style={styles.col2}>
                                    <View style={[styles.centerItems,{flex: 7}]}>
                                        {/*<TouchableOpacity style={styles.rankFirst} />*/}
                                        <Image
                                            source={Images.proPic1}
                                            style={styles.rankFirst}
                                        />
                                    </View>
                                    <View style={[styles.centerItems,{flex: 2}]}>
                                        <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                        <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                    </View>
                                    <View style={[styles.centerItems,{flex: 1,flexDirection:'row',padding:5}]}>
                                        <Image
                                            style={{height: 5,width:5,padding:10,resizeMode: 'contain',marginRight: 5}}
                                            source={Images.IconCoin}
                                        />
                                        <Text style={{color:'#000',fontSize:15}}>1,25,269</Text>
                                    </View>
                                </View>

                                <View style={styles.col3}>
                                    <View style={[styles.centerItems,{flex: 7}]}>
                                        <TouchableOpacity style={styles.rankSecond} />
                                    </View>
                                    <View style={[styles.centerItems,{flex: 2}]}>
                                        <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                        <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                    </View>
                                    <View style={[styles.centerItems,{flex: 1,flexDirection:'row',padding:5}]}>
                                        <Image
                                            style={{height: 5,width:5,padding:10,resizeMode: 'contain',marginRight: 5}}
                                            source={Images.IconCoin}
                                        />
                                        <Text style={{color:'#000',fontSize:15}}>1,25,269</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.section2}>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <View style={styles.col11}>
                                    <View style={{flex: 3,flexDirection: 'row'}}>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <TouchableOpacity style={styles.listPerson} />
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                            <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <Text>1,25,269</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5,}]}>
                                            <Text>#5</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 3,flexDirection: 'row'}}>
                                        <View style={[styles.centerItems,{flex: 1.5 }]}>
                                            <TouchableOpacity style={styles.listPerson} />
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                            <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <Text>1,25,269</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5,}]}>
                                            <Text>#5</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 3,flexDirection: 'row'}}>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <TouchableOpacity style={styles.listPerson} />
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                            <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <Text>1,25,269</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5,}]}>
                                            <Text>#5</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 3,flexDirection: 'row'}}>
                                        <View style={[styles.centerItems,{flex: 1.5, }]}>
                                            <TouchableOpacity style={styles.listPerson} />
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5}]}>
                                            <Text style={{color:'#000',fontSize:15}}>Pam Jackson</Text>
                                            <Text style={{color:'gray',fontSize:12}}>@iampackjack</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5}]}>
                                            <Text>1,25,269</Text>
                                        </View>
                                        <View style={[styles.centerItems,{flex: 1.5}]}>
                                            <Text>#5</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>

                        <View style={styles.section3}>
                            <View style={{flex: 1, backgroundColor: '#00a2e8', flexDirection: 'row'}}>
                                <View style={[styles.centerItems,{flex: 1.5}]}>
                                    {/*<TouchableOpacity style={styles.listPerson} />*/}
                                    <Image
                                        source={Images.proPic}
                                        style={styles.listPerson2}
                                    />
                                </View>
                                <View style={[styles.centerItems,{flex: 1.5}]}>
                                    <Text style={{color:'#000',fontSize:15}}>You</Text>
                                    <Text style={{color:'#000',fontSize:12}}>@samarnath</Text>
                                </View>
                                <View style={[styles.centerItems,{flex: 1.5,flexDirection:'row'}]}>
                                    <Image
                                        style={{height: 5,width:5,padding:10,resizeMode: 'contain',marginRight: 5}}
                                        source={Images.IconCoin}
                                    />

                                    <Text>1,25,269</Text>
                                </View>
                                <View style={[styles.centerItems,{flex: 1.5}]}>
                                    <Text>#5</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);