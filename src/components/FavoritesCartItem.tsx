import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface FavoritesCartItemProp{
  id:string;
  name:string;
  type:string;
  average_rating:string
}

const FavoritesCartItem = () => {
  return (
    <View>
      <Text>FavoritesCartItem</Text>
    </View>
  )
}

export default FavoritesCartItem

const styles = StyleSheet.create({})