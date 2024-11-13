import { useRef } from "react";
import { useFormContext } from "react-hook-form";

type ImageProps = {
  name: string;
  label: string;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const RHFImageField = ({ name, label, handleImageChange }: ImageProps) => {
  const { register } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold text-gray-700 hidden">
        {label}
      </label>
      <div>
        <label
          htmlFor={name}
          onClick={() => inputRef.current?.click()}
          className="px-4 py-2 text-white bg-primary rounded-md cursor-pointer  hover:bg-orange-500"
        >
          Choose File
        </label>
        <input
          type="file"
          id={name}
          {...register(name)}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default RHFImageField;
