

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-4">
      <div>{children}</div>
    </div>
  );
};

export default layout;
