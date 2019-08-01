/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, I18nManager, View} from 'react-native';

import localization from './app/localization/localization';

import RootNav from './app/navigator/RootNavigator'

export default class App extends Component {
  constructor(){
    super();
    data = 'ar';
    localization.setLanguage(data);
    if(data=='ar'){
      I18nManager.forceRTL(false);
    }else if(data=='en'){
      I18nManager.forceRTL(true);
    }
  }
  render() {
    return (
      <RootNav />
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
