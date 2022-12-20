import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateralBasica = ()  => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="Settings"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={styles.avatarContainer}
      >
        <Image
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('Tabs')}
          >
            <Text>
                  <Icon name={'airplane-outline'} size={30} color={'black'} />
                </Text>
            <Text style={styles.menuTexto}>Tabs</Text>
          </TouchableOpacity>
          <TouchableOpacity
             style={styles.menuBoton}
             onPress={() => navigation.navigate('Settings')}
          >
            <Text>
                  <Icon name={'alarm-outline'} size={30} color={'black'} />
                </Text>
            <Text style={styles.menuTexto}>Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}