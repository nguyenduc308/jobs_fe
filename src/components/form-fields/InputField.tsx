import { ErrorMessage, Field } from 'formik';
import React, { HTMLInputTypeAttribute } from 'react';

export interface InputFieldProps {
  name: string;
  label?: string;
  placeHolder?: string;
  type?: HTMLInputTypeAttribute;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <>
      <label htmlFor={props.name} className='font-bold'>
        {props.label}
      </label>
      <Field
        name={props.name}
        placeholder={props.placeHolder}
        className='form-control'
        type={props.type || 'text'}
      />
      <ErrorMessage
        name={props.name}
        component='div'
        className='text-xs text-red-500'
      />
    </>
  );
};

export default InputField;
