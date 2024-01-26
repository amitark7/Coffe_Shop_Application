import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CartItemProp {
  id: string;
  title: string;
  rosted: string;
  imagelink_square: ImageProps;
  prices: any;
  special_ingredient: string;
  type: string;
  incrementCartItemQuantityHandler:any;
  decrementCartItemQuantityHandler: any;
}

const CartItem: React.FC<CartItemProp> = ({
  id,
  title,
  rosted,
  imagelink_square,
  prices,
  special_ingredient,
  type,
  incrementCartItemQuantityHandler,
  decrementCartItemQuantityHandler,
}) => {
  return (
    <View>
      <Text>CartItem</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
