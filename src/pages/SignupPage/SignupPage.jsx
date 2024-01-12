import React from 'react';
import Header from '../../components/header/Header';
import StepperForm from '../../components/SteperForm/StepperForm';
import Footer from '../../components/Footer/Footer';
import Signup from '../../components/SignupForm/signup';
import BannerSignup from '../../components/BannerSignup/BannerSignup';



function SignupPage({ activeStep, nextStep }) {
  return (
    <div className='row'>
      <div className='col-md-6 order-2 order-md-1'>
        <Header />
        <StepperForm activeStep={activeStep} />
        
        <Signup nextStep={nextStep} />
        <Footer />
      </div>
      <div className='col-md-6 Signup-container order-1 order-md-2'>
        <BannerSignup paragraph={"Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes."} Header={"Start turning your ideas into reality."} Source={"../../assets/Stars.png"}/>
      </div>
    </div>
  );
}

export default SignupPage;