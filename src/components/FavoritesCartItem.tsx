import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface FavoritesCartItemProp {
  id: string;
  name: string;
  rosted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  type: string;
  average_rating: number;
  description: string;
  favourite: boolean;
  rating_count: string;
  ingredients: string;
  ToogleFavoriteItem: any;
}

const FavoritesCartItem: React.FC<FavoritesCartItemProp> = ({
  id,
  name,
  rosted,
  imagelink_square,
  special_ingredient,
  type,
  average_rating,
  description,
  favourite,
  rating_count,
  ingredients,
  ToogleFavoriteItem,
}) => {
  return (
    <View>
      <Text>FavoritesCartItem</Text>
    </View>
  );
};

export default FavoritesCartItem;

const styles = StyleSheet.create({});
