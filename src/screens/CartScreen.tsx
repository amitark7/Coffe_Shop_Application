import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'

const CartScreen = () => {
  const cartList=useStore((state:any)=>state.CartList)
 
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({})
export default CartScreen