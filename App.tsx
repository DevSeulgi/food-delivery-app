import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View, Pressable} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 10,
          backgroundColor: 'yellow',
          alignItems: 'flex-end', // 가운데 정렬
          justifyContent: 'center', // 수직 가운데 정렬
        }}>
        <Pressable
          onPress={onClick}
          style={{
            // 줄여서 못 씀.
            // paddingTop: 20,
            // paddingBottom: 20,
            // paddingRight: 40,
            // paddingLeft: 40,
            paddingVertical: 20,
            paddingHorizontal: 40,
            backgroundColor: 'blue',
          }}>
          {/* onClick 누르면 뜨는 효과 */}
          {/* iOS, Android 동일하게 보이고 싶다면 되도록 Pressable후 스타일 별도 지정 */}
          {/* TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Pressable, Button */}
          <Text style={{color: 'white'}}>Home Screen</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Second Screen</Text>
      </View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

// Stack은 createNativeStackNavigator를 불러와야 가능
const Stack = createNativeStackNavigator();
// 아래와 같이 구현되어 있음.
// function Stack(){
//   return <View></View>
// }
// function Navigator(){
//   return <View></View>
// }
// function Screen(){
//   return <View></View>
// }
// Stack.Navigator = Navigator;
// Stack.Screen = Screen;

function App() {
  return (
    // import, navigation 구조 필요. screen 설계
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        {/* props 추가로 받고 싶을 때 */}
        {/* <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
