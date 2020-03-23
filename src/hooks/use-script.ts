import { useEffect, useState } from 'react';

export default function useScript(src: string, onScriptLoadCb?: () => void): [boolean, boolean] {
    // Keeping track of script loaded and error state
    const [state, setState] = useState({
        isloaded: false,
        error: false
    });

    useEffect(() => {
        // Create script
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        // Script event listener callbacks for load and error
        const onScriptLoad = (): void => {
            setState({
                isloaded: true,
                error: false
            });

            if (onScriptLoadCb) onScriptLoadCb();
        };

        const onScriptError = (): void => {
            // Remove from cachedScripts we can try loading again
            setState({ isloaded: true, error: true });
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        // Remove event listeners on cleanup
        return (): void => {
            script.removeEventListener('load', onScriptLoad);
            script.removeEventListener('error', onScriptError);
        };
    }, [src]); // Only re-run effect if script src changes

    return [state.isloaded, state.error];
}
