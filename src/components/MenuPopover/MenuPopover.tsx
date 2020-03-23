/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';
import Icon from '../Icon/Icon';
import Popover, { PopoverProps } from '../Popover/Popover';

export interface MenuPopoverProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    popoverProps: Omit<PopoverProps, 'trigger'>;
}

const MenuPopover: FC<MenuPopoverProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    function renderPopover(): JSX.Element {
        const { popoverProps } = props;
        return (
            <Popover styles={{ content: styles.popoverContent }} trigger={renderTrigger()} {...popoverProps}>
                {children}
            </Popover>
        );
    }

    function renderTrigger(): JSX.Element {
        return <Icon css={styles.trigger} name="menuTrigger" />;
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {renderPopover()}
        </div>
    );
};

MenuPopover.defaultProps = {
    testId: 'menupopover'
};

export default MenuPopover;
