/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface SpinnerProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
}

const Spinner: FC<SpinnerProps> = props => {
    const { testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [styles.base, extenalStyles.base];
    }

    return <div css={getBaseStyle()} data-test={testId} className={className} />;
};

Spinner.defaultProps = {
    testId: 'spinner'
};

export default Spinner;
