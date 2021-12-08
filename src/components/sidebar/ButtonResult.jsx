import React from "react";
import Button from "@mui/material/Button";

const ButtonResult = ({ isFetching }) => {
  return (
    <Button
      variant="contained"
      type="submit"
      color="primary"
      sx={{ width: 100 }}
      disabled={isFetching}
    >
      SUBMIT
    </Button>
  );
};

export default ButtonResult;
