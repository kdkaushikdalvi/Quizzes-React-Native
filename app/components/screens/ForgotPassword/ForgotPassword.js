import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions, TouchableOpacity, ScrollView
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNavigation} from '../../../redux/actions/NavAction';
import {Content, Item, Input} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';

import {Col, Row, Grid} from "react-native-easy-grid";
import mainStyles from '../../../assets/styles/MainStyles';
import {styles} from './styles';

let deviceWidth = Dimensions.get('window').width;

class ForgotPassword extends Component {
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


                <Grid style={{backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 30}}>
                    <ScrollView>
                        <Row size={3}>
                            <Content>
                                <Text style={{marginVertical: 50, fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                                    Nevermind ! Its too easy to reset
                                </Text>

                            </Content>
                        </Row>

                        <Row size={1}>
                            <Content>
                                <View style={{marginVertical: 30}}>
                                    <Text>Enter your registered email address</Text>
                                    <Text>and We'll send you password</Text>
                                    <Text>reset instruction</Text>
                                </View>
                            </Content>
                        </Row>

                        <Text style={{fontSize: 15, color: 'gray',marginTop:20}}>Your registered Email Address</Text>

                        <Row size={1}>
                            <Content style={{marginTop:20}}>
                                <Item>
                                    <Input placeholder="Email Address"
                                           maxLength={40}
                                           secureTextEntry={true}
                                    />
                                </Item>
                            </Content>
                        </Row>

                        <Row size={1}>
                            <TouchableOpacity onPress={this._onPressRegister} style={styles.buttonRegistration}>
                                <View>
                                    <Text style={styles.text}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);