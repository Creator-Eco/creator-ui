/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface CardProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
}

const Card: FC<CardProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {children}
        </div>
    );
};

Card.defaultProps = {
    testId: 'card'
};

export default Card;
