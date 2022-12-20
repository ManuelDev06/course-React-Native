import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
          ?<TabsIOS/>
          :<TabAndroid/>
}


const ButtomTabAndroid = createMaterialBottomTabNavigator();

const  TabAndroid = () =>  {
  return (
    <ButtomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color,focused}) => {
          let iconName: string = '';

          switch(route.name){
            case 'Tab1Screen' :
              iconName = 'airplane-outline'
              break;
            case 'Tab2Screen' :
              iconName = 'alarm-outline'
              break;
            case 'StackNavigator' :
              iconName = 'aperture-outline'
              break;

          }
          
          return <Text>
                  <Icon name={iconName} size={30} color={'white'} />;
                </Text>
        }
      })}
    >
      <ButtomTabAndroid.Screen name="Tab1Screen" options={{title: 'Task1'}} component={Tab1Screen} />
      <ButtomTabAndroid.Screen name="Tab2Screen" options={{title: 'Task2'}}  component={TopTapNavigator} />
      <ButtomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={Tab3Screen} />
    </ButtomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle:{
          fontSize: 15
        },
        tabBarIcon: ({color,focused,size}) => {
          let iconName: string = '';

          switch(route.name){
            case 'Tab1Screen' :
              iconName = 'airplane-outline'
              break;
            case 'Tab2Screen' :
              iconName = 'alarm-outline'
              break;
            case 'StackNavigator' :
              iconName = 'aperture-outline'
              break;

          }
          return <Text>
                  <Icon name={iconName} size={30} color={colores.primary} />;
                </Text>
        }
      })}
      
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Task1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Task2'}}  component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={Tab3Screen} />
    </BottomTabIOS.Navigator>
  );
}