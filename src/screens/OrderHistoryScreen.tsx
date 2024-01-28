import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {COLORS, SPACING} from '../theme/theme';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../components/HeaderBar';
import EmptyListConatiner from '../components/EmptyListConatiner';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';

const OrderHistoryScreen = ({navigation}: any) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);

  const tabBarHeight = useBottomTabBarHeight();

  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {
      index,
      id,
      type,
    });
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={styles.lottieAnimation}
          source={require('../lottie/successful.json')}
        />
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.ScrollInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <EmptyListConatiner title="No Order History" />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={() => {}}
                    OrderDate={data.OrderDate}
                    CartListPrice={data.CartListPrice}
                    CartList={data.CartList}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  lottieAnimation: {
    height: 250,
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
    gap: SPACING.space_30,
  },
});
