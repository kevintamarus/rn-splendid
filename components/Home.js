import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Home Page</Text>
        <Button title='Create Game' onPress={() => Actions.createGame()}/>
        <Button title='Join Game' onPress={() => Actions.joinGame()}/>
        <Button title='Leaderboard' onPress={() => Actions.leaderboard()}/>
        <Button title='Game Screen Shortcut' onPress={() => Actions.gameScreen()}/>
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