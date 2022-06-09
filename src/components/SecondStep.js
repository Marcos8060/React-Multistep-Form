import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../Context";


function SecondStep() {
  const { setCurrentStep,userData,setUserData } = useContext(MultiStepContext)
  return (
    <div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
      <Button onClick={()=> setCurrentStep(1)} variant="contained" color="secondary">
          Back
        </Button><span> </span>
        <Button onClick={()=> setCurrentStep(3)} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default SecondStep;
