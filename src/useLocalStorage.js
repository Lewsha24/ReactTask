import { useState, useCallback } from 'react';

export const useLocalStorage = (key) => {
    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key);
        return storedValue !== null ? storedValue : null;
    });

    const setItem = useCallback(
        (newValue) => {
            window.localStorage.setItem(key, newValue);
            setValue(newValue);
        },
        [key]
    );

    const removeItem = useCallback(() => {
        window.localStorage.removeItem(key);
        setValue(null);
    }, [key]);

    return [value, { setItem, removeItem }];
};