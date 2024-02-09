import { Button, Drawer } from "antd";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Dimonde from "../../assets/images/dimonde.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showDrawer = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header className="flex justify-between p-4 fixed left-0 right-0 bg-black z-[99999]">
        <div className="flex items-center gap-5">
          <h1 className="whitespace-nowrap font-bebasNeue hidden md:flex md:items-center md:gap-2 text-xs sm:text-md text-white">
            <img
              src={Dimonde}
              alt={Dimonde}
              className="w-[50px] rounded-full h-[50px]"
            />
            Dimonde
          </h1>
        </div>
        <div className="flex gap-5">
          <div className=" rounded-lg flex items-center">
            <input
              className="outline-none hidden md:inline-block ml-3 bg-none p-2  rounded-md mr-1 max-w-[200px]"
              placeholder="Search"
            />
            <BsSearch className="bg-yellow-500 hidden md:inline-block text-white w-10 h-10 p-2 rounded-md border-black border shadow-md shadow-slate-500 cursor-pointer " />
          </div>
        </div>
        <section className="mt-5 text-white w-full h-full flex justify-between place-content-center place-items-center sm:hidden gap-2">
          <h1 className="whitespace-nowrap text-sm flex items-center gap-2 ">
            <img
              src={Dimonde}
              alt={Dimonde}
              className="w-[50px] h-[50px] rounded-full"
            />
            Dimonde
          </h1>
          <div>
            <Button className="bg-blue-400 text-white" onClick={showDrawer}>
              <IoIosArrowBack />
            </Button>
            <Drawer
              className="inline-block lg:hidden mt-[100px] "
              onClose={onClose}
              open={isModalOpen}
            >
              <NavLink
                to="/article"
                className="hover:text-blue-600 cursor-pointer"
              >
                Tentang Dimonde
              </NavLink>
            </Drawer>
          </div>
        </section>
      </header>
      <section className="fixed top-[70px] p-2 hidden md:flex cursor-pointer  md:justify-end right-0 left-0 z-[99999] text-sm text-white justify-end bg-[#b7e026] shadow-sm shadow-slate-700">
        <p className="hover:text-blue-100 text-black">Tentang Dimonde</p>
      </section>
    </>
  );
};

export default Navbar;
