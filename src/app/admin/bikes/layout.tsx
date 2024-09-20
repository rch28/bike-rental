import BikeTab from "@/components/Admin/BikeTab";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-4">
      <BikeTab/>
      <div>{children}</div>
    </div>
  );
};

export default layout;
