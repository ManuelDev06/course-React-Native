import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string
}

const TouchableIcon = ({iconName}:Props) => {

    const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity
        onPress={() => changeFavoriteIcon(iconName)}
    >
        <Text>
            <Icon name={iconName} size={30} color={colores.primary} />;
        </Text>
    </TouchableOpacity>
  )
}

export default TouchableIcon