import React from 'react';
import { Container, Card, Form as SemanticForm, Button, Header, Divider, Label } from 'semantic-ui-react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import 'semantic-ui-css/semantic.min.css';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Define the type for form values
interface FormValues {
  email: string;
  password: string;
}

export default function Login() {

  const nav = useNavigate()
  // Define the handleSubmit function with type for values and FormikHelpers
  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    // Handle form submission logic here
    console.log(values);
    toast.success("Welcome User X To UCare")
    nav('../DashBoard')
    actions.setSubmitting(false); // Stop the submitting state
  };

  return (
    <Container style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card className='loginContainerCard'>
        <Card.Content>
          <Header as='h2' textAlign='center' style={{ marginBottom: '1.5rem' }}>
            Forgot Password
          </Header>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <SemanticForm.Field style={{ marginBottom: '1rem' }}>
                  <h4>Email</h4>
                  <Field name='email'>
                    {({ field }: { field: any }) => (
                      <SemanticForm.Input 
                        {...field}
                        placeholder='Email'
                        type='email'
                        fluid
                        style={{ marginBottom: '0.5rem' }} // Add margin-bottom to input
                      />
                    )}
                  </Field>
                </SemanticForm.Field>
                <SemanticForm.Field style={{ marginBottom: '1rem' }}>
                  <h4>Password</h4>
                  <Field name='password'>
                    {({ field }: { field: any }) => (
                      <SemanticForm.Input 
                        {...field}
                        placeholder='Password'
                        type='password'
                        fluid
                        style={{ marginBottom: '0.5rem' }} // Add margin-bottom to input
                      />
                    )}
                  </Field>
                </SemanticForm.Field>
                <Button className='loginbt' fluid size='large' type='submit' disabled={isSubmitting} style={{ marginBottom: '1rem' }}>
                  Log In
                </Button>
                <Divider style={{ marginBottom: '1rem' }} />
                <Link to='/forgot-password'>
                  <Label as='a' >
                    Forgot Password
                  </Label>
                </Link>
              </Form>
            )}
          </Formik>
        </Card.Content>
      </Card>
    </Container>
  );
}
