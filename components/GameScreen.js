import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';
import NoblesDisplay from './gameplay_components/NoblesDisplay';

export default class GameScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      whiteCoins: 0,
      blueCoins: 0,
      greenCoins: 0,
      redCoins: 0,
      blackCoins: 0,
      goldCoins: 5,
      LvlOneCards: [],
      LvlTwoCards: [],
      LvlThreeCards: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GameButtons/>
        <PlayerItems/>
        <OpponentsInfo/>
        <CoinsDisplay/>
        <CardsDisplay/>
        <NoblesDisplay/>
        <GameButtons/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});