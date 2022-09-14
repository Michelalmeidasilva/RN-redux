import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/app-module';
import { name as appName } from './app.json';
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(App));
