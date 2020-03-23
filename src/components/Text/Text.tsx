/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { baseMultiline, base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface TextProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    enableMultiline?: boolean;
    lineClamp?: number;
    testId?: string;
    onClick?: () => void;
    text?: string;
}

const Text: FC<TextProps> = props => {
    const { text, children, testId, className, onClick, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        const { enableMultiline, lineClamp } = props;
        return [base, enableMultiline && baseMultiline, lineClamp && styles.baseLineClamp(lineClamp), extenalStyles.base];
    }

    return (
        <span onClick={onClick} css={getBaseStyle()} data-test={testId} className={className}>
            {text || children}
        </span>
    );
};

Text.defaultProps = {
    testId: 'text'
};

export default Text;
