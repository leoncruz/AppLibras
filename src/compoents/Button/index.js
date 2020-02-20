import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Button(props) {
  return (
    <View style={{top: props.top}}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    backgroundColor: '#007AED',
    paddingHorizontal: wp(10),
    paddingVertical: hp(1),
    borderRadius: 50,
    position: 'absolute',
  },

  text: {
    fontSize: hp(4),
    color: '#ffffff',
  },
});
