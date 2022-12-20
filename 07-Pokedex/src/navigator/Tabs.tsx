import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigator from './Navigator';
import { Platform } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Tab2Component } from './Tab2';

const Tab = createBottomTabNavigator(); 

export const Tabs = () =>  {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#5856D5',
            tabBarLabelStyle: {
                marginBottom: (Platform.OS === 'ios') ? 0 : 10
            },
            tabBarStyle: { 
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.82)', 
                paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10, 
                borderWidth: 0,
                elevation: 0,
                height: ( Platform.OS === 'ios') ? 80 : 60,
            }
        }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Navigator} 
        options={{
            tabBarLabel: "Listado",
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={25}
                    name="list-outline"
                />
            )
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={Tab2Component} 
        options={{
            tabBarLabel: "Busqueda",
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={25}
                    name="search-outline"
                />
            )
        }}  
      />
    </Tab.Navigator>
  );
}
