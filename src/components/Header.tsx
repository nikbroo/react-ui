import { useEffect, useState } from "react";
import { IoMdCart, IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import logo from "../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [addShow, setAddShow] = useState(true);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false)
  }, [pathname]);

  return (
    <header>
      {addShow === true && (
        <div className="bg-[url('./assets/images/add.png')] bg-center text-[14px] text-center font-bold py-2 relative">
          QUICK BUY! Get up to 25% off on All Stones
          <IoMdCloseCircleOutline
            className="absolute right-1 top-[30%] cursor-pointer"
            onClick={() => setAddShow(false)}
          />
        </div>
      )}

      <div className="py-4 flex justify-between gap-14 items-center relative container mx-auto px-2">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[160px] h-auto"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="hidden md:flex w-full max-w-[600px] border border-[#DC8064] rounded-sm items-center relative">
          <div className="w-[120px] bg-[#FA5C98] p-1 flex gap-1 items-center h-full px-3 rounded-sm">
            <FaMapMarkerAlt color="white" size={22} />
            <p className="text-white text-[12px] font-medium">
              Deliver to 110094
            </p>
          </div>
          <input
            type="text"
            value={search}
            placeholder="Search for medication & Wellness products.."
            onChange={(e) => setSearch(e.target.value)}
            className="h-full focus:outline-none px-3 text-[12px] font-normal"
            style={{ width: "calc(100% - 160px)" }}
          />
          <LuSearch
            color="#0E276933"
            size={18}
            className="absolute right-4 top-[30%] cursor-pointer"
          />
        </div>

        {/* Drawer Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <IoMdMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        <div className="hidden md:flex gap-10 items-center min-w-[230px]">
          <div className="relative">
            <IoMdCart color="black" size={24} />
            <span className="h-[10px] w-[10px] bg-white rounded-full absolute -top-[2px] right-0 p-[2px]">
              <span className="bg-[#FA5C98] rounded-full h-full w-full block" />
            </span>
          </div>
          <div className="flex items-center gap-3 text-[14px] font-semibold text-[#301F4A] cursor-pointer">
            <GoPerson
              color="white"
              size={34}
              className="p-2 bg-[#FA5C98] rounded-full"
            />
            SIGN IN / SIGN UP
          </div>
        </div>
      </div>

      <div className="bg-white py-3 border-t border-b border-[#F6F6F6]">
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className={`text-[18px] font-semibold hover:text-[#FA5C98] ${
                pathname === "/" ? "text-[#FA5C98]" : "text-[#301F4A]"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`text-[18px] font-semibold hover:text-[#FA5C98] ${
                  pathname.includes("products")
                    ? "text-[#FA5C98]"
                    : "text-[#301F4A]"
                }`}
              >
                Products
              </Link>

              {/* Submenu Level 1 */}
              <div className="absolute hidden group-hover:block top-full left-0 pt-[18px] z-10">
                <div className="bg-white shadow-md rounded-md w-[200px] py-4 text-[16px] font-medium">
                  <div className="relative subGroup">
                    <Link
                      to="/products/dhoop_cones"
                      className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                        pathname.includes("cones")
                          ? "text-[#FA5C98] bg-[#FFEDF461]"
                          : "text-[#301F4A]"
                      }`}
                    >
                      Dhoop Cones
                    </Link>
                    {/* Submenu Level 2 */}
                    <div className="absolute hidden subGroup-hover:block top-0 left-full bg-white shadow-lg border border-gray-200 py-2 w-[200px] z-10">
                      <Link
                        to="/products/chandan_bamboo"
                        className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                          pathname.includes("bamboo")
                            ? "text-[#FA5C98] bg-[#FFEDF461]"
                            : "text-[#301F4A]"
                        }`}
                      >
                        Chandan Bamboo Dhoop
                      </Link>
                      <Link
                        to="/products/backflow_cone"
                        className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                          pathname.includes("cone")
                            ? "text-[#FA5C98] bg-[#FFEDF461]"
                            : "text-[#301F4A]"
                        }`}
                      >
                        Backflow Cone Dhoop
                      </Link>
                      <Link
                        to="/products/buddha_red"
                        className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                          pathname.includes("red")
                            ? "text-[#FA5C98] bg-[#FFEDF461]"
                            : "text-[#301F4A]"
                        }`}
                      >
                        Buddha Red Incense Cone
                      </Link>
                    </div>
                  </div>

                  <Link
                    to="/products/incense_holders"
                    className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                      pathname.includes("holders")
                        ? "text-[#FA5C98] bg-[#FFEDF461]"
                        : "text-[#301F4A]"
                    }`}
                  >
                    Incense Holders
                  </Link>
                  <Link
                    to="/products/yantras"
                    className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                      pathname.includes("yantras")
                        ? "text-[#FA5C98] bg-[#FFEDF461]"
                        : "text-[#301F4A]"
                    }`}
                  >
                    Yantras
                  </Link>
                  <Link
                    to="/products/incense_sticks"
                    className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                      pathname.includes("sticks")
                        ? "text-[#FA5C98] bg-[#FFEDF461]"
                        : "text-[#301F4A]"
                    }`}
                  >
                    Incense Sticks
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/services"
              className={`text-[18px] font-semibold hover:text-[#FA5C98] ${
                pathname.includes("services")
                  ? "text-[#FA5C98]"
                  : "text-[#301F4A]"
              }`}
            >
              Services
            </Link>
          </nav>

          {/* Mobile Drawer Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-md z-50 text-[16px] font-medium">
              <div className="flex flex-col">
                <Link
                  to="/"
                  className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                    pathname.includes("/")
                      ? "text-[#FA5C98] bg-[#FFEDF461]"
                      : "text-[#301F4A]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="relative">
                <Link
                  to="/products"
                  className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                    pathname.includes("products")
                      ? "text-[#FA5C98] bg-[#FFEDF461]"
                      : "text-[#301F4A]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </Link>
                  <div className="pl-4 flex flex-col">
                    <Link
                      to="/products/dhoop_cones"
                      className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                        pathname.includes("cones")
                          ? "text-[#FA5C98] bg-[#FFEDF461]"
                          : "text-[#301F4A]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      Dhoop Cones
                    </Link>
                    <Link
                      to="/products/incense_holders"
                      className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                        pathname.includes("holders")
                          ? "text-[#FA5C98] bg-[#FFEDF461]"
                          : "text-[#301F4A]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      Incense Holders
                    </Link>
                    <Link
                      to="/products/yantras"
                      className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                        pathname.includes("yantras")
                          ? "text-[#FA5C98] bg-[#FFEDF461]"
                          : "text-[#301F4A]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      Yantras
                    </Link>
                    <Link
                      to="/products/incense_sticks"
                      className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                        pathname.includes("sticks")
                          ? "text-[#FA5C98] bg-[#FFEDF461]"
                          : "text-[#301F4A]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      Incense Sticks
                    </Link>
                  </div>
                </div>
                <Link
                  to="/services"
                  className={`block px-4 py-2 text-[#301F4A] hover:bg-[#FFEDF461] ${
                    pathname.includes("services")
                      ? "text-[#FA5C98] bg-[#FFEDF461]"
                      : "text-[#301F4A]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
