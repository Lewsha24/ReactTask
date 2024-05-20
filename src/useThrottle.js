import {useEffect, useRef, useState} from "react";

export function useThrottle (value, interval = 500) {
    const [throttledValue, setThrottledValue] = useState(value)
    const lastExecuted = useRef(Date.now())

    useEffect(() => {
        if (Date.now() < lastExecuted.current + interval) {
            const timerId = setTimeout(() => {
                lastExecuted.current = Date.now();
                setThrottledValue(value)
            }, interval)
            return () => {
                clearInterval(timerId)
            }
        } else {
            lastExecuted.current = Date.now()
            setThrottledValue(value)
        }
    },[value, interval])

    return throttledValue
}