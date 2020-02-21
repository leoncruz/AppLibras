import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {CarouselHome} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Text style={styles.title}>Olá, {userName}</Text>
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
    top: hp(2),
    flex: hp(1),
  },

  title: {
    fontSize: 20,
    color: '#007AED',
    textAlign: 'center',
  },

  content: {
    flex: hp(4),
    alignSelf: 'center',
  },
});
