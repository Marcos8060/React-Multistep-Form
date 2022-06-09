import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../Context";

function FirstStep() {
  const { setCurrentStep,userData,setUserData } = useContext(MultiStepContext)
  return (
    <div>
      <div>
        <TextField
          value={userData['firstname']}
          onChange={(e)=> setUserData({...userData, 'firstname': e.target.value})}
          label="First name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          value={userData['lastname']}
          onChange={(e)=> setUserData({...userData, 'lastname': e.target.value})}
          label="Last name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          value={userData['contact']}
          onChange={(e)=> setUserData({...userData, 'contact': e.target.value})}
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
