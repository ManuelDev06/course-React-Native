import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import ProductsScreen from '../screens/ProductsScreen';


export type PorductStackParams = {
    ProductsScreen: undefined,
    ProductScreen: {id?: string, name?: string}
}

const Stack = createStackNavigator<PorductStackParams>();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: 'white'
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
    >
        <Stack.Screen
            name='ProductsScreen'
            component={ProductsScreen}
            options={{title: 'Productos'}}
        />
        <Stack.Screen
            name='ProductScreen'
            component={ProductScreen}
            options={{title: 'Producto'}}
        />
    </Stack.Navigator>
  )
}

export default ProductsNavigator