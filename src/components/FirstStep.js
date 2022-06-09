import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../Context";

function FirstStep() {
  const { setCurrentStep,userData,setUserData } = useContext(MultiStepContext)
  return (
    <div>
      <div>
        <TextField
          label="First name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Last name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Contact"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <Button onClick={()=> setCurrentStep(2)} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default FirstStep;
