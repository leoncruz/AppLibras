import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CarouselLetters} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SwiperCards from '../../components';

export default function Alphabet() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alfabeto em LIBRAS</Text>
      </View>

      <View style={styles.content}>
        <View tyle={{flex: 1}}>
          <Icon name="keyboard-arrow-left" size={25} />
        </View>

        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <CarouselLetters />
        </View>

        <View style={{flex: 1}}>
          <Icon name="keyboard-arrow-right" size={25} />
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
