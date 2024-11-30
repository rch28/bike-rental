import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { orange, grey } from "@mui/material/colors";
import { FormHelperText } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  size?: "small" | "medium";
};

const RHFDateTimePicker = <T extends FieldValues>({
  name,
  label,
  size = "small",
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="flex flex-col">
            <DateTimePicker
              label={label}
              {...field}
              sx={{
                "& label.Mui-focused": {
                  color: orange[700],
                },
                "& label": {
                  color: error && "red",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: size === "medium" ? "8px" : "4px",
                  "& fieldset": {
                    borderColor: error ? "red" : grey[400],
                  },
                  "&:hover fieldset": {
                    borderColor: orange[700],
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: orange[700],
                  },
                },
              }}
            />
            {error && (
              <FormHelperText error className="pl-4">
                {error.message}
              </FormHelperText>
            )}
          </div>
        </LocalizationProvider>
      )}
    />
  );
};

export default RHFDateTimePicker;
