import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon';
import GradientBGIcon from './GradientBGIcon';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';

interface ImageBackgroundInfoProp{
  EnableBackHandler:boolean;
  imagelink_portrait:ImageProps;
  type:string;
  id: string;
  favorite: boolean;
  name:string;
  special_ingredient:string;
  ingredients: string;
  average_rating:number;
  ratings_count:string;
  roasted:string;
  BackHandler?:any;
  ToggleFavorite:any;
}
const ImageBackgroundInfo:React.FC<ImageBackgroundInfoProp> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favorite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavorite
}) => {
  return (
    <View>
      <ImageBackground source={imagelink_portrait} style={styles.ImageBackground}>
        {
          EnableBackHandler?(
            <View style={styles.ImageHeaderWithBack}>
              <TouchableOpacity onPress={BackHandler}>
                <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <GradientBGIcon name='like' color={favorite?COLORS.primaryRedHex:COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
              </TouchableOpacity>
            </View>
          ):(
            <View style={styles.ImageHeaderWithoutBack}>
              <TouchableOpacity>
                <GradientBGIcon name='like' color={favorite?COLORS.primaryRedHex:COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
              </TouchableOpacity>
            </View>
          )
        }
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  ImageBackground:{
    width:'100%',
    aspectRatio:20/25,
    justifyContent:'space-between'
  },
  ImageHeaderWithoutBack:{
    padding:SPACING.space_30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  ImageHeaderWithBack:{
    padding:SPACING.space_30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
})
export default ImageBackgroundInfo