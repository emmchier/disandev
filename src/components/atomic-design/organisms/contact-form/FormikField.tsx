import React, { FC } from 'react';

import { useField } from 'formik';
import Input from '../../molecules/input';
import Textarea from '../../atoms/textarea';
import { Error } from './styles';

interface PropTypes {
  label: string;
  textarea?: boolean;
  name: string;
  type?: 'text' | 'email' | 'password';
  [x: string]: any;
}

const FormikField: FC<PropTypes> = ({ label = '', textarea = false, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
      {!textarea ? (
        <Input {...field} {...props} label={label} />
      ) : (
        <Textarea {...field} {...props} label={label} />
      )}
    </>
  );
};

export default FormikField;
