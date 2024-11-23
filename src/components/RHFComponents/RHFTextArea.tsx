import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { InputLabel, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
import { orange } from "@mui/material/colors";

// Styled TextareaAutosize with custom styles
const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  minHeight: 60,
  padding: "8px 12px",
  borderRadius: "4px",
  border: "1px solid #C7D0DD", // Default border color
  outline: "none", // Remove default outline
  "&:hover": {
    borderColor: orange[700], // Border color on hover
  },
  "&:focus": {
    borderColor: orange[700], // Focus border color
    boxShadow: `0 0 0 1px ${orange[200]}`, // Optional: add a box shadow for focus
  },
  "&.Mui-error": {
    borderColor: "red", // Red border for errors
  },
  "&:focus.Mui-error": {
    borderColor: "red", // Ensure error border is applied on focus
    boxShadow: `0 0 0 1px red`, // Optional: add box shadow for error focus
  },
  // Additional style for the label, if you want to customize that as well
  "& .MuiInputLabel-root": {
    color: "#6B7280", // Default label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: orange[700],
  },
}));

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const RHFTextArea = <T extends FieldValues>({
  name,
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <InputLabel>{label}</InputLabel>
          <StyledTextArea
            {...field}
            {...props}
            placeholder="Write your comments."
            className="mt-1 p-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </>
      )}
    />
  );
};

export default RHFTextArea;
