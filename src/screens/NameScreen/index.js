import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '../../compoents';

export default function NameScreen() {
  return (
    <View style={styles.background}>
      <Text style={{position: 'absolute', top: hp(5), fontSize: hp(4)}}>
        AppLibras
      </Text>
      <View style={{width: wp(70)}}>
        <TextField
          label="Qual é o seu nome?"
          keyboardType="default"
          textColor="#505050"
          tintColor="#007AED"
          fontSize={hp(3)}
          lineWidth={2}
        />
      </View>
      <Button title="Concluído" top={hp(23)} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
