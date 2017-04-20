/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ReactNative101 extends Component {

  constructor(props) {
    super(props);

    this.rowData = [
      {
        name: 'GY loh',
        post: 'Im sexy and i know it',
      },
      {
        name: 'gim',
        post: 'Im muscular',
      },
      {
        name: 'gyong',
        post: 'Im love crocs',
      }
    ];

    this.state = {
      dataSource: ds.cloneWithRows(this.rowData),
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.rowData.push({
    //     name: 'ggg',
    //     post: 'im hacking',
    //   });

    //   this.setState({
    //     dataSource: ds.cloneWithRows(this.rowData),
    //   });
    // }, 1000);
  }

  renderRow(rowData) {
    return (
      <Text style={styles.name}>{rowData.name}</Text>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

AppRegistry.registerComponent('ReactNative101', () => ReactNative101);
