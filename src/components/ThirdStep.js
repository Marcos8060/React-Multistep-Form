import React from "react";
import { Button, TextField } from "@material-ui/core";

function ThirdStep() {
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
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default ThirdStep;
