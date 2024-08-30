import Dashboard from "./Dashboard";

const LayoutDash = ({ children }) => {
  return (
    <div className="">
      <Dashboard>{children}</Dashboard>
    </div>
  );
};

export default LayoutDash;
