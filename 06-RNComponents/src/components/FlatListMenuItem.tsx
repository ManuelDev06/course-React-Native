import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation, useTheme } from '@react-navigation/native';
import { RootStackParams } from '../navigator/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

const FlatListMenuItem = ( {menuItem}:Props) => {

    const navigation = useNavigation<HomeScreenNavigationProp>();
    const {theme} = useContext(ThemeContext)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as never)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={theme.colors.primary}
                    size={23}
                />
                <Text
                    style={{...styles.itemText, color: theme.colors.text}}
                >
                    {menuItem.name}
                </Text>

                <View style={{flex:1}}/>

                <Icon
                    name='chevron-forward-outline'
                    color={theme.colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    itemText:{
        marginLeft: 5,
        fontSize: 18
    }
});

export default FlatListMenuItem