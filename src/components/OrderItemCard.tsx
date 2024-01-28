import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface OrderItemCardProp {
  type: string;
  ItemPrice: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  prices: any;
  name: string;
}
const OrderItemCard: React.FC<OrderItemCardProp> = ({
  type,
  ItemPrice,
  imagelink_square,
  special_ingredient,
  prices,
  name,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.LinearGradeintStyle}>
      <View style={styles.CardInfoContainer}>
        <View style={styles.CardInfoImageContainer}>
          <Image source={imagelink_square} style={styles.image} />
          <View>
            <Text style={styles.CardTitle}>{name}</Text>
            <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.CardCurrency}>
            $<Text style={styles.CardPrice}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>
      {prices.map((data: any, index: any) => (
        <View key={index.toString()} style={styles.CardTableRow}>
          <View style={styles.CardTableRow}>
            <View style={styles.SizeLeftBox}>
              <Text style={[styles.SizeTxt,{fontSize:type=='Bean'?FONTSIZE.size_12:FONTSIZE.size_16}]}>{data.size}</Text>
            </View>
            <View style={styles.PriceBoxRight}>
              <Text style={styles.PriceCurrency}>
                {data.currency}
                <Text style={styles.PriceTxt}>{data.price}</Text>
              </Text>
            </View>
          </View>
          <View style={styles.CardTableRow}>
            <Text style={styles.CardQuantityPriceTxt}>
              X <Text style={styles.PriceTxt}>{data.quantity}</Text>
            </Text>
            <Text style={styles.CardQuantityPriceTxt}>
                $ {(data.quantity * data.price).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  LinearGradeintStyle: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardInfoImageContainer: {
    flexDirection: 'row',
    gap: SPACING.space_4,
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: BORDERRADIUS.radius_15,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CardSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CardCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardTableRow:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  SizeLeftBox:{
    backgroundColor:COLORS.primaryBlackHex,
    height:45,
    flex:1,
    borderTopLeftRadius:BORDERRADIUS.radius_10,
    borderBottomLeftRadius:BORDERRADIUS.radius_10,
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:COLORS.primaryGreyHex
  },
  SizeTxt:{
    fontFamily:FONTFAMILY.poppins_medium,
    color:COLORS.secondaryLightGreyHex,
  },
  PriceBoxRight:{
    backgroundColor:COLORS.primaryBlackHex,
    height:45,
    flex:1,
    borderTopRightRadius:BORDERRADIUS.radius_10,
    borderBottomRightRadius:BORDERRADIUS.radius_10,
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth:1,
    borderLeftColor:COLORS.primaryGreyHex
  },
  PriceCurrency:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryOrangeHex
  },
  PriceTxt:{
    color:COLORS.primaryWhiteHex
  },
  CardQuantityPriceTxt:{
    flex:1,
    textAlign:'center',
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryOrangeHex
  }
});
