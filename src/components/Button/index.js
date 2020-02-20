import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

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
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    position: 'absolute',
  },

  text: {
    fontSize: 20,
    color: '#ffffff',
  },
});
