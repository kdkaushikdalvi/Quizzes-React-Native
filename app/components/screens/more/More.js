import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mainStyles from '../../../assets/styles/MainStyles';
import { styles } from './styles';
import { setNavigation } from '../../../redux/actions/NavAction';

class More extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
    }

    render(){
        return(
            <View style={mainStyles.rootView}>
                <View style={styles.btnWrap}>
                    <Text style={{fontSize: 30}}>More Page</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(More);