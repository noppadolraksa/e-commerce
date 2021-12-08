import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const Input1 = ({
  control,
  defaultValue,
  errors,
  inputName,
  inputStyle,
  name,
}) => {
  return (
    <span>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            style={inputStyle}
            size="small"
            variant="outlined"
            label={inputName}
          />
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: inputName + " required..",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: inputName + " is not corrected",
          },
        }}
      />
    </span>
  );
};

export default Input1;
