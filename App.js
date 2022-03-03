/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Menu_Utama from './Component/Menu_Utama';
import Menu_Berita from './Component/Menu_Berita';
import Menu_Game from './Component/Menu_Game';
import Menu_Hits from './Component/Menu_Hits';


const style = StyleSheet.create ({
  white: {
    padding : 20,
    color : 'white',
    fontSize : 50,
    textAlign : 'center'
  },
  green: {
    padding : 20,
    color : 'green',
    fontSize : 20,
    textAlign : 'center'
  }
})

const Headers = () => {
  let text = 'Ini adalah header'
  return(
      <Text style={style.white}>
      {text}
      </Text>
  )
}

const Footer = () => {
  let text = 'Ini adalah footer'
  return(
    <Text style={style.green}>
      {text}
    </Text>
  )
}

class App extends Component {
  render(){
    return (
      <View style={{flex: 10, backgroundColor: 'skyblue'}}>
      <Headers />
      <Menu_Utama />
      <Menu_Berita />
      <Menu_Game />
      <Menu_Hits />
      <Footer />
      </View>
    )
  }
}

export default App;
