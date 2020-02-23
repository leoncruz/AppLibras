import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from '../../components';

export default function NameScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function saveNameOnStorage() {
    await AsyncStorage.setItem('userName', userName);
    navigation.navigate('NameLibras');
  }

  function validateUserName() {
    let userNameArray = userName.split(' ');

    if (!userName) {
      setError(true);
      setErrorMessage('O nome não pode ser vazio');

      setTimeout(() => {
        setError(false);
      }, 2000);
    } else if (userNameArray.length >= 2) {
      setError(true);
      setErrorMessage('Insira somente o primeiro nome');

      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      saveNameOnStorage();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppLibras</Text>
      <View style={{width: wp(70)}}>
        <TextField
          label="Qual é o seu nome?"
          keyboardType="default"
          textColor="#505050"
          tintColor="#007AED"
          fontSize={20}
          lineWidth={2}
          onChangeText={nameInput => setUserName(nameInput)}
        />
      </View>
      {error ? (
        <Text style={styles.errorColor}> {errorMessage} </Text>
      ) : (
        <Text />
      )}
      <Button
        title="Concluído"
        top={hp(23)}
        onPress={() => validateUserName()}
      />
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

  title: {
    position: 'absolute',
    top: hp(2),
    fontSize: hp(4),
  },

  errorColor: {
    color: '#EC5656',
  },
});
