/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import Input, { InputProps } from '../Input/Input';
import Text, { TextProps } from '../Text/Text';
import FieldLabel, { FieldLabelProps } from '../FieldLabel/FieldLabel';
import Textarea, { TextareaProps } from '../Textarea/Textarea';
import { ExternalStyles } from '@src/utils/utils';
import FileInput, { FileInputProps } from '../FileInput/FileInput';
import CharacterCounter, { CharacterCounterProps } from '../CharacterCounter/CharacterCounter';

export interface FieldProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
    fileInputProps?: FileInputProps;
    inputProps?: InputProps;
    textareaProps?: TextareaProps;
    fieldLaelProps?: FieldLabelProps;
    error?: string;
    preview?: string;
    folatingInputLabelProps?: TextProps;
    characterCounterProps?: CharacterCounterProps;
}

const Field: FC<FieldProps> = props => {
    const { testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [styles.base, extenalStyles.base];
    }

    function renderErrorCode(): JSX.Element | null {
        const { error } = props;
        if (!error) return null;

        return <Text css={styles.errorCode}>{error}</Text>;
    }

    function renderInput(): JSX.Element | null {
        const { inputProps, error } = props;
        if (!inputProps) return null;

        return (
            <Input hasError={Boolean(error)} {...inputProps} />
        );
    }

    function renderFileInput(): JSX.Element | null {
        const { fileInputProps, error } = props;
        if (!fileInputProps) return null;

        return (
            <FileInput hasError={Boolean(error)} {...fileInputProps} />
        );
    }

    function renderTextarea(): JSX.Element | null {
        const { textareaProps, error } = props;
        if (!textareaProps) return null;

        return (
            <Textarea hasError={Boolean(error)} {...textareaProps} />
        );
    }

    function renderLabel(): JSX.Element | null {
        const { fieldLaelProps } = props;
        if (!fieldLaelProps) return null;

        return (
            <FieldLabel {...fieldLaelProps} />
        );
    }

    function renderFloatingInputLabel(): JSX.Element | null {
        const { folatingInputLabelProps } = props;
        if (!folatingInputLabelProps) return null;

        const style = [styles.folatingInputLabel, folatingInputLabelProps.styles];
        return (
            <Text css={style} {...folatingInputLabelProps} />
        );
    }

    function renderInputCounter(): JSX.Element | null {
        const { characterCounterProps } = props;
        if (!characterCounterProps) return null;

        const style = [styles.folatingInputLabel, characterCounterProps.styles];
        return (
            <CharacterCounter css={style} {...characterCounterProps} />
        );
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {renderLabel()}
            {renderInput()}
            {renderFloatingInputLabel()}
            {renderInputCounter()}
            {renderFileInput()}
            {renderTextarea()}
            {renderErrorCode()}
        </div>
    );
};

Field.defaultProps = {
    testId: 'field'
};

export default Field;
