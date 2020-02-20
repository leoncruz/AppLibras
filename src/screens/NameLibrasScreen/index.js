import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card, Button} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';

export default function NameLibrasScreen({navigation}) {
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
      <View style={{position: 'absolute', top: hp(7)}}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Olá, {userName}</Text>
        <Text style={{fontSize: 20}}>Seu nome em LIBRAS é assim:</Text>
      </View>
      <View style={styles.cards}>
        <Card letter="a" />
        <Card letter="a" />
        <Card letter="a" />
        <Card letter="a" />
      </View>
      <Button
        title="Concluído"
        top={hp(5)}
        onPress={() => navigation.navigate('TabHome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
