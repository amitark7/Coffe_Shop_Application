import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PriceProp {
  price: string;
  currency: string;
}

interface PaymentFooterProp {
  price: PriceProp;
  buttonPressHandler: any;
  buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProp> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View>
      <Text>PaymentFooter</Text>
    </View>
  );
};

export default PaymentFooter;

const styles = StyleSheet.create({});
