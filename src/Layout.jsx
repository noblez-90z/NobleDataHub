import Header from "./HomeComponenet/Header";
import Footer from "./HomeComponenet/Homepages/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
