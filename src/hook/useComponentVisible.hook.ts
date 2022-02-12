import {useState, useEffect, useRef} from 'react';

interface Props {
    extendBox: boolean;
    employeesPanel?: boolean | undefined;
}

export default function useComponentVisibleHook({extendBox, employeesPanel}: Props) {

    const ref = useRef<HTMLDivElement>(null);
    const [isComponentVisible, setIsComponentVisible] = useState(extendBox);

    useEffect(() => {
        if (employeesPanel === false || employeesPanel === undefined) setIsComponentVisible(extendBox);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [extendBox, employeesPanel]);

    const handleClickOutside = (event: any) => {
        if ((employeesPanel === false || employeesPanel === undefined) && (ref.current && !ref.current?.contains(event.target))) {
            setIsComponentVisible(false);
        }
    };

    return {ref, isComponentVisible, setIsComponentVisible};
}