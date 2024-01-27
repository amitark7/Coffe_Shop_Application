import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../theme/theme'

const PaymentList=[
  {
    name:'Wallet',
    icon:'icon',
    isIcon:true
  },{
    name:'Google Pay',
    icon:require('../assets/app_images/gpay.png'),
    isIcon:false
  },{
    name:'Apple Pay',
    icon:require('../assets/app_images/applepay.png'),
    isIcon:false
  },{
    name:'Amazon Pay',
    icon:require('../assets/app_images/amazonpay.png'),
    isIcon:false
  }
]

const PaymentScreen = () => {
  const[paymentMode,setPaymentMode]=useState('Credit Card')

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
    </View>
  )
}


const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex
  }
})
export default PaymentScreen