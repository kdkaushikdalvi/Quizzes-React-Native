import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import {Images} from '../../../assets/contansts/Images'
import {Content, Form, Item, Input, Label} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';

import {Col, Row, Grid} from "react-native-easy-grid";
import mainStyles from '../../../assets/styles/MainStyles';
import {styles} from './styles';

let deviceWidth = Dimensions.get('window').width;

class Register extends Component {
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

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);
    }

    _login = () => {
        this.props.navProps.rootNavigation.navigate('TabNav')
    }

    render() {
        return (
            <View style={mainStyles.rootView}>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor={'#666666'} animated={true}/>
                <Grid style={{backgroundColor: 'white', paddingHorizontal: 20}}>

                    <Row size={1} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Image
                            style={{width: 60, height: 50,}}
                            source={Images.cameraLogo}
                        />
                    </Row>

                    <Text style={{fontSize: 15, color: 'gray'}}>Username</Text>

                    <Row size={1}>
                        <Content>
                            <Item last>
                                <Input placeholder="Username"/>
                            </Item>
                        </Content>
                    </Row>

                    <Text style={{fontSize: 15, color: 'gray'}}>Email Address</Text>
                    <Row size={1}>
                        <Content>
                            <Item last>
                                <Input placeholder="Email Address"/>
                            </Item>
                        </Content>
                    </Row>

                    <Text style={{fontSize: 15, color: 'gray'}}>Create Password</Text>

                    <Row size={1}>
                        <Content>
                            <Item last>
                                <Input placeholder="Create Password"
                                       maxLength={40}
                                       secureTextEntry={true}
                                />
                            </Item>
                        </Content>
                    </Row>

                    <Row size={1}>
                        <TouchableOpacity onPress={this._onPressRegister} style={styles.buttonRegistration}>
                            <View >
                                <Text style={styles.text}>Register Now</Text>
                            </View>
                        </TouchableOpacity>
                    </Row>
                </Grid>

                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title="success"
                    contentContainerStyle={{width: deviceWidth - 20}}
                    message={'Registration completed successfully'}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    showCancelButton={false}
                    confirmText="OK"
                    confirmButtonColor={'#15e0b7'}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                    confirmButtonStyle={{paddingVertical: 10, paddingHorizontal: 20}}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);