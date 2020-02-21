import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Card() {
  return (
    <View style={styles.card}>
      <A width={wp(25)} height={wp(25)} />
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
