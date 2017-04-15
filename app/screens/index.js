import { Navigation } from 'react-native-navigation';

import HomeScreen from './Home';
import NicknameScreen from './Nickname';
import ChatScreen from './Chat';

// register all screens of the app (including internal ones)
export default function registerScreens(store, Provider) {
  Navigation.registerComponent('NicknameScreen', () => NicknameScreen, store, Provider);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ChatScreen', () => ChatScreen);
}
