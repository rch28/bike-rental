import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Option } from "@/types/options";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
};

const RHFToggleBottonGroup = <T extends FieldValues>({
  name,
  options,
}: Props<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...restField } }) => (
        <ToggleButtonGroup
          value={value.length ? value : [options?.[0].id]}
          onChange={(_, newValue) => {
            if (newValue.length) {
              onChange(newValue);
            }
          }}
          {...restField}
        >
          {options?.map((option) => (
            <ToggleButton key={option.id} value={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};

export default RHFToggleBottonGroup;
