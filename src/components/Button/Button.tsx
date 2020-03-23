/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base, baseDisabled, spinnerBase, typeStyles, baseOutline } from './styles';
import { toPascalCase } from '@src/utils/string-utils/string_utils';
import Spinner from '../Spinnner/Spinner';
import { noop, ExternalStyles } from '@src/utils/utils';

export type ButtonSize = 'sm' | 'normal' | 'md' | 'lg';
export type ButtonType = 'success' | 'danger';
export const BUTTON_TYPES: ButtonType[] = ['success', 'danger'];

export interface ButtonProps {
    styles?: ExternalStyles<typeof styles>;
    size?: ButtonSize;
    type?: ButtonType;
    isOutline?: boolean;
    onClick?: (e: MouseEvent) => void;
    onFocus?(): void;
    onBlur?(): void;
    isLoading?: boolean;
    isDisabled?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> = props => {
    const { children, onFocus, onBlur, className } = props;

    function getBaseStyle() {
        const { size = 'normal', type, isOutline, isDisabled, isLoading, styles: externalStyles = {} } = props;
        return [
            base(size),
            externalStyles.base,
            isOutline && baseOutline,
            type && typeStyles[`base${toPascalCase(type)}`],
            (isLoading || isDisabled) && baseDisabled
        ];
    }

    function renderSpinner(): JSX.Element | null {
        const { isLoading } = props;
        if (!isLoading) return null;

        return <Spinner styles={{ base: spinnerBase }} />;
    }

    function onClick(e: MouseEvent): void {
        const { onClick = noop, isDisabled, isLoading } = props;
        if (isDisabled || isLoading) return;

        return onClick(e);
    }

    return (
        <div
            css={getBaseStyle()}
            data-test="button"
            className={className}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            {children}
            {renderSpinner()}
        </div>
    );
};

Button.defaultProps = {
    isLoading: false,
    isDisabled: false,
};

export default Button;
