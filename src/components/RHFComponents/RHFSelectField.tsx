import React from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { orange } from "@mui/material/colors";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: { label: string; value: string | number }[];
};

const RHFSelectField = <T extends FieldValues>({
  name,
  label,
  options,
}: Props<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <FormControl
      fullWidth
      error={!!errors[name]}
      variant="outlined"
      size="small"
      sx={{
        "& label.Mui-focused": {
          color: orange[700],
        },
        "& label": {
          color: errors[name] && "red",
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
    >
      <InputLabel>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select {...field} label={label} fullWidth defaultValue="">
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {error && (
              <FormHelperText error>{error?.message}</FormHelperText> // Display error text in red
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default RHFSelectField;
