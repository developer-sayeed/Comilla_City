import { Link } from "react-router";
import logo from "../assets/logo/dijital union logo.png";

const Header = () => {
  return (
    <>
      {/* Navbar Starts */}
      <nav className="py-3 md:py-4  top-0 w-full !bg-[#fff] shadow-lg ">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* Logo */}
          <Link to="/">
            <img className="h-[45px]" src={logo} alt="Lws" />
          </Link>
          {/* Logo Ends */}
        </div>
      </nav>
      {/* Navbar Ends */}
    </>
  );
};
export default Header;
