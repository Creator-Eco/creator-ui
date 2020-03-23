/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import Text from '@src/components/Text/Text';
import { ExternalStyles } from '@src/utils/utils';
import Button from '@src/components/Button/Button';
import Hr from '@src/components/Hr/Hr';
import { roundToDecimalDigits } from '@src/utils/number-utils/number-utils';

export interface PollResultOption {
    label: string;
    value: string;
}

export interface PollResultProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    question: string;
    options: PollResultOption[];
    onOptionClick: (value: string) => void;
    totalVotes: number;
    totalTokens: number;
    votingRate: number;
    date: string;
}

const PollResult: FC<PollResultProps> = props => {
    const { testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function renderQuestion(): JSX.Element {
        const { question, date } = props;
        return (
            <div className="mb-4">
                <Text className="font-bold mr-2">{question}</Text>
                <Text className="font-bold text-battleshipGrey">{date}</Text>
            </div>
        );
    }

    function renderStats(): JSX.Element {
        const { votingRate, totalTokens, totalVotes } = props;

        return (
            <div css={styles.stats} className="flex">
                <div className="text-center mr-8">
                    <Text className="text-4 font-bold md:mr-1 block md:inline">{totalVotes}</Text>
                    <Text className="text-4">{'votes'}</Text>
                </div>
                <div className="text-center mr-8">
                    <Text className="text-4 font-bold md:mr-1 block md:inline">{totalTokens}</Text>
                    <Text className="text-4 mr-1">{'tokens'}</Text>
                </div>
                <div className="text-center mr-8">
                    <Text className="text-4 font-bold md:mr-1 block md:inline">{roundToDecimalDigits(votingRate * 100, 2)}%</Text>
                    <Text className="text-4 mr-1">{'voting rate'}</Text>
                </div>
            </div>
        );
    }

    function renderOption(option: PollResultOption): JSX.Element {
        const { onOptionClick } = props;
        const { label, value } = option;
        return (
            <Button className="mb-2" onClick={(): void => onOptionClick(value)} isOutline={true}><Text>{label}</Text></Button>
        );
    }

    function renderOptions(): JSX.Element {
        const { options } = props;
        return (
            <div>
                {options.map(renderOption)}
                <Hr className="my-4 md:my-6" />
            </div>
        );
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {renderQuestion()}
            {renderOptions()}
            {renderStats()}
        </div>
    );
};

PollResult.defaultProps = {
    testId: 'pollresult'
};

export default PollResult;


// remove ipns flagged redirect