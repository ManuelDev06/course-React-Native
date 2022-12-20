import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductsContext';
import { FlatList } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { PorductStackParams } from '../navigator/ProductsNavigator';

interface Props extends StackScreenProps<PorductStackParams, 'ProductsScreen'>{}

const ProductsScreen = ({navigation}: Props) => {
  
  const [isRefreshing, setIsRefreshing] = useState(false)
  const {products, loadProducts} = useContext(ProductContext)
  
  const loadProductsFromBackend = async() => {
    setIsRefreshing(true)
    await loadProducts()
    setIsRefreshing(false)
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginRight: 10}}
          onPress={() => navigation.navigate('ProductScreen',{})}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      )
    })
  },[])

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
        <FlatList
          data={products}
          keyExtractor={(p) => p._id}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={
                () => navigation.navigate('ProductScreen',{
                  id: item._id,
                  name: item.nombre
                })
              }
            >
              <Text style={styles.productName}>{item.nombre}</Text>
            </TouchableOpacity>
          )}

          ItemSeparatorComponent={() => (
            <View style={styles.itemSeparator}/>
          )}

          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={loadProductsFromBackend}
            />
          }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    productName: {
      fontSize: 20
    },
    itemSeparator: {
      borderBottomWidth: 2,
      marginVertical: 5,
      borderBottomColor: 'rgba(0,0,0,0.1)'
    }
});

export default ProductsScreen