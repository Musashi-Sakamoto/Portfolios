import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  TextField,
  Typography,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { array, object, string } from 'yup';
import Work from '../../interfaces/Work';

type WorkInput = Pick<Work, 'title' | 'siteUrl'>;

export interface IProps {
  portfolioSite: string;
  works?: WorkInput[];
}

const initialValues: IProps = {
  portfolioSite: '',
  works: [],
};

export default function FormDemo() {
  const [works, setWorks] = useState<WorkInput[]>([]);
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

              <Box marginBottom={2}>
                <Fab color="secondary" aria-label="add" onClick={() => {
                  const work: WorkInput = {
                    siteUrl: '',
                    title: '',
                  };
                  setWorks([...works, work]);
                }}>
                  <AddIcon />
                </Fab>
              </Box>

              {works.map((_, i) => (
                <div key={i}>{i}</div>
              ))}

              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit
              </Button>

              <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card >
  );
}
