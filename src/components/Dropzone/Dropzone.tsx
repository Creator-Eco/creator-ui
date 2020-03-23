/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useState } from 'react';
import * as styles from './styles';
import { base, baseActive, baseWithPreview, baseAccept, selectButton } from './styles';
import Text from '@src/components/Text/Text';
import { useDropzone } from 'react-dropzone';
import { ExternalStyles } from '@src/utils/utils';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { compress } from '@src/utils/image-utils/image-utils';

export interface DropzoneProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    enableMultiline?: boolean;
    testId?: string;
    maxSize?: number;
    showSelectButton?: boolean;
    showInstructions?: boolean;
    onFile: (dataUrl: string) => void;
    initialFile?: string;
}

const Dropzone: FC<DropzoneProps> = props => {
    const { maxSize, initialFile, testId, onFile, className, styles: extenalStyles = {} } = props;

    const [, setFile] = useState({});
    const [preview, setPreview] = useState(initialFile ? initialFile : '');

    const { open, getRootProps, getInputProps, isDragActive, isDragAccept } = useDropzone({
        accept: 'image/*',
        maxSize: maxSize,
        multiple: false,
        onDrop: acceptedFiles => {
            const file = acceptedFiles[0];
            if (!file) return;

            onDrop(file);
        }
    });

    async function onDrop(file: File): Promise<void> {
        const compressedFile = await compress(file);
        setFile(compressedFile);
        setPreview(URL.createObjectURL(compressedFile));

        const base64 = await convertFileToBase64(compressedFile);
        onFile(base64);
    }

    function convertFileToBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = (e: Event) => {
                resolve(reader.result as string);
            };
            reader.onerror = (e) => {
                reject(e.target.error);
            };
            reader.readAsDataURL(file);
        });
    }

    function getBaseStyle() {
        return [
            base,
            isDragActive && baseActive,
            isDragAccept && baseAccept,
            preview && baseWithPreview,
            extenalStyles.base
        ];
    }

    function onSelectClick(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();
        open();
    }

    function renderPreview(): JSX.Element | null {
        if (!preview) return null;

        return <div css={styles.previewImage(preview)} />;
    }

    function renderInstructions(): JSX.Element | null {
        const { showInstructions = true } = props;
        if (preview) return null;
        return (
            <div className="md:flex md:flex-col md:items-center">
                <Icon css={styles.icon} name="dropzone" />
                {showInstructions && <Text enableMultiline={true} className="hidden xl:block mt-2 text-center text-4 font-bold">{'dropzoneAction'}</Text>}
            </div>
        );
    }

    function renderSelectButton(): JSX.Element | null {
        const { showSelectButton, } = props;

        if (!showSelectButton) return null;

        const style = [selectButton, extenalStyles.selectButton];
        return (
            <Button css={style} onClick={onSelectClick} size="sm" isOutline={true} className="ml-4">
                <Text>{'Change'}</Text>
            </Button>
        );
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className} {...getRootProps()}>
            <input {...getInputProps()} />
            {renderPreview()}
            {renderInstructions()}
            {renderSelectButton()}
        </div>
    );
};

Dropzone.defaultProps = {
    testId: 'dropzone'
};

export default Dropzone;
