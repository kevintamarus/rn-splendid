import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import CreateGame from './components/CreateGame';
import Chat from './components/Chat';
import GameScreen from './components/GameScreen';
import Home from './components/Home';
import JoinGame from './components/JoinGame';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import OpponentsInfo from './components/gameplay_components/OpponentsInfo';
import WaitingRoom from './components/WaitingRoom';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home"
            component={Home}
            title="Home"
            hideNavBar={true}
          />
          <Scene key="login"
            component={Login}
            title="Login"
          />
          <Scene key="createGame"
            component={CreateGame}
            title="Create Game"
          />
          <Scene key="joinGame"
            component={JoinGame}
            title="Join Game"
          />
          <Scene key="leaderboard"
            component={Leaderboard}
            title="Leaderboard"
          />
          <Scene key="waitingRoom"
            component={WaitingRoom}
            title="Waiting Room"
          />
          <Scene key="gameplay" tabs={true}>
            <Scene key="gameScreen"
              component={GameScreen}
              title="Game Screen"
            />
            <Scene key="opponentsInfo"
              component={OpponentsInfo}
              title="Opponents Info"
            />
            <Scene key="chat"
              component={Chat}
              title="Chat"
            />
          </Scene>

        </Scene>
      </Router>
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
});
