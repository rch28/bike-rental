"use client";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { orange } from "@mui/material/colors";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label" | "variant" | "type" | "placeholder">;

const RHFNumberField = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          type={"number"}
          error={!!error}
          size="small"
          helperText={error?.message}
          onWheel={(e) => e.currentTarget.blur()}
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

export default RHFNumberField;
