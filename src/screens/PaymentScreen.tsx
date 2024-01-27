import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = () => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.HeaderConatiner}>
          <TouchableOpacity>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderTxt}>Payment</Text>
          <View style={styles.EmptyView}/>
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
  HeaderConatiner: {
    paddingHorizontal:SPACING.space_24,
    paddingVertical:SPACING.space_15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  HeaderTxt:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_20,
    color:COLORS.primaryWhiteHex
  },
  EmptyView:{
    height:SPACING.space_36,
    width:SPACING.space_36
  }
});
export default PaymentScreen;
