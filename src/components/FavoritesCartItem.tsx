import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

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
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[
          COLORS.primaryGreyHex,
          COLORS.primaryBlackHex,
        ]}
        style={styles.LinearGradientContainer}
        >
          <Text style={styles.DescriptionTitle}>Description</Text>
          <Text style={styles.DescriptionTxt}>{description}</Text>
        </LinearGradient>
    </View>
  );
};

export default FavoritesCartItem;

const styles = StyleSheet.create({
  LinearGradientContainer:{
    gap:SPACING.space_10,
    padding:SPACING.space_20
  },
  DescriptionTitle:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_16,
    color:COLORS.secondaryLightGreyHex
  },
  DescriptionTxt:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex
  },
  CardContainer:{
    borderRadius:BORDERRADIUS.radius_25,
    overflow:'hidden'
  }
});
