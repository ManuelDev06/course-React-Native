import React, { useContext } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    const {top} = useSafeAreaInsets();
 
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('Hola mundo')
        }, 1500);
    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={10}
                progressBackgroundColor={colors.primary}
                colors={[colors.text]}
                //style={{backgroundColor: '#6856d6'}}
                //tintColor="white"
                //title='Refreshing'

            />
        }
        style={{
            marginTop: refreshing ? top : 0
        }}
    >
        <View>
            <HeaderTitle title='Pull to refresh'/>
            {
                data && <HeaderTitle title={data}/>
            }
        </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen