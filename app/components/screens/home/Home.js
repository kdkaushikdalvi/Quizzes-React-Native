import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import {Images} from '../../../assets/contansts/Images'
import {Content, Form, Item, Input, Label} from 'native-base';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';

import {Col, Row, Grid} from "react-native-easy-grid";
import mainStyles from '../../../assets/styles/MainStyles';
import * as colors from '../../../assets/styles/colors'

import {styles} from './styles';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        console.disableYellowBox = true;
    }

    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);

    }

    _login = () => {
        this.props.navProps.rootNavigation.navigate('TabNav')
    }

    _onPressNewUser = () => {
        this.props.navigation.navigate('Register');
    };
    _onPressLogin = () => {
        this.props.navigation.navigate('DrawerNav');
    };

    _forgotPassword=()=>{
        this.props.navigation.navigate('ForgotPassword');
    }

    render() {
        return (

            <View style={mainStyles.rootView}>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor={'#666666'}
                           animated={true}/>

                <Grid style={{backgroundColor: 'white', paddingHorizontal: 20}}>
                    <Row size={0.5}>
                        <Col style={{
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end'
                        }}>
                            <TouchableOpacity onPress={this._onPressNewUser}>
                                <Text style={{fontSize: 18, color: 'gray', paddingVertical: 10}}>New
                                    User?</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row size={1.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Image
                            style={{width: '70%', height: 100,}}
                            source={Images.headerLogo}
                        />
                    </Row>
                    <Row size={0.5}>
                        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Welcome to
                            Quizer</Text>
                    </Row>

                    <Text style={{fontSize: 15, color: colors.darkGrey}}>Username or Email Address</Text>

                    <Row size={0.5}>
                        <Content>
                            <Item last>
                                <Input placeholder="Username"/>
                            </Item>
                        </Content>
                    </Row>
                    <Text style={{fontSize: 15, color: colors.darkGrey,marginVertical: 8}}>Password</Text>
                    <Row size={0.5}>
                        <Content>
                            <Item last>
                                <Input placeholder="Password"
                                       maxLength={40}
                                       secureTextEntry={true}
                                />

                                <TouchableOpacity onPress={this._forgotPassword}>
                                    <Text style={styles.forgotPassword}>Forgot?</Text>
                                </TouchableOpacity>


                            </Item>
                        </Content>
                    </Row>
                    <Row size={0.5} style={{flexDirection: 'row'}}>
                        <Col style={{alignItems: 'center',justifyContent: 'center'}}>
                            <View >
                                <IconCom name='facebook-box' style={{fontSize:35,color:'#3a559f'}}/>
                            </View>
                        </Col>
                        <Col style={{alignItems: 'center',justifyContent: 'center'}}>
                            <View>
                                <IconCom name='google-plus' style={{fontSize:35,color:'#d5483b'}}/>
                            </View>
                        </Col>
                    </Row>
                    <Row size={1}>
                        <TouchableOpacity onPress={this._onPressLogin} style={styles.signInButton}>
                            <View>
                                <Text style={styles.text}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </Row>
                </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);