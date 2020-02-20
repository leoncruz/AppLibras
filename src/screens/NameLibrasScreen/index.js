import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, CardList} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';

export default function NameLibrasScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [letters, setLetters] = useState(
    'a b c d e f g h i k j l m n o p q r s t u v w x y z'.split(' '),
  );

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
        <Text style={styles.textTitle}>Olá, {userName}</Text>
        <Text style={styles.textTitle}>Seu nome em LIBRAS é assim:</Text>
      </View>

      <View style={styles.listCards}>
        <CardList
          data={userName}
          userName={userName}
          onPress={() => navigation.navigate('TabHome')}
        />
      </View>

      <View style={styles.footer}>
        <Button onPress={() => navigation.navigate('TabHome')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },

  listCards: {
    flex: 6,
    marginHorizontal: 5,
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
