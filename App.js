import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { fectchContacts } from './utility/api';
import Contact from './Screen/Contact';
import 'react-native-get-random-values';
import { v4 } from 'uuid';
import { Profile } from './Screen/Profile';

export default function App() {
  
  const Stack=createStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Contact}>
        <Stack.Screen name="Liên hệ" component={Contact}/>
        <Stack.Screen name="Chi tiết" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
