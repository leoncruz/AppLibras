import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Card() {
  return (
    <View style={styles.card}>
      <Text>Aqui vem a imagem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp(40),
    height: wp(40),
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
