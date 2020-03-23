/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import Text, { TextProps } from '../Text/Text';
import HelpTip, { HelpTipProps } from '../HelpTip/HelpTip';
import { ExternalStyles } from '@src/utils/utils';

export interface FieldLabelProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    textProps?: TextProps;
    label?: string;
    helpTipProps?: HelpTipProps;
    helpTipTextProps?: TextProps;
    helpTipText?: string;
}

const FieldLabel: FC<FieldLabelProps> = props => {
    const { label, children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function renderHelpTip(): JSX.Element | null {
        const { helpTipProps, helpTipTextProps, helpTipText } = props;

        if (!helpTipText) return null;
        const _props: HelpTipProps = {
            styles: { base: styles.helptip },
            ...helpTipProps
        };

        return (
            <HelpTip {..._props}>
                <Text {...helpTipTextProps}>{helpTipText}</Text>
            </HelpTip>
        );
    }

    return (
        <Text css={getBaseStyle()} data-test={testId} className={className}>
            {children || label}
            {renderHelpTip()}
        </Text>
    );
};

FieldLabel.defaultProps = {
    testId: 'field-label'
};

export default FieldLabel;
