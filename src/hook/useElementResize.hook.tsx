import {useCallback, useEffect, useState, RefObject} from "react";

export const useElementResize = (wrapperElementRef: RefObject<HTMLDivElement>) => {

    const [elementWidth, setElementWidth] = useState<number>(0);
    const [elementHeight, setElementHeight] = useState<number>(0);

    const updateContainersWidth = useCallback(() => {
        if (wrapperElementRef && wrapperElementRef.current) {
            setElementWidth(wrapperElementRef.current.offsetWidth);
            setElementHeight(wrapperElementRef.current.offsetHeight);
        }
    }, [wrapperElementRef]);

    useEffect(() => {
        if (wrapperElementRef && wrapperElementRef.current) {
            setElementWidth(wrapperElementRef.current.offsetWidth);
            setElementHeight(wrapperElementRef.current.offsetHeight);
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', updateContainersWidth);
        return () => {
            window.removeEventListener('resize', updateContainersWidth);
        };
    }, [
        wrapperElementRef?.current?.offsetWidth,
        wrapperElementRef?.current?.offsetHeight,
        elementWidth,
        elementHeight,
        updateContainersWidth
    ])

    return {elementWidth, elementHeight}
}