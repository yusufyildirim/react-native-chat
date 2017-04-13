import React, { Component, PropTypes } from 'react';
import { View, Row, Subtitle, Caption, Image, Text, Divider } from '@shoutem/ui';
import styles from './styles';

class Room extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <Row>
          <View styleName="notification-dot" />
          <Image
            style={styles.avatar}
            source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png' }}
          />
          <View styleName="horizontal space-between">
            <View styleName="flexible vertical space-between">
              <Subtitle numberOfLines={1}>Foo Room</Subtitle>
              <Text numberOfLines={1}>Test Message bla bla bla aıoshdıo ashdoı asdoı</Text>
            </View>

            <View>
              <Caption>20:21</Caption>
            </View>
          </View>
        </Row>
        <Divider styleName="line" />
      </View>
    );
  }
}

Room.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageTime: PropTypes.string.isRequired,
};

Room.defaultProps = {
  avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
  // name: '-',
  // lastMessage: '',
  // lastMessageTime: 'UNKNOWN'
};

module.exports = Room;
