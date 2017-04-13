import React, { Component, PropTypes } from 'react';
import { Screen, Title, NavigationBar, ListView, TextInput, TouchableOpacity, Icon, View } from '@shoutem/ui';
import { ChatBubble } from 'components';
import styles from './styles';

class ChatScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      messages: [
        {
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, metus vitae faucibus varius, neque dui tincidunt libero, id accumsan justo risus vitae eros.',
          time: '12.11',
        },
        {
          direction: 'from',
          message: 'wuat?',
          time: '12.22',
        },
        {
          message: 'Curabitur in mi cursus, tincidunt massa et, suscipit turpis. Donec mattis, felis eu consequat aliquam, lacus turpis ornare lacus, nec vulputate massa diam eu tellus',
          time: '15:30',
        },
        {
          direction: 'from',
          message: 'dude can you speak English?',
          time: '12.22',
        },
      ],
    };
  }

  renderRow(message) {
    return (
      <ChatBubble
        message={message.message}
        messageTime={message.time}
        messageDirection={message.direction}
      />
    );
  }

  render() {
    return (
      <Screen>
        <NavigationBar
          centerComponent={<Title>CHAT WINDOW</Title>}
        />
        <View style={styles.container}>
          <ListView
            data={this.state.messages}
            renderRow={this.renderRow}
          />

          <View styleName="horizontal">
            <TextInput
              style={{ height: this.state.height, flex: 1 }}
              onContentSizeChange={(event) => {
                this.setState({
                  height: event.nativeEvent.contentSize.height,
                });
              }}
              multiline
            />
            <TouchableOpacity styleName="clear" >
              <View style={styles.sendButton}>
                <Icon name="comment" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
    );
  }
}

ChatScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

module.exports = ChatScreen;
