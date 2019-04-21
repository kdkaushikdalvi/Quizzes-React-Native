import React, { Component } from 'react';
import {
   StyleSheet,Button
} from 'react-native';



export default class Setting extends React.Component {
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});