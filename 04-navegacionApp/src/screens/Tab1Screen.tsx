import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

  const {top} = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top
    }}>
        <Text style={styles.title}> Icons </Text>
        <Text>
          <TouchableIcon iconName="airplane-outline" />;
        </Text>
    </View>
  )
}

export default Tab1Screen