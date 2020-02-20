import React, {useState} from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import A from '../../assets/alphabet/a.svg';

function Card({item}) {
  return (
    <View style={styles.card}>
      <A width={100} height={100} />
    </View>
  );
}

export default function CardList(props) {
  const [letters, setLetters] = useState(
    'a b c d e f g h i k j l m n o p q r s t u v w x y z'.split(' '),
  );

  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={item => Card(item)}
        keyExtractor={item => item}
        numColumns={2}
      />
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
