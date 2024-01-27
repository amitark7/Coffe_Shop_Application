import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PaymentMethodProp {
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean;
}

const PaymentMethod:React.FC<PaymentMethodProp> = () => {
  return (
    <View>
      <Text>PaymentMethod</Text>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
