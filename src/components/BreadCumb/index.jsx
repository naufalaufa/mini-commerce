import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const BreadCumb = () => {
  const items = [
    {
      title: (
        <>
          <NavLink to="/" className="text-white bg-white p-2 text-black">
            Home
          </NavLink>
        </>
      ),
    },
    {
      title: (
        <>
          <NavLink to="/article" className="text-white bg-white p-2 text-black">
            Article
          </NavLink>
        </>
      ),
    },
  ];
  return (
    <>
      <Breadcrumb items={items} className="mt-44 cursor-pointer inline-block" />
    </>
  );
};

export default BreadCumb;
