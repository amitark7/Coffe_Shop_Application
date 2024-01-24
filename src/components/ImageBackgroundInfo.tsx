import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import GradientBGIcon from './GradientBGIcon';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

interface ImageBackgroundInfoProp {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favorite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavorite: any;
}
const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProp> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favorite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavorite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ImageBackground}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderWithBack}>
            <TouchableOpacity onPress={BackHandler}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavorite(favorite, type, id);
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavorite(favorite, type, id);
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerConatiner}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubTitle}>{special_ingredient}</Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertiesTextFirst,
                      {
                        margin:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'location' : 'drop'}
                    size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertiesTextFirst}>{ingredients}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageHeaderWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageInfoOuterContainer: {
    paddingVertical:SPACING.space_24,
    paddingHorizontal:SPACING.space_30,
    backgroundColor:COLORS.primaryBlackRGBA,
    borderTopLeftRadius:BORDERRADIUS.radius_20,
    borderTopRightRadius:BORDERRADIUS.radius_20
  },
  ImageInfoInnerConatiner: {
    justifyContent:'space-between',
    gap:SPACING.space_15
  },
  InfoContainerRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  ItemTitleText: {
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_24,
    color:COLORS.primaryWhiteHex
  },
  ItemSubTitle: {
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_12,
    color:COLORS.primaryWhiteHex
  },
  ItemPropertiesContainer: {
    flexDirection:'row',
    alignItems: 'center',
    gap:SPACING.space_20
  },
  ProperFirst: {},
  PropertiesTextFirst: {},
});
export default ImageBackgroundInfo;
