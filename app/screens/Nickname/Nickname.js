import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Socket } from 'lib';
import { View, Screen, Title, NavigationBar, Text, Caption, TextInput, Button } from '@shoutem/ui';
import { Room } from 'components';

import styles from './styles';

class HomeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.chooseNickname = this.chooseNickname.bind(this);
    this.state = { nickname: '' };

    this.onLogin();
  }

  onLogin() {
    Socket.instance.on('login', (data) => {
      this.props.navigator.push({
        screen: 'HomeScreen',
        passProps: { data },
      });
    });
  }

  goToHome(room) {
    this.props.navigator.resetTo({
      screen: 'HomeScreen',
    });
  }

  chooseNickname() {
    const nickname = this.state.nickname;

    if (nickname !== '') {
      Socket.createAccount(nickname);
    } else {
      alert('Please type something');
    }
  }

  renderRow(room) {
    return (
      <Room
        onPress={() => this.goToChat(room)}
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
          centerComponent={<Title>PICK A NICKNAME</Title>}
        />
        <View style={styles.container} styleName="vertical v-center">
          <View styleName="vertical h-center">
            <Text>Pick a nickname for yourself</Text>
            <Caption>Shine like a star!</Caption>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Type a nickname"
            onChangeText={(text) => { this.setState({ nickname: text }); }}
          />

          <View styleName="md-gutter">
            <Button styleName="secondary" onPress={this.chooseNickname}>
              <Text>Lets Go!</Text>
            </Button>
          </View>
        </View>
      </Screen>
    );
  }
}

HomeScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { };
};

module.exports = connect(mapStateToProps)(HomeScreen);
