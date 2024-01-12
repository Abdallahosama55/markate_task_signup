import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from '@material-ui/core';

const validationSchema = Yup.object({
  StoreUrl: Yup.string().required('Store domain Name is required'),
  StoreName: Yup.string().required('Store Name is required'),
  selectedLanguage: Yup.string().required('Select language is required'),
  selectedIndustry: Yup.string().required('selectedIndustry is requred'),
 
});

function StoreForm({ nextStep }) {

  const handleFormSubmit = (values) => {
    console.log(values);
    // Add your form submission logic here
    nextStep();
  };

  return (
    <div>
      <Formik
        initialValues={{
          StoreName:'',
          StoreUrl: '',
          selectedLanguage: '',
          selectedIndustry: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Container>
          <Form>
            <div className="form-group mt-1">
              <label htmlFor="StoreName" className='p-2'>Store Name*</label>
              <Field type="text" name="StoreName" className="form-control" placeholder="Enter First Name" />
              <ErrorMessage name="StoreName" component="div" className="text-danger" />
            </div>
            <div className="form-group mt-1">
              <label htmlFor="StoreUrl" className='p-2'>Store Url*</label>
              <div className='row'>
                <div className='col-9 p-0 ps-2'>
                  <Field type="text" name="StoreUrl" className="form-control w-100 " placeholder=" myStore" />
                  <ErrorMessage name="StoreUrl" component="div" className="text-danger" />
                </div>
                <div className='col-3 border border-gray  border-left-0  rounded-2' style={{ borderLeft: 'none' }}>
                  .markatty.com
                </div>
              </div>
            </div>

            <div className="form-group mt-1">
              <label htmlFor="selectedLanguage" className='p-2'>Store Language</label>
              <Field as="select" name="selectedLanguage" className="form-select" aria-label="Default select example">
                <option value="" disabled>Select Language</option>
                <option value="arabic">Arabic</option>
                <option value="english">English</option>
              </Field>
            </div>

            <div className="form-group mt-1">
              <label htmlFor="selectedIndustry" className='p-2'>Store Industry</label>
              <Field as="select" name="selectedIndustry" className="form-select" aria-label="Default select example">
                <option value="" disabled>Select Industry</option>
                <option value="fashion">Fashion</option>
                <option value="baby">Baby</option>
                <option value="girls">Girls</option>
                <option value="mensFashion">Men's Fashion</option>
              </Field>
              <small>Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)</small>
            </div>

            <div className='row justify-content-center mb-3'>
              <button type="submit" className="btn-form">Save</button>
            </div>

            <div className='py-2'>
            <div className='d-flex justify-content-center align-items-center '>
              <img src={require('../../assets/Icon (2).png')} alt="Icon" />
              <a href='#' className='back-text text-center'>
                Back to log in
              </a>
            </div>
          </div>
          </Form>
        </Container>
      </Formik>
    </div>
  )
}

export default StoreForm;
