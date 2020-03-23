/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';
import Text from '../Text/Text';

export interface CharacterCounterProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    maxChars: number;
    value: string;
}

const CharacterCounter: FC<CharacterCounterProps> = props => {
    const { testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function getText(): string {
        const { value, maxChars } = props;
        const length = value ? value.length : 0;
        return `${length}/${maxChars}`;
    }


    return (
        <Text css={getBaseStyle()} data-test={testId} className={className}>
            {getText()}
        </Text>
    );
};

CharacterCounter.defaultProps = {
    testId: 'character-counter'
};

export default CharacterCounter;
