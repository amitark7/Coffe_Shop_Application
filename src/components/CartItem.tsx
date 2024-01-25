import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CartItemProp{
  id:string;
  title: string;
  rosted:string;
  imagelink_square:ImageProps;
  prices:any;
  special_ingredient:string;
  type:string;
  incrementCartItemQuantityHandler:()=>{}
  decrementCartItemQuantityHandler:()=>{}
}

const CartItem = () => {
  return (
    <View>
      <Text>CartItem</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})