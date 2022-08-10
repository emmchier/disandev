import React, { FC } from 'react';

type PropTypes = {
  message: string;
};

const SendedMessage: FC<PropTypes> = ({ message }) => <p>{message}</p>;

export default SendedMessage;
