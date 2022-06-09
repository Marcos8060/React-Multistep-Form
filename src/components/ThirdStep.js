import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../Context";


function ThirdStep() {
  const { setCurrentStep,userData,setUserData } = useContext(MultiStepContext)

  return (
    <div>
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
      <Button onClick={()=> setCurrentStep(2)} variant="contained" color="secondary">
          Back
        </Button><span> </span>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default ThirdStep;
