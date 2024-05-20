import {useState} from "react";

export function useArray (defaultValue) {
    const [array, setArray] = useState(defaultValue)

    function push(element) {
        setArray(a => [...a, element])
    }

    return {
        array,
        push
    }
}