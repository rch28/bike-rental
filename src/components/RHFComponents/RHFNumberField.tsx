"use client";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { orange } from "@mui/material/colors";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label" | "variant" | "placeholder">;

const RHFNumberField = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric characters
    const value = event.target.value.replace(/\D/g, "");
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
            const value = e.target.value;
            field.onChange(value);
          }}
          value={field.value || ""}
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

export default RHFNumberField;
