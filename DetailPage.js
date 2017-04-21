import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    backButton: {
        marginTop: 15,
    }
});

export default class DetailPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.rowData.name}</Text>
                <Text>{this.props.rowData.post}</Text>
                <TouchableOpacity onPress={this.props.navigator.pop} style={styles.backButton}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}