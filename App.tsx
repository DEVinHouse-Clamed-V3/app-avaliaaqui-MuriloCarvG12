import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { globalStyles } from './components/Globalstyles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

import intro from "./screens/intro"
import home from "./screens/home"
import Form from './screens/form';



export default function App() {
  
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={intro}
          
        />
        <Stack.Screen
          name="Home"
          component={home}
        />

        <Stack.Screen
        name="Form"
        component={Form}
        />

        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

