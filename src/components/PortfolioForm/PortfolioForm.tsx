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
import WorkItem, { WorkInput } from './WorkItem/WorkItem';

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
    const filteredWorks = works.filter(e => e.idx !== work.idx);
    setWorks([...filteredWorks, work]);
  };

  const onCancel = (idx: number) => {
    const filteredWorks = works.filter(e => e.idx !== idx);
    setWorks([...filteredWorks]);
  };

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
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  onClick={() => {
                    const work: WorkInput = {
                      idx: works.length,
                      siteUrl: '',
                      title: '',
                    };
                    setWorks([...works, work]);
                  }}
                >
                  <AddIcon />
                </Fab>
              </Box>

              {works.map((work, i) => (
                <Box key={i} marginBottom={2}>
                  <WorkItem work={work} onAddWork={onAddWork} onCancel={onCancel} />
                </Box>
              ))}

              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
