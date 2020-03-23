/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface AspectRatioDivProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    aspectRatio: number; // ie: 16/9, 4/3
    testId?: string;
}

const AspectRatioDiv: FC<AspectRatioDivProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        const { aspectRatio = 16 / 9 } = props;
        return [base(aspectRatio), extenalStyles.base];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            <div css={styles.content}>
                {children}
            </div>
        </div>
    );
};

AspectRatioDiv.defaultProps = {
    testId: 'aspect-ratio-div'
};

export default AspectRatioDiv;
