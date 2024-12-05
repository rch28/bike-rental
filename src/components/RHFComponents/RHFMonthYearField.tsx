"use client";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { orange } from "@mui/material/colors";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label" | "variant" | "placeholder">;

const RHFMonthYearField = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Format the input to "MM/YYYY"
    let value = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2); // Add "/" after the month
    }
    event.target.value = value;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          type="text"
          error={!!error}
          helperText={error?.message}
          size="small"
          autoComplete="off"
          onInput={handleInputChange}
          onChange={(e) => {
            // Update the value, preserving the "MM/YYYY" format
            const value = e.target.value
              ? e.target.value.replace("/", "") // Remove separator for internal value
              : "";
            field.onChange(value);
          }}
          sx={{
            "& label.Mui-focused": {
              color: orange[700],
            },
            "& label": {
              color: error ? "red" : undefined,
            },
            "& .MuiOutlinedInput-root": {
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

export default RHFMonthYearField;
