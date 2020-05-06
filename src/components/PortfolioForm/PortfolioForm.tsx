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
import React, { useState } from 'react';
import { array, object, string } from 'yup';
import WorkItemAdd, { WorkInput } from './WorkItem/WorkItemAdd';
import WorkItem from './WorkItem/WorkItem';

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

  const onAddWork = (work: WorkInput) => {
    if (works.findIndex(w => w.siteUrl === work.siteUrl) !== -1) return;
    setWorks([...works, work]);
  };

  const onClose = (siteUrl: string) => {
    const filteredWorks = works.filter(work => work.siteUrl !== siteUrl);
    setWorks([...filteredWorks]);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Portfolio</Typography>

        <Formik
          validationSchema={object({
            portfolioSite: string().required().min(2).max(100),
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
                <WorkItemAdd onAddWork={onAddWork} />
              </Box>

              {works.map((work, i) => (
                <Box key={i} marginBottom={2}>
                  <WorkItem work={work} onClose={onClose} />
                </Box>
              ))}

              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
      <pre>{JSON.stringify(works, null, 4)}</pre>
    </Card>
  );
}
