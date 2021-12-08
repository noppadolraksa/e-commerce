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
          minLength: {
            value: floor,
            message: inputName + " must be at least " + floor + " characters",
          },
          maxLength: {
            value: ceil,
            message: inputName + " has " + ceil + " characters limit",
          },
          pattern: {
            value: /^\d+$/,
            message: inputName + " only contain letters numbers",
          },
        }}
      />
    </span>
  );
};

export default Input1;
