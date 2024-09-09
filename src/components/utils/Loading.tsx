import { PiSpinnerGap } from "react-icons/pi";

interface LoadingProps {
  className?: string;
}

const Loading = ({className}:LoadingProps) => {
  return (
    <>
      <PiSpinnerGap  className={`animate-spin  text-4xl ${className} `} />
    </>
  );
};

export default Loading;
