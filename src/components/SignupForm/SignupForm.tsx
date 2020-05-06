import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import User from '../../interfaces/User';

const initialValues: Partial<User> = {
  email: '',
  password: '',
  name: '',
  profession: '',
};

const SignupForm = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Signup Form</Typography>

        <Formik
          validationSchema={object({
            email: string().required().min(2).max(100),
            password: string().required().min(8).max(16),
            name: string().required().min(2).max(100),
            profession: string().required().min(2).max(100),
          })}
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            return new Promise((res) => {
              setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                console.log('---------');
                res();
              }, 5000);
            });
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Your email address" />
                  <ErrorMessage name="email" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field type="password" name="password" as={TextField} label="Your password" />
                  <ErrorMessage name="password" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="name" as={TextField} label="Your name" />
                  <ErrorMessage name="name" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="profession" as={TextField} label="Your profession" />
                  <ErrorMessage name="profession" />
                </FormGroup>
              </Box>

              <Button type="submit" disabled={isSubmitting || isValidating}>
                SignUp
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
