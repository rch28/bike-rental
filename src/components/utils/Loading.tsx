import { PiSpinnerGap } from "react-icons/pi";

interface LoadingProps {
  className?: string;
  msg?: string;
}

const Loading = ({ className, msg }: LoadingProps) => {
  return (
    <span className="flex gap-2 items-center justify-center">
      <PiSpinnerGap className={`animate-spin  text-4xl ${className} `} />
      <span className="text-center">{msg}</span>
    </span>
  );
};

export default Loading;
