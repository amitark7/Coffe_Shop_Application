import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const FavoritesScreen = ({navigation}:any) => {

  const FavoritesList=useStore((state:any)=>state.FavoritesList)
  const TabBarBottomHeight=useBottomTabBarHeight()
  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})