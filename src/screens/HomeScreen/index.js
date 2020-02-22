import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {CarouselHome} from '../../components';

export default function HomeScreen() {
  const [userName, setUserName] = useState('');

  async function readUserName() {
    const name = await AsyncStorage.getItem('userName');
    setUserName(name);
  }

  useEffect(() => {
    readUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Suas Atividades</Text>
      </View>
      <View style={styles.content}>
        <CarouselHome />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    color: '#007AED',
    textAlign: 'center',
  },

  content: {
    flex: 6,
  },
});
