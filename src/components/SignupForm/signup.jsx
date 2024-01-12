import React from 'react'
import { useState}  from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Container, TextField } from '@material-ui/core';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });
function Signup({nextStep}) {
  
    const handleFormSubmit = (values) => {
      console.log(values);
      // Add your form submission logic here
      nextStep();
    };
  
  return (
    <div>
    
    <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }}
    validationSchema={validationSchema} onSubmit={handleFormSubmit}
  >
  <Container>
    <Form>
      <div className="form-group mt-1">
        <label htmlFor="firstName" className='p-2'>First Name*</label>
        <Field type="text" name="firstName" className="form-control" placeholder="Enter First Name" />
        <ErrorMessage name="firstName" component="div" className="text-danger" />
      </div>
      <div className="form-group mt-1">
        <label htmlFor="lastName" className='p-2'>Last Name*</label>
        <Field type="text" name="lastName" className="form-control" placeholder="Enter Last Name" />
        <ErrorMessage name="lastName" component="div" className="text-danger" />
      </div>
      <div className="form-group mt-1">
        <label htmlFor="email" className='p-2'>Email*</label>
        <Field type="email" name="email" className="form-control" placeholder="Enter Email" />
        <ErrorMessage name="email" component="div" className="text-danger" />
      </div>
      <div className="form-group mt-1">
        <label htmlFor="password" className='p-2'>Password*</label>
        <Field type="password" name="password" className="form-control" placeholder="Create Password" />
        <ErrorMessage name="password" component="div" className="text-danger" />
        <small className=' text-muted'>Must be at least 8 characters.</small>
      </div>
      <div className='row justify-content-center mb-3'>
        <button type="submit" className="btn-form">Get Started</button>
      </div>
    </Form>
    </Container>
  </Formik>
    

  
    
    </div>
  )
}

export default Signup