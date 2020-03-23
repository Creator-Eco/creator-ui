/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface FloaterBarProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
}

const FloaterBar: FC<FloaterBarProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            <div css={styles.floater}>
                {children}
            </div>
        </div>
    );
};

FloaterBar.defaultProps = {
    testId: 'floater-bar'
};

export default FloaterBar;
