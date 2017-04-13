import { Navigation } from 'react-native-navigation';

import HomeScreen from './Home';

// register all screens of the app (including internal ones)
export default function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
}
