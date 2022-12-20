import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext)

  return (
    <View>
        <HeaderTitle title='Theme'/>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                    justifyContent: 'center'
                }}
                activeOpacity={0.8}
                onPress={setLightTheme}
            >
                <Text style={{
                    color:'white',
                    textAlign: 'center',
                    fontSize: 22
                }} >
                    Light
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                    justifyContent: 'center'
                }}
                activeOpacity={0.8}
                onPress={setDarkTheme}
            >
                <Text style={{
                    color:'white',
                    textAlign: 'center',
                    fontSize: 22
                }} >
                    Dark
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ChangeThemeScreen