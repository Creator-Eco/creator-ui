import { useState } from 'react';
import { ValueOf } from '@src/utils/utils';
import { getUnique } from '@src/utils/array-utils/array-utils';

export type FormErrors<T> = Partial<{ [key in keyof T]: string }>

export interface UseForm<T> {
    setValue: (fieldName: keyof T, value: ValueOf<T>) => void;
    setValues: (values: T) => void;
    getValue(fieldName: keyof T): ValueOf<T>;
    getValues: () => T;
    getChangedValues: () => T;
    setError(fieldName: keyof T, error: string): void;
    getError(fieldName: keyof T): string | undefined;
    clearError: (fieldName: keyof T) => void;
    clearErrors: () => void;
    clearForm: () => void;
}

export default function useForm<T>(initialValues: T): UseForm<T> {
    const [values, _setValues] = useState(initialValues as T);
    const [errors, setErrors] = useState({} as FormErrors<T>);
    const [touched, setTouched] = useState([] as Partial<Array<keyof T>>);

    function setValues(values: T): void {
        _setValues(values);
    }

    function setValue(fieldName: keyof T, value: ValueOf<T>): void {
        setValues({
            ...values,
            [fieldName]: value
        });
        setTouched(getUnique([...touched, fieldName]) );

        clearError(fieldName);
    }

    function getValue(fieldName: keyof T): ValueOf<T> {
        return values[fieldName];
    }

    function getInitialValue(fieldName: keyof T): ValueOf<T> {
        return initialValues[fieldName];
    }

    function getValues(): T {
        return values;
    }

    // return only the values that have been changed
    function getChangedValues(): T {
        const changedValues = {} as T;
        touched.forEach(key => {
            if (!key) return;
            if (getValue(key) == getInitialValue(key)) return;

            changedValues[key] = getValue(key);
        });

        return changedValues;
    }

    function setError(fieldName: keyof T, error: string): void {
        setErrors({
            ...errors,
            [fieldName]: error
        });
    }

    function getError(fieldName: keyof T): string | undefined {
        return errors[fieldName];
    }

    function clearError(fieldName: keyof T): void {
        setErrors({
            ...errors,
            [fieldName]: ''
        });
    }

    function clearErrors(): void {
        setErrors({});
    }

    function clearForm(): void {
        clearErrors();
        Object.keys(values).forEach((field) => {
            setValue(field, '');
        });
    }

    return {
        setValue,
        setValues,
        getValue,
        getValues,
        getChangedValues,
        setError,
        getError,
        clearError,
        clearErrors,
        clearForm
    };
};
