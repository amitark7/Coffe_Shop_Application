import {ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListConatiner from '../components/EmptyListConatiner';
import PaymentFooter from '../components/PaymentFooter';

const CartScreen = ({navigation,route}:any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const increamentCartListQuantity = useStore(
    (state: any) => state.increamentCartListQuantity,
  );
  const decrementCartListQuantity = useStore(
    (state: any) => state.decrementCartListQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const TabBarHeight = useBottomTabBarHeight();

  const ButtonPressHandler=()=>{
    navigation.push('Payment')
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.ScrollInnerView, {marginBottom: TabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length == 0 ? (
              <EmptyListConatiner title="Cart is Empty" />
            ) : (
              <View style={styles.ListItemContainer}>
                {
                  CartList.map((data:any)=>(
                    <TouchableOpacity onPress={()=>{}} key={data.id}>

                    </TouchableOpacity>
                  ))
                }
              </View>
            )}
          </View>
          {CartList.length!=0?<PaymentFooter buttonPressHandler={ButtonPressHandler} buttonTitle='Pay' price={{price:CartPrice,currency:'$'}}/>:<></>}
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
    flex:1
  },
  ListItemContainer:{
    paddingHorizontal:SPACING.space_20,
    gap:SPACING.space_20
  }
});
export default CartScreen;
