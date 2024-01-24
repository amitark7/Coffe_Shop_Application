import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ImageBackgroundInfoProp{
  EnableBackHandler:boolean;
  imageLink:ImageProps;
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
  imageLink,
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
      <Text  style={{color:'white'}}>ImageBackgroundInfo</Text>
    </View>
  )
}

export default ImageBackgroundInfo

const styles = StyleSheet.create({})