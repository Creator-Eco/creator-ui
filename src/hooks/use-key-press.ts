import { useEffect, useState } from 'react';

export default function useKeyPress(targetKey: string): boolean {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function onKeyDown({ key }: KeyboardEvent): void {
        if (key === targetKey)
            setKeyPressed(true);
    }

    // If released key is our target key then set to false
    function onKeyUp({ key }: KeyboardEvent): void {
        if (key === targetKey)
            setKeyPressed(false);
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, [onKeyDown, onKeyUp]); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}