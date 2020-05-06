import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActions, CardContent, FormGroup, TextField, Fab } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { array, object, string } from 'yup';
import Work from '../../../interfaces/Work';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export type WorkInput = Pick<Work, 'title' | 'siteUrl'>;

type IProps = {
  onAddWork: (work: WorkInput) => void;
};

const initialValues: WorkInput = {
  title: '',
  siteUrl: '',
};

const WorkItemAdd = ({ onAddWork }: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Formik
        validationSchema={object({
          title: string().required().min(2).max(100),
          siteUrl: string().url().min(2).max(100),
        })}
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          onAddWork(values);
          formikHelpers.resetForm();
        }}
      >
        {({ values, errors, isSubmitting, isValidating }) => (
          <>
            <Form>
              <CardContent>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name="title" as={TextField} label="title of your work" />
                    <ErrorMessage name="title" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name="siteUrl" as={TextField} label="Your port folio site url" />
                    <ErrorMessage name="siteUrl" />
                  </FormGroup>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  color="secondary"
                  size="small"
                  type="submit"
                  disabled={isSubmitting || isValidating}
                >
                  Add
                </Button>
              </CardActions>
            </Form>
          </>
        )}
      </Formik>
    </Card>
  );
};

export default WorkItemAdd;
