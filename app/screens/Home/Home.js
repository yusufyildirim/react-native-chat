import React, { Component, PropTypes } from 'react';

import { View, Image, Text } from 'react-native';
import { Screen, Title, NavigationBar } from '@shoutem/ui';

import { images } from 'resources';
import styles from './styles';

class HomeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <Screen>
        <NavigationBar
          centerComponent={<Title>ROOMS</Title>}
        />
        <View style={styles.container}>
          <Image source={images.iconLightning} />
          <Text style={styles.lightning}>Lightning!</Text>
        </View>
      </Screen>
    );
  }
}

HomeScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

module.exports = HomeScreen;
