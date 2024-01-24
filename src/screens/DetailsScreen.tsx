import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'

const DetailsScreen = ({navigation,route}:any) => {
  const ItemofIndex=useStore((state:any)=>route.params.type=='Coffee'?state.CoffeeList:state.BeansList)[route.params.index];
  console.log(ItemofIndex);
  
  
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})