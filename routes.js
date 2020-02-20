import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Inicio') {
            if (focused) {
              return <Icon name="home" size={25} color="#fff" />;
            } else {
              return <Icon name="home" size={25} color="#505050" />;
            }
          } else if (route.name === 'Alfabeto') {
            if (focused) {
              return <Icon name="alphabetical" size={25} color="#fff" />;
            } else {
              return <Icon name="alphabetical" size={25} color="#505050" />;
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#505050',
        style: {
          backgroundColor: '#007AED',
          elevation: 1,
        },
      }}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Alfabeto" component={Alphabet} />
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
