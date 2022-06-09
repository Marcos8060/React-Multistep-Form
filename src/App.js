import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper,StepLabel, Step } from '@material-ui/core'
import { MultiStepContext } from './Context';
import { useContext } from 'react';
import DisplayData from './components/DisplayData';

function App() {
  const { currentStep,finalData} = useContext(MultiStepContext)
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }
  return (
    <div className="App">
       <h2>Multi Step Form</h2>
       <div className="center-stepper">
       <Stepper style={{ width:'18%'}} activeStep={currentStep -1} orientation='horizontal'>
         <Step>
           <StepLabel></StepLabel>
         </Step>
         <Step>
           <StepLabel></StepLabel>
         </Step>
         <Step>
           <StepLabel></StepLabel>
         </Step>
       </Stepper>
       </div>
       {showStep(currentStep)}
       <DisplayData />
    </div>
  );
}

export default App;
