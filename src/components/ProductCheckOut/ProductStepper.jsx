import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import ProductDetail from './ProductDetail';

const steps = [
  'Items',
  'Select Address',
  'Confirm Order',
];
const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ProductDetail/>;
      case 1:
        return <h1>Hello World-2</h1>;
      case 2:
        return <h1>Hello World-3</h1>;
      default:
        return <div>Not Found</div>;
    }
  }
export default function ProductStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const isLastStep = activeStep === steps.length - 1;
  function handleNext() {
      setActiveStep(activeStep + 1);
    }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <React.Fragment>
    <Box sx={{ width: '80%', margin:'20px auto', padding:'5px',backgroundColor: '#F9F9F9'}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    {renderStepContent(activeStep)}
     <Button
     type="submit"
     variant="contained"
     color="primary"
     onClick={handleNext}
   >
     {isLastStep ? 'Place order' : 'Next'}
   </Button>
   </React.Fragment>
  );
}