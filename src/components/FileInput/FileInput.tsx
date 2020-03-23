/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';
import Dropzone, { DropzoneProps } from '../Dropzone/Dropzone';

export interface FileInputProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    hasError?: boolean;
    dropzoneProps?: Omit<DropzoneProps, 'onFile'>;
    onFile: (base64: string) => void;
}

const FileInput: FC<FileInputProps> = props => {
    const { testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function validateInput() {
        return true;
    }

    function onFile(base64: string): void {
        const { onFile } = props;
        const isValid = validateInput();
        if (!isValid) return;

        onFile(base64);
    }

    function renderDropzone(): JSX.Element {
        const { dropzoneProps, hasError } = props;
        const dropzoneStyle = {
            base: styles.dropzone,
            selectButton: styles.dropzoneSelectButton
        };
        if (hasError)
            Object.assign(dropzoneStyle.base, styles.dropzoneWithError);

        return (
            <Dropzone
                onFile={onFile}
                className="relative"
                styles={dropzoneStyle}
                {...dropzoneProps}
            />
        );
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {renderDropzone()}
        </div>
    );
};

FileInput.defaultProps = {
    testId: 'file-input'
};

export default FileInput;
