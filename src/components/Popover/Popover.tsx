/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useState, useRef } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';
import { useOnClickOutside } from '@src/hooks/use-on-click-outside';


export type PopoverAlignment = 'bottom' | 'left' | 'top' | 'right' | 'center';
export type PopoverPosition = 'bottom' | 'left' | 'top' | 'right';

export interface PopoverProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    trigger: JSX.Element;

    align: PopoverAlignment;
    position: PopoverPosition;
}

const Popover: FC<PopoverProps> = props => {
    const { trigger, children, testId, className, styles: extenalStyles = {} } = props;

    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setIsVisible(false));

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function renderContent(): JSX.Element {
        const { position, align } = props;

        const alignmentStyles = styles.getAlignmentStyle(position, align);
        const positionStyles = styles.getPositionStyle(position);

        const style = [
            styles.content,
            extenalStyles.content,
            isVisible && styles.contentVisible,
            isVisible && extenalStyles.contentVisible,
            alignmentStyles,
            positionStyles
        ];

        return (
            <div css={style}>
                {children}
            </div>
        );
    }

    function renderTrigger(): JSX.Element {
        return (
            <div onClick={() => setIsVisible(!isVisible)}>
                {trigger}
            </div>
        );
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className} ref={ref}>
            {renderTrigger()}
            {renderContent()}
        </div>
    );
};

Popover.defaultProps = {
    testId: 'popover'
};

export default Popover;
