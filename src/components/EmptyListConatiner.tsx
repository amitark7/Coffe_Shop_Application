import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface EmptyListConatinerProp {
  title: string;
}

const EmptyListConatiner: React.FC<EmptyListConatinerProp> = ({title}) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
      style={styles.lottiStyle}
      source={require('../lottie/coffecup.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottiStyle:{
    height:100
  }
});
export default EmptyListConatiner;
