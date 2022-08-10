import React, { FC } from 'react';

import { Content, Label, TextareaField } from './styles';

interface TextareaI {
  label: string;
  required?: boolean;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const Textarea: FC<TextareaI> = ({ label, name, value, onChange, onBlur, required }) => (
  <Content>
    <Label htmlFor={name}>{label}</Label>
    <TextareaField
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
    />
  </Content>
);

export default Textarea;
