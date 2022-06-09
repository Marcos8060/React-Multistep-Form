import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../Context";


function ThirdStep() {
  const { setCurrentStep,userData,setUserData,submitData } = useContext(MultiStepContext)

  return (
    <div>
      <div>
        <TextField
          value={userData['city']}
          onChange={(e)=> setUserData({...userData, 'city': e.target.value})}
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          value={userData['landmark']}
          onChange={(e)=> setUserData({...userData, 'landmark': e.target.value})}
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          value={userData['postalcode']}
          onChange={(e)=> setUserData({...userData, 'postalcode': e.target.value})}
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
        <Button onClick={submitData} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default ThirdStep;
