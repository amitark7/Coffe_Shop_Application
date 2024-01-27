import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../components/HeaderBar';
import EmptyListConatiner from '../components/EmptyListConatiner';
import {COLORS, SPACING} from '../theme/theme';
import PaymentFooter from '../components/PaymentFooter';
import FavoritesCartItem from '../components/FavoritesCartItem';

const FavoritesScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const TabBarBottomHeight = useBottomTabBarHeight();
  const addToFavorteList = useStore((state: any) => state.addToFavorteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
    console.log(favorite, type, id);

    favorite ? deleteFromFavoriteList(type, id) : addToFavorteList(type, id);
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollInnerView, {marginBottom: TabBarBottomHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favorites" />
            {FavoritesList.length == 0 ? (
              <EmptyListConatiner title="No Favorites" />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push('Details', {
                        id: data.id,
                        index: data.index,
                        type: data.type,
                      })
                    }
                    key={data.id}>
                    <FavoritesCartItem
                      id={data.id}
                      name={data.name}
                      rosted={data.rosted}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      average_rating={data.average_rating}
                      description={data.description}
                      favourite={data.favourite}
                      rating_count={data.ratings_count}
                      ingredients={data.ingredients}
                      ToogleFavoriteItem={ToggleFavorite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
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
  },
  ScrollInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
export default FavoritesScreen;
