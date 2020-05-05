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
import { array, object, string } from 'yup';
import Work from '../../interfaces/Work';

export interface IProps {
  portfolioSite: string;
  works?: Pick<Work, 'title' | 'siteUrl'>[];
}

const initialValues: IProps = {
  portfolioSite: '',
  works: [],
};

export default function FormDemo() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Portfolio</Typography>

        <Formik
          validationSchema={object({
            portfolioSite: string().required('Your name is mandatory!!!').min(2).max(100),
            works: array(string()),
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
                  <Field name="portfolioSite" as={TextField} label="Your port folio site url" />
                  <ErrorMessage name="portfolioSite" />
                </FormGroup>
              </Box>

              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit
              </Button>

              <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
