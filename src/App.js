import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper,StepLabel, Step } from '@material-ui/core'

function App() {

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
       <Stepper style={{ width:'18%'}} activeStep='1' orientation='horizontal'>
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
       {showStep(1)}
    </div>
  );
}

export default App;
