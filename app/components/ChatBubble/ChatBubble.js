import React, { Component, PropTypes } from 'react';
import { View, Row, Subtitle, Caption, Image, Text, Divider } from '@shoutem/ui';
import styles from './styles';

class ChatBubble extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    let containerStyle = styles.toStyle; // that means stick to the right because I send a message
    let bubbleStyle = styles.toBubbleStyle;
    let textStyle = styles.toTextStyle;

    if (props.messageDirection !== 'to') {
      containerStyle = styles.fromStyle;
      bubbleStyle = styles.fromBubbleStyle;
      textStyle = styles.fromTextStyle;
      // that means stick to the left because message coming from who knows
    }

    this.state = {
      containerStyle,
      bubbleStyle,
      textStyle
    };
  }

  render() {
    return (
      <View styleName="horizontal" style={this.state.containerStyle}>
        <View style={{ ...styles.bubbleStyle, ...this.state.bubbleStyle }}>
          <Text style={this.state.textStyle}>
            {this.props.message}
          </Text>

          <Caption>{this.props.messageTime}</Caption>
        </View>
      </View>
    );
  }
}

ChatBubble.propTypes = {
  messageDirection: PropTypes.string,
  message: PropTypes.string.isRequired,
  messageTime: PropTypes.string.isRequired,
};

ChatBubble.defaultProps = {
  messageDirection: 'to',
};

module.exports = ChatBubble;
