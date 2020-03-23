import { useState } from 'react';

export default function useHover() {
    const [isHovered, set] = useState(false);
    return {
        isHovered,
        bindHover: {
            onTouchStart: (): void => set(true),
            onMouseEnter: (): void => set(true),
            onMouseLeave: (): void => set(false),
        },
    };
};
