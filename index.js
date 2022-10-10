/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// app.json에 지정 된 name과 displayName을 기준으로 따라감
// app.json의 name을 바꿔도 app 이름이 변경되지는 않음.
