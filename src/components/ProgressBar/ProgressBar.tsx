/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface ProgressBarProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    progress: number; // ie 0.2
}

const ProgressBar: FC<ProgressBarProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function renderProgressFill(): JSX.Element {
        const { progress = 0 } = props;
        return (
            <div css={styles.progressFill(progress)}></div>
        );
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {renderProgressFill}
            {children}
        </div>
    );
};

ProgressBar.defaultProps = {
    testId: 'progress-bar'
};

export default ProgressBar;
