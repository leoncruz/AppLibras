import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen, NameLibrasScreen} from './src/screens/';

const Stack = createStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
