/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { svgBaseline, svg, base } from './styles';
import { getIconAsComponent, IconType } from '@src/icons/icons';
import * as styles from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface IconProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
    name: IconType;
    alignToBaseline?: boolean;
    onClick?: () => void;
}

const Icon: FC<IconProps> = props => {
    const { testId, className, onClick, styles: extenalStyles = {} } = props;

    function renderSvg() {
        const { alignToBaseline, name } = props;

        const Svg = getIconAsComponent(name);

        const _props = {
            css: [svg, alignToBaseline && svgBaseline, extenalStyles.svg],
        };

        return <Svg {..._props} />;
    }

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    return (
        <span onClick={onClick} css={getBaseStyle()} data-test={testId} className={className}>
            {renderSvg()}
        </span>
    );
};

Icon.defaultProps = {
    testId: 'icon',
};

export default Icon;
