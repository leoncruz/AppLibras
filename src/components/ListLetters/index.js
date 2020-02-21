import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import images from '../../util/pathToImages';

export default function ListLetters() {
  function Card({item}) {
    return (
      <View style={styles.card}>
        <Image
          source={images[item.toLowerCase()]}
          style={styles.image}
          resizeMode="contain"
        />
        <Text>{item}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={Object.keys(images)}
      renderItem={item => Card(item)}
      keyExtractor={item => item}
      numColumns={3}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp(30),
    height: wp(30),
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  image: {
    width: wp(20),
    height: wp(20),
  },

  contentContainerStyle: {
    alignSelf: 'center',
  },
});
