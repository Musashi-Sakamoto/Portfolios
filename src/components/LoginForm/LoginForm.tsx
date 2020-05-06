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

const initialValues: Pick<User, 'email' | 'password'> = {
  email: '',
  password: '',
};

const LoginForm = () => {

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Login Form</Typography>

        <Formik
          validationSchema={object({
            email: string().required().min(2).max(100),
            password: string().required().min(2).max(100),
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

              <Button type="submit" disabled={isSubmitting || isValidating}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
