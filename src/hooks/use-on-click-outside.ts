import { useEffect, MutableRefObject } from 'react';

export function useOnClickOutside(ref: MutableRefObject<HTMLElement> | null, handler: React.EventHandler<any>): void {
    useEffect(() => {
        const listener = (ev: MouseEvent | TouchEvent): void => {
            if (!ref) return;
            // Do nothing if clicking ref's element or descendent elements
            if (ev.target === null || ref.current === null || ref.current.contains(ev.target as Node))
                return;

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return (): void => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
}