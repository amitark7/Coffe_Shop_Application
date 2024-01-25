import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface EmptyListConatinerProp {
  title: string;
}

const EmptyListConatiner: React.FC<EmptyListConatinerProp> = ({title}) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default EmptyListConatiner;
