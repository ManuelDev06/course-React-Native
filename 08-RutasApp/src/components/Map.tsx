import React, { useRef, useEffect } from 'react'
import MapView, { MapMarkerProps, Marker, Polyline } from 'react-native-maps'
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';
import { useState } from 'react';




interface Props {
    markers?: MapMarkerProps[];
}

const Map = ({markers}: Props) => {

  const [showPolyLine, setShowPolyline] = useState(true)

  const {hasLocation, initialPostion, userLocation, routelines,getCurrentLocation, followUserLocation, } = useLocation()

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();
    return () => {

    }
  },[])

  useEffect(() => {

    if(!following.current) return

    const {latitude,longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude}
    })

  }, [userLocation])
  

  
  const centerPosition = async() => {
    const {latitude,longitude} = await getCurrentLocation();

    following.current = true

    mapViewRef.current?.animateCamera({
      center:{latitude,longitude}
    })
  }

  if(!hasLocation){
    return <LoadingScreen/>
  }
  

  return (
    <>
        <MapView
          ref={(el) => mapViewRef.current = el!}
          initialRegion={{
            latitude: initialPostion.latitude,
            longitude: initialPostion.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          onTouchStart={() => following.current = false}
          style={{flex:1}}>
            {/* <Marker
                image={require('../assets/custom-marker.png')}
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title={"Esto es un título"}
                description={"Esto es una descripcion del marcador"}
            /> */}
            {showPolyLine &&
              <Polyline
                coordinates={routelines}
                strokeColor="black"
                strokeWidth={3}

              />
            }
          </MapView>
        
          <Fab
                iconName='compass-outline'
                onPress={centerPosition}
                style={{
                    position:'absolute',
                    bottom: 20,
                    right: 20
                }}
            />
          <Fab
                iconName='brush-outline'
                onPress={() => setShowPolyline(value => !value) }
                style={{
                    position:'absolute',
                    bottom: 80,
                    right: 20
                }}
            />
    </>
  )
}

export default Map