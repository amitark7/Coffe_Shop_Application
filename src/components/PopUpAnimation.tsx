import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';

interface PopUpAnimationProp{
  style:any;
  source:any;
}

const PopUpAnimation:React.FC<PopUpAnimationProp> = () => {
  return (
    <View style={styles.lottieAnimationContainer}>
      
    </View>
  )
}

export default PopUpAnimation

const styles = StyleSheet.create({
  lottieAnimationContainer:{
    flex:1,
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:1000,
    backgroundColor:COLORS.primaryBlackRGBA,
    justifyContent:'center'
  }
})