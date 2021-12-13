import React from "react";
import { Controller } from "react-hook-form";

const TextAreaAddress = ({
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
    <fieldset style={{ width: 200, color: "#555" }}>
      <Controller
        render={({ field }) => (
          <textarea
            {...field}
            style={{ width: 500, border: "none", minHeight: "100px" }}
            placeholder="fill the address here.."
          />
        )}
        defaultValue={defaultValue}
        name={name}
        control={control}
        rules={{
          required: "you must specify " + inputName,
          minLength: {
            value: floor,
            message: inputName + " must be at least " + floor + " characters",
          },
          maxLength: {
            value: ceil,
            message: inputName + " has " + ceil + " characters limit",
          },
        }}
      />
    </fieldset>
  );
};

export default TextAreaAddress;
