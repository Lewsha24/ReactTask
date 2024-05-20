import {useEffect, useState} from 'react';

function getValueStorage(key, initialState) {
    const saveValue = JSON.parse(localStorage.getItem(key))

    if(saveValue) {
        return saveValue
    }
    if (initialState instanceof Function) {
        return initialState;
    }else {1
        console.log("Вы не передали второе значение в локальный хук : use LocalStoreage(vale, initialState)")
        return initialState;
    }

}


export function useLocalStorageTest(key, initialState) {

    const [value, setValue] = useState(() => {
        return getValueStorage(key, initialState)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value])

    return [value, setValue]
}
