import {useEffect, useRef, useState} from "react";

export function useHover() {
    const [hovered, setHovered] = useState(false)
    // Запоминаем состояния, чтобы после рендера ничего не забылось
    const ref = useRef(null)

    // Вносим в функцию наши состояния ховера, так как addEventListner принимает 2 значением функцию
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Заносим все в в useEffect
    useEffect(() => {
        const value = ref.current
        if(value) {
            value.addEventListener('mouseenter', handleMouseEnter);
            value.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                value.addEventListener('mouseenter', handleMouseEnter);
                value.addEventListener('mouseleave', handleMouseLeave);
            }
        }
    }, [])

    return {hovered, ref}
}