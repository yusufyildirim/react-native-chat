import React, { Component, PropTypes } from 'react';
import { Row } from '@shoutem/ui';

class Room extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <Row />
    );
  }
}

Room.propTypes = {
  // testProp: PropTypes.string,
};

Room.defaultProps = {
  // testProp: '',
};

module.exports = Room;
