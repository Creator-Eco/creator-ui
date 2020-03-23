/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface MenuItemProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    showSeparator?: boolean;
}

const MenuItem: FC<MenuItemProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        const { showSeparator } = props;
        return [base, showSeparator && styles.baseSeparator, extenalStyles.base];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={`flex items-center font-bold text-4 p-4 md:p-6 ${className}`}>
            {children}
        </div>
    );
};

MenuItem.defaultProps = {
    testId: 'menu-item'
};

export default MenuItem;
