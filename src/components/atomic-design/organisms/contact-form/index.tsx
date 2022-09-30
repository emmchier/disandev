import React, { FC } from 'react';

import { Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { Button } from '../../atoms';
import { FormikField } from './FormikField';

import { ButtonContainer, Content } from './styles';

interface ContactFormPropTypes {
  loading?: boolean;
  setShowLoading: (e: boolean) => void;
  setResponse: (e: number) => void;
  setShowSnackbar: (e: boolean) => void;
}

export const ContactForm: FC<ContactFormPropTypes> = ({
  loading,
  setShowLoading,
  setResponse,
  setShowSnackbar,
}) => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const validateFillInputs = (name: string, email: string, message: string) =>
    loading !== true ? (name !== '' && email !== '' && message !== '' ? false : true) : true;

  const validateSomeFillInputs = (name: string, email: string, message: string) =>
    loading !== true ? (name !== '' || email !== '' || message !== '' ? false : true) : true;

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, { resetForm }) => {
        try {
          setShowLoading(true);
          setTimeout(() => {
            setResponse(200);
            resetForm();
          }, 3000);

          emailjs
            .send(
              process.env.EMAILJS_SERVICE_ID as string,
              process.env.EMAILJS_TEMPLATE_ID as string,
              values,
              process.env.EMAILJS_PUBLIC_KEY as string
            )
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
                setResponse(res.status);
                resetForm();
              }
            });
        } catch {
          setShowLoading(false);
          setShowSnackbar(true);
        }
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email is not valid').required('Email is required'),
        message: Yup.string().required('Message is required'),
      })}
    >
      {(formik) => (
        <Content>
          <Form>
            <FormikField label="Your name / company name" name="name" />
            <FormikField label="Your E-mail" name="email" />
            <FormikField textarea label="Tell us about your Idea or Project" name="message" />
            <ButtonContainer>
              <Button
                type="submit"
                variant="outlined"
                ariaLabel="send message"
                iconRight={true}
                disabled={validateFillInputs(
                  formik.values.name,
                  formik.values.email,
                  formik.values.message
                )}
              >
                Send
              </Button>
              <Button
                onClick={formik.resetForm}
                ariaLabel="reset form"
                disabled={validateSomeFillInputs(
                  formik.values.name,
                  formik.values.email,
                  formik.values.message
                )}
              >
                Clear
              </Button>
            </ButtonContainer>
          </Form>
        </Content>
      )}
    </Formik>
  );
};
