/** @jsx jsx */
import { jsx } from '@emotion/core';
import ReactJsPopup, { Props as PopupProps } from 'reactjs-popup';
import { FC, PropsWithChildren } from 'react';
import React from 'react';
import * as styles from './styles';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'auto';
export interface ModalProps {
    testId?: string;
    title?: string;
    size?: ModalSize;
    x?: boolean;
    popupProps: Omit<PopupProps, 'children'>;
}

const Modal: FC<PropsWithChildren<ModalProps>> = props => {
    const { children, popupProps, title = '', size = 'md' } = props;
    const { trigger } = popupProps;

    let WrappedTrigger;
    if (trigger) {
        WrappedTrigger = trigger && React.forwardRef((props, ref?: React.Ref<any>) => (
            <div {...props} ref={ref}>{trigger}</div>)
        );
    }

    return (
        <div css={styles.base}>
            <ReactJsPopup
                {...popupProps} modal lockScroll trigger={WrappedTrigger ? <WrappedTrigger /> : trigger}
                contentStyle={styles.popupContent(size)}
                overlayStyle={styles.overlay}>
                {(close): JSX.Element => (
                    <div>
                        <div css={styles.header}>
                            <Text>{title}</Text>
                            <Icon name="close" styles={{ base: styles.closeBtn }} onClick={close}></Icon>
                        </div>

                        <div css={styles.content(size)}>
                            {children}
                        </div>

                        <div css={styles.footer}>

                        </div>
                    </div>
                )}
            </ReactJsPopup>
        </div>
    );
};

Modal.defaultProps = {
    testId: 'modal'
};

export default Modal;
