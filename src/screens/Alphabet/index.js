import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListLetters} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Alphabet() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alfabeto em LIBRAS</Text>
      </View>

      <View style={styles.content}>
        <ListLetters />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    color: '#007AED',
  },

  content: {
    flex: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
