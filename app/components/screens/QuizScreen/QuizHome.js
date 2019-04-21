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
import mainStyles from '../../../assets/styles/MainStyles';
import {styles} from './styles';
import {Images} from "../../../assets/contansts/Images";
import PercentageCircle from 'react-native-percentage-circle';
let deviceWidth = Dimensions.get('window').width;

class QuizHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
    }

    componentDidMount() {
        var data = {navigationType: 'rootNavigation', navigationRoute: this.props.navigation}
        this.props.setNavigation(data);
    }

    _onPressCongrats = () => {
        this.props.navigation.navigate('Congrats');
    }

    render() {
        return (
            <View style={[mainStyles.rootView, {backgroundColor: 'fcfafa'}]}>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor={'#666666'} animated={true}/>

                <View style={{
                    flex: 2.5,
                    backgroundColor: '#ffffff',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingHorizontal: 25
                }}>
                    <View>
                        <Text style={{fontSize: 18, color: 'gray'}}>Que 6/10</Text>
                    </View>
                    <View>
                        <PercentageCircle radius={35} percent={50} color={"#3498db"} >
                            <Text style={{fontSize: 24, color: 'red'}}>4</Text>
                        </PercentageCircle>
                    </View>

                    <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
                        <View>
                            <Image
                                source={Images.IconCoin}
                                style={{height:15,width:18,resizeMode:'contain'}}
                            />
                        </View>
                        <View>
                            <Text style={{color: 'gray',fontSize: 18,marginLeft:5}}>415</Text>
                        </View>

                    </View>
                </View>

                <View style={{flex: 7.5, backgroundColor: '#ffffff', paddingHorizontal: 20, paddingBottom: 20}}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        backgroundColor: '#ffffff',
                        borderColor: 'gray',
                        borderWidth: 0.5,
                        borderRadius: 10
                    }}>
                        <View style={{flex: 0.5, paddingVertical: 10,marginTop: 5}}>
                            <Text style={{fontSize: 18, color: 'gray', marginLeft: 20}}>Question 6 </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold', marginLeft: 20}}>
                                Presently, who is the captain of the Indian's Women's T20 international team?
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.options} onPress={()=>{this._onPressCongrats()}}>
                            <Text style={{fontSize: 18, color: '#000'}}>Mitali Raj</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.options,{backgroundColor:'#12c46e'}]} onPress={()=>{this._onPressCongrats()}}>
                            <Text style={{fontSize: 18, color: '#000'}}>Harmanpreet Kaur</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.options,{backgroundColor:'#ff536a'}]} onPress={()=>{this._onPressCongrats()}}>
                            <Text style={{fontSize: 18, color: '#000'}}>Veda Krishnamurthy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.options} onPress={()=>{this._onPressCongrats()}}>
                            <Text style={{fontSize: 18, color: '#000'}}>Smriti Mandhana</Text>
                        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizHome);