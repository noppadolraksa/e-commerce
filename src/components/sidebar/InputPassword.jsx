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
            type="password"
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
            value: /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]/i,
            message:
              inputName +
              " should be included at least 1 uppercase and 1 number ",
          },
        }}
      />
    </span>
  );
};

export default Input1;
