import Geolocation from "@react-native-community/geolocation"
import { useEffect, useRef, useState } from 'react';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false)
    const [routelines, setRoutelines] = useState<Location[]>([])

    const [initialPostion, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    })

    const [userLocation, setUserLocation] = useState<Location>({
        longitude: 0,
        latitude: 0
    })
  
    const watchId = useRef<number>()
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false
        }
    },[])

    useEffect(() => {

        getCurrentLocation().then(location => {
            if(!isMounted.current) return;
            setInitialPosition(location);
            setUserLocation(location);
            setRoutelines([...routelines, location])
            setHasLocation(true)
        })

    },[])

    const getCurrentLocation = ():Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(({coords}) => {
                
            resolve({
                latitude: coords.latitude,
                longitude: coords.longitude
            })
    
                setHasLocation(true)
                } ,
                (err) => reject({err}),
                {
                    enableHighAccuracy: true
                }
            )
        })
    }

    const followUserLocation = () => {
          watchId.current =  Geolocation.watchPosition(({coords}) => {

                if(!isMounted.current) return;

                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }

                setUserLocation(location)
                setRoutelines(route => [...route, location])
           
            },(err) => console.log(err), {enableHighAccuracy: true, distanceFilter: 5})
        }

    const stopFollowUserLocation = () => {
        if(watchId.current)
            Geolocation.clearWatch(watchId.current)
    }

    return {
        hasLocation,
        initialPostion,
        userLocation,
        routelines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation
    }
}

