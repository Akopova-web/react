import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControls.module.css'

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl}>
            <div className={hasError ? classes.error : ""}>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl}>
            <div className={hasError ? classes.error : ""}>
                <input {...input} {...props} />
            </div>
            {hasError && <div>{error}</div>}
        </div>
    )
}

export const fieldsCreator = (type={}, placeholder, name, validate, component, text ="") => 
    (<div>
        <Field type={type} placeholder={placeholder} name={name} validate={validate} component={component}>
            </Field> {text}
    </div>)
