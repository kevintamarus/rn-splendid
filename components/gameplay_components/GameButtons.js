import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class GameButtons extends Component {

  render() {
    return (
      <View>
        <Button title="Collect Coins" onPress={() =>{}}/>
        <Button title="Buy Card" onPress={() =>{}}/>
        <Button title="Reserve Card" onPress={() =>{}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});