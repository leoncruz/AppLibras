import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NameScreen,
  NameLibrasScreen,
  HomeScreen,
  Alphabet,
} from './src/screens/';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Alphabet" component={Alphabet} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NameLibras"
          component={NameLibrasScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabHome"
          component={TabHome}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
