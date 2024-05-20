import {useCallback, useEffect, useRef} from "react";

export function useTimeout (callback, delay, ) {
    //Ссылка на объект  в этой переменной
    const callbackRef = useRef(callback);
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback;

    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
        console.log('set')
    }, [delay])

    const clear = useCallback(() => {
        if(timeoutRef.current) {
            clearInterval(timeoutRef.current)
            console.log('clear')
        }
    })

     useEffect(() => {
         set()

         return clear;
     }, [delay,set])

    const reset = useCallback(() => {
        clear()
        set()
    },[clear, set, clear])


    return {
        reset,
        clear
    }
}