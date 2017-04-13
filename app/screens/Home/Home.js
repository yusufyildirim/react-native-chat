import React, { Component, PropTypes } from 'react';

import { View, Image, Text } from 'react-native';
import { Screen, Title, NavigationBar, ListView } from '@shoutem/ui';
import { Room } from 'components';
import { images } from 'resources';
import styles from './styles';

class HomeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      rooms: [
        {
          unreadMessages: true,
          avatar: 'https://api.adorable.io/avatars/100/jonas.png',
          name: 'Foo\'s Room',
          lastMessage: 'Idk why',
          lastMessageTime: '10:38',
        },
        {
          avatar: 'https://api.adorable.io/avatars/100/lee.png',
          name: 'Bar\'s Room',
          lastMessage: 'Yeyyyy dude you are awesome. Let\'s celebrate. ',
          lastMessageTime: '09:10',
        },
        {
          name: 'John\'s Room',
          lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          lastMessageTime: 'YESTERDAY',
        },
      ],
    };
  }

  renderRow(room) {
    return (
      <Room
        unreadMessages={room.unreadMessages}
        avatar={room.avatar}
        name={room.name}
        lastMessage={room.lastMessage}
        lastMessageTime={room.lastMessageTime}
      />
    );
  }

  render() {
    return (
      <Screen>
        <NavigationBar
          centerComponent={<Title>ROOMS</Title>}
        />
        <View style={styles.container}>
          <ListView
            data={this.state.rooms}
            renderRow={this.renderRow}
          />
        </View>
      </Screen>
    );
  }
}

HomeScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

module.exports = HomeScreen;
