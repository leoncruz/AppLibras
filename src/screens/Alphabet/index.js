import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CarouselLetters} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Alphabet() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alfabeto em LIBRAS</Text>
      </View>

      <View style={styles.content}>
        <View>
          <Icon name="keyboard-arrow-left" size={25} color="#007AED" />
        </View>

        <View>
          <CarouselLetters />
        </View>

        <View>
          <Icon name="keyboard-arrow-right" size={25} color="#007AED" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Automático</Text>
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
    fontSize: 24,
  },

  content: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
