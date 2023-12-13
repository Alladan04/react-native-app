import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OperationScreen from './screens/OperationScreen';
import OperationListScreen from './screens/OperationListScreen';
import {store} from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App.js")
  return (
    <Provider store = {store} style = {styles.nav}>
    <NavigationContainer style = {styles.nav}>
            <Stack.Navigator style = {styles.nav}>
            <Stack.Screen name='OperationList' component={OperationListScreen} options={{ title: 'Главная страница', headerStyle: {
              backgroundColor: '#fb09b2',
              color:'white'
           } }}/>
            <Stack.Screen  name='Operation' component={OperationScreen} options={{ title: 'Главная страница', headerStyle: {
              backgroundColor: '#fb09b2',
              color: 'white'
           } }} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#876',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    color:'pink',
    backgroundColor:'black'
  }
});
