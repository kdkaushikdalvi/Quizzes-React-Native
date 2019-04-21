import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNavigation } from '../../../redux/actions/NavAction';
import mainStyles from '../../../assets/styles/MainStyles';
import { styles } from './styles';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        var data = { navigationType: 'dashboardNavigation', navigationRoute: this.props.navigation }
        this.props.setNavigation(data);
    }

    _logout = () => {
        console.log('logout');
        this.props.navProps.rootNavigation.navigate('Home')
    }

    render() {
        return (
            <View style={mainStyles.rootView}>
                <View style={styles.btnWrap}>
                    {/* <Button large success onPress={() => { this._logout() }} style={{ alignSelf: 'center' }}>
                        <Text>Logout</Text>
                    </Button> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);