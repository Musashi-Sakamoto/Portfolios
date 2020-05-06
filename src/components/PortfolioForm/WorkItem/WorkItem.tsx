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

export type WorkInput = Pick<Work, 'title' | 'siteUrl'> & { idx: number };

type IProps = {
  work: WorkInput;
  onCancel: (idx: number) => void;
  onAddWork: (work: WorkInput) => void;
};

const WorkItem = ({ onCancel, onAddWork, work }: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Formik
        validationSchema={object({
          title: string().required().min(2).max(100),
          siteUrl: string().url().min(2).max(100),
        })}
        initialValues={work}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          onAddWork(values);
        }}
      >
        {({ values, errors, isSubmitting, isValidating }) => (
          <>
            <Form>
              <CardContent>
                <Field type="hidden" name="idx" />
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
                <Button size="small" type="submit" disabled={isSubmitting || isValidating}>
                  Done
                </Button>
                <Button
                  onClick={() => {
                    console.log('onCancel', work.idx);
                    onCancel(work.idx);
                  }}
                  size="small"
                  color="secondary"
                >
                  Cancel
                </Button>
              </CardActions>
            </Form>
            <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </>
        )}
      </Formik>
    </Card>
  );
};

export default WorkItem;
