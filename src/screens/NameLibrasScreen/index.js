import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card, Button} from '../../components';

export default function NameLibrasScreen() {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: hp(10)}}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Olá, Ceci</Text>
        <Text style={{fontSize: 20}}>Seu nome em LIBRAS é assim:</Text>
      </View>
      <View style={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <Button title="Concluído" top={hp(5)} />
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
