import React, { useState } from 'react';
import OTPInput from 'otp-input-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  otp: Yup.string().matches(/^\d{4}$/, 'Must be a 4-digit number').required('OTP is required'),
});

function Confirmation({ nextStep }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema,
    onSubmit: (values) => {
    
      console.log('OTP submitted:', values.otp);

     
      setIsSubmitted(true);
    },
  });

  const handleContinue = () => {
    nextStep(); 
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <div className='container'>
            <div className='d-flex py-5 justify-content-center align-items-center'>
              <div>
                <div>
                  <div className='d-flex  justify-content-center'>
                    <img src={require('../../assets/Featured icon (2).png')} alt="Featured icon" />
                  </div>
                </div>
                <div className='text-center'>
                  <h3>Email verified</h3>
                  <p className='text-muted'>Your account has been verified successfully. Click below <br /> to set up your store.</p>
                </div>
                <div className='py-3'>
                  <button type="button" className='w-100 btn-otp' onClick={handleContinue}>Continue</button>
                </div>
                <div className='py-2'>
                  <div className='d-flex justify-content-center align-items-center '>
                    <img src={require('../../assets/Icon (2).png')} alt="Icon" />
                    <a href='#' className='back-text text-center'>
                      Back to log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='justify-content-center d-flex  align-items-center mt-5'>
            <div>
              <div className='d-flex justify-content-center align-items '>
                <img src={require('../../assets/Featured icon.png')} alt="Featured icon" />
              </div>
              <div>
                <h2 className='text-center p-2'>Check your email</h2>
                <p className='text-center text-muted'>We sent a verification code to</p>
                <p className='text-center'>omarmouneer@gmail.com</p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <OTPInput
                    value={formik.values.otp}
                    onChange={(value) => formik.setFieldValue('otp', value)}
                    autoFocus
                    OTPLength={4}
                    otpType='number'
                    disabled={false}
                    className="otp"
                  />
                  {formik.touched.otp && formik.errors.otp ? (
                    <div className="error">{formik.errors.otp}</div>
                  ) : null}
                </div>
                <div className=' w-100 py-3'>
                  <button type="submit" className=' w-100 btn-otp '>Verify email</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Confirmation;