/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import '@src/i18n';
import '@src/services/googleSignIn';
AppRegistry.registerComponent(appName, () => App);
