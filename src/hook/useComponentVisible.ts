import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current?.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        setIsComponentVisible(initialIsVisible)
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [initialIsVisible]);

    return { ref, isComponentVisible, setIsComponentVisible };
}