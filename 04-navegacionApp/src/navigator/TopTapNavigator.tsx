import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox,Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AlbumsScreen from '../screens/AlbumsScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { colores } from '../theme/appTheme';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () =>  {

  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
          backgroundColor: colores.primary
        },
        tabBarStyle:{
          shadowColor: 'transparent',
          elevation: 0
        },
        tabBarIcon: ({color,focused}) => {
          let iconName: string = '';

          switch(route.name){
            case 'Chat' :
              iconName = 'Ch'
              break;
            case 'Contacts' :
              iconName = 'Co'
              break;
            case 'Albums' :
              iconName = 'Al'
              break;
            
          }

          return <Text style={{color: color}}>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name='Chat' component={ChatScreen}/>
      <Tab.Screen name='Contacts' component={ContactsScreen}/>
      <Tab.Screen name='Albums' component={AlbumsScreen}/>
    </Tab.Navigator>
  );
}