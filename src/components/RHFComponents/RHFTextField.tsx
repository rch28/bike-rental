"use client";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label" | "variant" | "type" | "placeholder">;

const RHFTextField = <T extends FieldValues>({
  name,
  type,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          type={type === "password" && !showPassword ? "password" : "text"}
          error={!!error}
          helperText={error?.message}
          size="small"
          slotProps={{
            input: {
              endAdornment:
                type === "password" ? (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <MdVisibilityOff className="text-lg mr-1" />
                      ) : (
                        <MdVisibility className="text-lg mr-1" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            },
          }}
          sx={{
            "& label.Mui-focused": {
              color: orange[700],
            },
            "& label": {
              color: error && "red",
            },
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor: error ? "red" : orange[500],
              // },
              "&:hover fieldset": {
                borderColor: orange[700],
              },
              "&.Mui-focused fieldset": {
                borderColor: orange[700],
              },
            },
          }}
        />
      )}
    />
  );
};

export default RHFTextField;
