import React from "react";
import { Button, TextField } from "@material-ui/core";

function SecondStep() {
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
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default SecondStep;
