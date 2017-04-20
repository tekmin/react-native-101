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
  View,
  Navigator,
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

    this.routes = [
      { pageName: 'list' },
      { pageName: 'post' },
    ];

    this.state = {
      dataSource: ds.cloneWithRows(this.rowData),
    };

    this.renderScene = this.renderScene.bind(this);
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
      <View style={styles.row}>
        <Text style={styles.name}>{rowData.name}</Text>
        <Text style={styles.post}>{rowData.post}</Text>
      </View>
    );
  }

  renderScene(route, navigator) {
    if(route.pageName === 'list') {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.routes[0]}
        initialRouteStack={this.routes}
        renderScene={this.renderScene}
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
  row: {
    padding: 10,
  },
  post: {
    color: 'gray',
  }
});

AppRegistry.registerComponent('ReactNative101', () => ReactNative101);
