import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

interface CartItemProp {
  id: string;
  title: string;
  rosted: string;
  imagelink_square: ImageProps;
  prices: any;
  special_ingredient: string;
  type: string;
  incrementCartItemQuantityHandler: any;
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
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemLinearStyle}>
          <View>
            <Image source={imagelink_square} style={styles.CartItemImage} />
          </View>
        </LinearGradient>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemLinearStyle: {
    flex:1,
    gap:SPACING.space_12,
    padding:SPACING.space_12,
    borderRadius:BORDERRADIUS.radius_25 
  },
  CartItemImage: {
    height:130,
    width:130
  },
});

export default CartItem;
