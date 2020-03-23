/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
// import * as styles from './styles';
import SelectLib, { Props } from 'react-select';

export interface SelectProps extends Props {
    testId?: string; // TODO - create base props and inherite from there?
}

export interface OptionType {
    value: string;
    label: string;
}

const Select: FC<SelectProps> = props => {

    // function getBaseStyle() {
    //     return [styles.base, extenalStyles.base];
    // }

    return <SelectLib {...props} />;
};

Select.defaultProps = {
    testId: 'select'
};

export default Select;
