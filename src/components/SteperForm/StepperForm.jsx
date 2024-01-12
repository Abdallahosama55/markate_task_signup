import React from 'react'
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
function StepperForm({activeStep}) {
  return (
    <div>
    
    <Stepper activeStep={activeStep}>
                <Step>
                  <StepLabel>First</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Second</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Third</StepLabel>
                </Step>
              </Stepper>
    
    </div>
  )
}

export default StepperForm