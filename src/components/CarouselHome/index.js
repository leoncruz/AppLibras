import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CarouselHome extends React.Component {
  constructor(props) {
    super();
    this.state = {
      letters: ['a', 'b', 'c', 'd', 'e'],
      activeSlide: 0,
    };
    this.props = props;
    this._carousel = {};
  }

  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>Título da atividade {item}</Text>
        <View style={styles.slide}>
          <Text style={{textAlign: 'center'}}>Letra {item}</Text>
        </View>
      </View>
    );
  };

  get pagination() {
    const {letters, activeSlide} = this.state;

    return (
      <Pagination
        dotsLength={letters.length}
        activeDotIndex={activeSlide}
        dotContainerStyle={{
          bottom: wp(5),
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#007AED',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={c => (this._carousel = c)}
          data={this.state.letters}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={wp('100%')}
          itemWidth={wp(70)}
          loop
          onSnapToItem={index => this.setState({activeSlide: index})}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    elevation: 2,
    borderWidth: 0.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },

  title: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: hp(2),
  },
});
