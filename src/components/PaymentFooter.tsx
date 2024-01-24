import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

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
    <View style={styles.PriceFooter}>
      <View style={styles.PriceFooterContainer}>
        <Text style={styles.priceTitle }>Price</Text>
        <Text style={styles.priceText}>
          {price.currency} <Text style={styles.Price}>{price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.PayButon} onPress={()=>buttonPressHandler()}>
        <Text style={styles.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  PriceFooter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:SPACING.space_20,
    padding:SPACING.space_20
  },
  PriceFooterContainer:{
      alignItems:'center',
      width:100
  },
  priceTitle:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_14,
    color:COLORS.secondaryLightGreyHex
  },
  priceText:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_24,
    color:COLORS.primaryOrangeHex
  },
  Price:{
    color:COLORS.primaryWhiteHex
  },
  PayButon:{
    backgroundColor:COLORS.primaryOrangeHex,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:SPACING.space_36*2,
    borderRadius:BORDERRADIUS.radius_20
  },
  ButtonText:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryWhiteHex
  }
});
export default PaymentFooter;
