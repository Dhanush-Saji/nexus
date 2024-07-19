import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
    const [debounceValue, setdebounceValue] = useState(value)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setdebounceValue(value)
        }, delay)
        return () => clearTimeout(timeOut)
    }, [value, delay])
    return debounceValue
}

export default useDebounce