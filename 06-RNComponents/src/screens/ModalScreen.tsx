import React from 'react'
import { View, Button, Modal, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';

const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Modal Screen'/>

        <Button
          title='Abrir modal'
          onPress={() => setIsVisible(true)}
        />

        <Modal
          animationType='fade'
          visible={isVisible}
          transparent={true}
        >
          
          <View
            style={{
              flex:1,
              // height:100,
              // width:100,
              backgroundColor: 'rgba(0,0,0,0.3)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width:200,
                height:200,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                  width: 0,
                  height: 10
                },
                shadowOpacity: 0.25,
                elevation: 10,
                borderRadius: 5
              }}
            >
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
              <Text style={{fontSize: 16, fontWeight: '200', marginBottom: 20}}> Cuerpo del modal</Text>
              <Button
                title='Cerrar'
                onPress={() => setIsVisible(false)}
              />
            </View>
          </View>
        </Modal>
    </View>
  )
}

export default ModalScreen