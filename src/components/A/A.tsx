/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface AProps {
    styles?: ExternalStyles<typeof styles>;
    testId?: string;
    target?: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

const A: FC<AProps> = props => {
    const { children, target, href, onClick, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    const _props = {
        target: target,
        className: className,
        href: href,
        rel: 'noopener noreferrer nofollow',
        onClick: onClick
    };

    return (
        <a css={getBaseStyle()} data-test={testId} className={className} {..._props}>
            {children}
        </a>
    );
};

A.defaultProps = {
    testId: 'a'
};

export default A;
