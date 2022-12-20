import React, { useEffect, useState } from 'react'

const useDebouncedValue = (input: string = '', time: number = 500) => {
    
    const [debounceValue, setDebounceValue] = useState(input)
    

    useEffect(() => {
      
      const timeout = setTimeout(() => {
        setDebounceValue(input)
      },time)
    
      return () => {
        clearTimeout(timeout)
      }
    }, [input])
    

    return {
      debounceValue
    }
}

export default useDebouncedValue