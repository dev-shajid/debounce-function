import { useRef, useEffect, useCallback } from 'react';

const useDebounce = (func: Function, wait: number = 1000) => {
    const timeoutRef = useRef<any>(null);

    const debouncedFunc = useCallback((...args: any[]) => {
        clearTimeout(timeoutRef?.current)
        timeoutRef.current = setTimeout(() => func(...args), wait)
    }, [wait, func])

    useEffect(() => {
        return () => clearTimeout(timeoutRef?.current)
    }, [wait])

    return debouncedFunc
}

export default useDebounce;