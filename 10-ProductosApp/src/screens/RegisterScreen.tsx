import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { KeyboardAvoidingView, Text, View, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any>{}

const RegisterScreen = ({navigation}: Props) => {

  const {email, password, name, onChange} = useForm({
    email: '',
    password: '',
    name: ''
  })

  const {signUp} = useContext(AuthContext);

  const onRegister = () => {
      signUp({correo:email,password,nombre:name, rol: 'USER_ROLE'});
      Keyboard.dismiss();
  }
  return (
    <>
        <KeyboardAvoidingView
            style={{flex: 1, backgroundColor: '#5856D6'}}
            behavior={(Platform.OS === 'ios') ?'padding' :'height'}
        >
            <View style={loginStyles.formContainer}>
                <WhiteLogo/>


                <Text style={loginStyles.title} >Registro</Text>
                
                <Text style={loginStyles.label} >Nombre:</Text>
                <TextInput
                    placeholder='Ingrese su nombre'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType='email-address'
                    underlineColorAndroid="white"
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldsIOS
                    ]}
                    selectionColor='white'

                    onChangeText={ value => onChange(value,'name')}
                    value={name}
                    onSubmitEditing={onRegister}

                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={loginStyles.label} >Email:</Text>
                <TextInput
                    placeholder='Ingrese su email'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType='email-address'
                    underlineColorAndroid="white"
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldsIOS
                    ]}
                    selectionColor='white'

                    onChangeText={ value => onChange(value,'email')}
                    value={email}
                    onSubmitEditing={onRegister}

                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <Text style={loginStyles.label} >Contraseña: </Text>
                <TextInput
                    placeholder='*******'
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType='email-address'
                    underlineColorAndroid="white"
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldsIOS
                    ]}
                    selectionColor='white'

                    onChangeText={ value => onChange(value,'password')}
                    value={password}
                    onSubmitEditing={onRegister}

                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <View style={loginStyles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}
                        onPress={onRegister}
                    >
                        <Text style={loginStyles.buttonText} >Crear cuenta</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={loginStyles.buttonReturn}
                    >
                        <Text style={loginStyles.buttonText} >Login</Text>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </>
  )
}

export default RegisterScreen