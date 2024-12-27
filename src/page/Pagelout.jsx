import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";

const Pagelout = () => {
  return (
    <>
      <div className="w-full xl:w-[90%] m-auto bg-slate-100 min-h-screen h-full overflow-hidden">
        <div className="max-w-7xl mx-auto p-0 ">
          {/* Your content goes here */}
          <Header />
          <Outlet />
          <Footer />
          <FooterMenu />
        </div>
      </div>
    </>
  );
};
export default Pagelout;
