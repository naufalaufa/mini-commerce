import { useState } from "react";
import { Menu } from "antd";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SideMenu = () => {
  const deleteCookies = () => {
    Cookies.remove("auth");
    window.location.reload();
    navigate("/signin");
  };
  const items = [
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      icon: <RxDashboard />,
    },
    {
      label: <Link to="/inventory">Inventory</Link>,
      icon: <MdOutlineInventory2 />,
    },
    {
      label: <Link to="/user">User</Link>,
      icon: <FaUser />,
    },
    {
      label: <Link onClick={deleteCookies}>Logout</Link>,
      icon: <TbLogout2 />,
    },
  ];

  const navigate = useNavigate();
  const [current, setCurrent] = useState("Home");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div
      className="SideMenu"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        position: "fixed",
      }}
    >
      <Menu
        style={{ display: "grid", textAlign: "center" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
      />
    </div>
  );
};
export default SideMenu;
