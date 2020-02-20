import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen, Alphabet} from './src/screens/';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Aphabet" component={Alphabet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
