import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

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
      <Text style={styles.lottieText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottiStyle:{
    height:300
  },
  lottieText:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_16,
    color:COLORS.primaryOrangeHex,
    textAlign:'center'
  }
});
export default EmptyListConatiner;
