import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Ceci</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    position: 'absolute',
    top: hp(2),
  },
});
