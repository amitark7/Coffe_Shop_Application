import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from './GradientBGIcon'
import ProfilePic from './ProfilePic'


interface headerBarProps{
  title?:string
}
const HeaderBar:React.FC<headerBarProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
      <Text style={styles.headerTxt}>{title}</Text>
      <ProfilePic/>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  headerContainer:{
    padding:SPACING.space_30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between"
  },
  headerTxt:{
    fontFamily:FONTFAMILY.poppins_bold,
    fontSize:FONTSIZE.size_20,
    color:COLORS.primaryWhiteHex
  }
})