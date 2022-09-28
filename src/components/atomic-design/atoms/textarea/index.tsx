import React, { FC, useEffect, useRef, useState } from 'react';

import { Content, Label, TextareaField } from './styles';
import useAutosizeTextArea from '../../../../hooks/useAutosizeTextArea';

interface TextareaI {
  label: string;
  required?: boolean;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const Textarea: FC<TextareaI> = ({ label, name, value, onChange, onBlur, required }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, value as string);

  return (
    <Content>
      <Label htmlFor={name}>{label}</Label>
      <TextareaField
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        ref={textAreaRef}
      />
    </Content>
  );
};

export default Textarea;
