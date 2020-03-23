/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ChangeEvent } from 'react';
import { base } from './styles';
import * as styles from './styles';
import { noop, ExternalStyles } from '@src/utils/utils';
import { isNumber, getTotalDecimalDigits } from '@src/utils/number-utils/number-utils';

export interface InputProps {
    styles?: ExternalStyles<typeof styles>;
    theme?: 'dark' | 'light';
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
    name?: string;
    type?: 'password' | 'text' | 'number';
    isAutoFocus?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    pattern?: string;
    maxLength?: number;
    min?: number; // input number
    max?: number; // input number
    decimalDigits?: number; // input number
    hasError?: boolean;
    autoCapitalize: string;
    autoCorrect: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onClick?: () => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    onEnterPress?: () => void;
    placeholder?: string;
    value?: string;
}

const Input: FC<InputProps> = props => {
    const { autoCapitalize, autoCorrect, testId, className, isAutoFocus, isReadOnly, isDisabled, type, value = '', placeholder, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        const { isDisabled, hasError } = props;
        return [
            base,
            extenalStyles.base,
            hasError && styles.baseError,
            isDisabled && styles.baseDisabled
        ];
    }

    function preventDefault(e): void {
        e.preventDefault();
        e.stopPropagation();
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

    function onKeyPress(e: React.KeyboardEvent<HTMLDivElement>): void {
        const { decimalDigits, onKeyPress = noop, onEnterPress = noop } = props;
        const { key } = e;

        if (type == 'number' && decimalDigits == 0 && key == '.')
            preventDefault(e);

        if (key === 'Enter') return onEnterPress();
        onKeyPress(e);
    }

    function isValid(value: string): boolean {
        const { type, maxLength, pattern } = props;
        if (value == '' || value == '-') return true;
        if (maxLength && value.length > maxLength || pattern && !new RegExp(pattern).test(value)) return false;

        if (type == 'number') return isInputNumberValid(value);

        return true;
    }

    function isInputNumberValid(value: string): boolean {
        const { min, max, decimalDigits } = props;

        if (decimalDigits && decimalDigits > 0 && value == '.') return true;
        if (!isNumber(value)) return false;

        const inputDecimalDigits = getTotalDecimalDigits(value);
        if (decimalDigits && inputDecimalDigits > decimalDigits) return false;

        if ((min !== null && Number(value) < Number(min)) || (max !== null && Number(value) > Number(max))) return false;

        return true;
    }

    function onChange(e: ChangeEvent<HTMLInputElement>): void {
        const { isDisabled, isReadOnly, onChange = noop } = props;
        if (isReadOnly || isDisabled) return;

        const _isValid = isValid(e.target.value);
        if (!_isValid) return;

        onChange(e);
    }

    function getPattern(): string | undefined {
        const { type, pattern } = props;
        if (type === 'number') return '[0-9.]*';
        return pattern;
    }

    const inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
        name,
        type,
        className,
        value,
        placeholder,
        onChange,
        onFocus,
        onClick,
        onBlur,
        onKeyPress,
        autoFocus: isAutoFocus,
        pattern: getPattern(),
        readOnly: isReadOnly,
        disabled: isDisabled,
        autoCapitalize,
        autoCorrect
    };

    return (
        <input {...inputProps} css={getBaseStyle()} data-test={testId} className={className} />
    );
};

Input.defaultProps = {
    testId: 'input',
};

export default Input;
