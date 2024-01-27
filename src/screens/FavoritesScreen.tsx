import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const FavoritesScreen = ({navigation}:any) => {

  const FavoritesList=useStore((state:any)=>state.FavoritesList)
  const TabBarBottomHeight=useBottomTabBarHeight()
  const addToFavorteList = useStore((state: any) => state.addToFavorteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
    console.log(favorite, type, id);

    favorite ? deleteFromFavoriteList(type, id) : addToFavorteList(type, id);
  };
  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})