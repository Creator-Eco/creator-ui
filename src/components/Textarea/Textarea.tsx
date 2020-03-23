/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ChangeEvent } from 'react';
import { base } from './styles';
import * as styles from './styles';
import { noop, ExternalStyles } from '@src/utils/utils';

export interface TextareaProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
    type?: 'password' | 'text' | 'number';
    isAutoFocus?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    hasError?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    onClick?: () => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    value?: string;
    rows?: number;
    maxLength?: number;
}

const Textarea: FC<TextareaProps> = props => {
    const { testId, rows = 4, className, isAutoFocus, isReadOnly, isDisabled, value = '', placeholder } = props;

    function getBaseStyle() {
        const { isDisabled, hasError } = props;
        return [base, hasError && styles.baseError, isDisabled && styles.baseDisabled];
    }

    function isValid(value: string): boolean {
        const { maxLength } = props;
        if (maxLength && value.length > maxLength) return false;

        return true;
    }

    function onClick(): void {
        const { isDisabled, onClick = noop } = props;
        if (isDisabled) return;

        onClick();
    }

    function onFocus(): void {
        const { isDisabled, isReadOnly, onFocus = noop } = props;
        if (isDisabled || isReadOnly) return;

        onFocus();
    }

    function onBlur(): void {
        const { isDisabled, isReadOnly, onBlur = noop } = props;
        if (isDisabled || isReadOnly) return;

        onBlur();
    }

    function onKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
        const { onKeyPress = noop } = props;
        onKeyPress(e);
    }

    function onChange(e: ChangeEvent<HTMLTextAreaElement>): void {
        const { isDisabled, isReadOnly, onChange = noop } = props;
        if (isReadOnly || isDisabled) return;

        const _isValid = isValid(e.target.value);
        if (!_isValid) return;

        onChange(e);
    }

    const textareaProps: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> = {
        className,
        value,
        placeholder,
        onChange,
        onKeyPress,
        rows: rows,
        onFocus,
        onClick,
        onBlur,
        autoFocus: isAutoFocus,
        readOnly: isReadOnly,
        disabled: isDisabled
    };

    return (
        <textarea {...textareaProps} css={getBaseStyle()} data-test={testId} className={className} />
    );
};

Textarea.defaultProps = {
    testId: 'textarea'
};

export default Textarea;
