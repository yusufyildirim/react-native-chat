import io from 'socket.io-client';
import store from 'app/store';
import { goToPage } from 'app/reducers/goToPage/actions'

const socket = io('http://127.0.0.1:3000', { jsonp: false });

socket.on('operationRejected', (data) => {
  alert(data.message);
});

const Socket = {
  get instance() {
    return socket;
  },

  createAccount(nickname) {
    socket.emit('createAccount', { nickname });
  },
};

module.exports = Socket;
