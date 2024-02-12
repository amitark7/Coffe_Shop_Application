import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailsScreen = ({navigation, route}: any) => {
  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeansList,
  )[route.params.index];

  const [price, setPrice] = useState(ItemOfIndex.prices[0]);
  const [fulldesc, setFulldesc] = useState(false);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToFavorteList = useStore((state: any) => state.addToFavorteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const BackHandler = () => {
    navigation.pop();
  };
  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {

    favorite ? deleteFromFavoriteList(type, id) : addToFavorteList(type, id);
  };
  const addToCartHandler = ({
    id,
    index,
    name,
    type,
    price,
    rosted,
    imagelink_square,
    special_ingredient,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      type,
      rosted,
      imagelink_square,
      special_ingredient,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Cart')
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favorite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHandler}
          ToggleFavorite={ToggleFavorite}
        />
        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fulldesc ? (
            <TouchableWithoutFeedback onPress={() => setFulldesc(!fulldesc)}>
              <Text style={styles.descriptionText}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => setFulldesc(!fulldesc)}>
              <Text style={styles.descriptionText} numberOfLines={3}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.SizeOuterContainer}>
            {ItemOfIndex.prices.map((data: any) => (
              <TouchableOpacity
                onPress={() => setPrice(data)}
                style={[
                  styles.SizeBox,
                  {
                    borderColor:
                      data.size == price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}
                key={data.size}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        ItemOfIndex.type == 'Bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter
          price={price}
          buttonPressHandler={() => {
            addToCartHandler({
              id:ItemOfIndex.id,
              index:ItemOfIndex.index,
              type:ItemOfIndex.type,
              name:ItemOfIndex.name,
              rosted:ItemOfIndex.roasted,
              imagelink_square:ItemOfIndex.imagelink_square,
              special_ingredient:ItemOfIndex.special_ingredient,
              price:price
            })
          }}
          buttonTitle="Add to Cart"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  FooterInfoArea: {
    padding: SPACING.space_20,
  },
  InfoTitle: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  descriptionText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
    letterSpacing: 0.5,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
export default DetailsScreen;
