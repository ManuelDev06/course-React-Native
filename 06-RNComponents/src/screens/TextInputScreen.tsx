import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, View, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

const TextInputScreen = () => {
    
    const {theme: {colors}} = useContext(ThemeContext)

    const {form,isSuscribed,onChange} = useForm({
        name: '',
        email:'',
        phone:'',
        isSuscribed:false
    });

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ?"padding" :"height"}
    >
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.globalMargin}>
                    <HeaderTitle title='TextInputs'/>

                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.border
                        }}
                        placeholderTextColor={colors.text}
                        placeholder="Ingrese su nombre"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value,'name')}
                    />
                    
                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.border
                        }}
                        placeholderTextColor={colors.text}
                        placeholder="Ingrese su email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value,'email')}
                        keyboardType='email-address'
                        keyboardAppearance='dark'
                    />

                    <Text style={{color: colors.text}}>Suscribirme</Text>
                    <CustomSwitch
                        isOn={isSuscribed}
                        onChange={(value) => onChange(value,'isSuscribed')}
                    />

                    <HeaderTitle
                        title={JSON.stringify(form,null,3)}
                    />
                    

                    <HeaderTitle
                        title={JSON.stringify(form,null,3)}
                    />

                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.border
                        }}
                        placeholderTextColor={colors.text}
                        placeholder="Ingrese su télefono"
                        onChangeText={(value) => onChange(value,'phone')}
                        keyboardType="phone-pad"
                    />
                    <View style={{height: 100}}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>   
    </KeyboardAvoidingView>
  )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    }
});

export default TextInputScreen