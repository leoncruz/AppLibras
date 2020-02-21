import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class CarouselLetters extends React.Component {
  constructor(props) {
    super();
    this.state = {
      letters: ['a', 'b', 'c', 'd', 'e'],
    };
    this.props = props;
    this._carousel = {};
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item}</Text>
        <Text style={styles.title}>Letra {item}</Text>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        ref={c => (this._carousel = c)}
        data={this.state.letters}
        renderItem={this._renderItem.bind(this)}
        sliderWidth={wp(70)}
        itemWidth={wp(60)}
        contentContainerCustomStyle={styles.contentContainerStyle}
        inactiveSlideOpacity={0.0}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderWidth: 0.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },

  title: {
    fontSize: 22,
    alignSelf: 'center',
  },

  contentContainerStyle: {
    height: wp(70),
    alignSelf: 'center',
  },
});
