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
  floor,
  ceil,
  password,
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
            type="password"
          />
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: inputName + " required..",
          validate: {
            validate: (value) =>
              value === password || "the passwords do not match",
          },
        }}
      />
    </span>
  );
};

export default Input1;
