import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class JoinGame extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Join Game Page</Text>
        <Button title="Join A Game" onPress={() => Actions.waitingRoom()}/>
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