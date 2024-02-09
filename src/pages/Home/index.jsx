import { useQuery } from "@tanstack/react-query";
import { Button, Carousel, Spin, message } from "antd";
import axios from "axios";
import { Footer, Navbar } from "src/components";
import { FaCartPlus } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import Cookies from "js-cookie";
import Dimonde from "../../assets/images/dimonde.jpg";
import { useGlobalContext } from "src/context";
import BreadCumb from "src/components/BreadCumb";

const Home = () => {
  const navigate = useNavigate();
  const { data: dataProduct, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    },
  });

  console.log(dataProduct);

  const { value, count, setCount } = useGlobalContext();
  console.log(count, value);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/signin");
    window.location.reload();
  };

  message.config({
    top: 150,
  });

  if (isLoading)
    return (
      <>
        <Spin
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
            placeItems: "center",
          }}
        />
      </>
    );

  const handleAddToCart = (payload) => {
    message.success(`Add ${payload}  to cart`);
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <section>
          <Navbar />
        </section>
        <section className="p-3">
          <div className="mt-10 absolute top-[77px] lg:hidden flex items-center gap-2">
            <input className="p-2 rounded outline-none" placeholder="Search" />
            <span className="bg-yellow-500 p-3 rounded-md shadow-sm shadow-slate-800">
              <BsSearch />
            </span>
          </div>
          <BreadCumb />
          <Carousel
            speed={500}
            autoplaySpeed={1300}
            autoplay={true}
            className=" mt-40 min-w-[200px]  max-h-[200px] m-auto relative"
          >
            <div>
              <div className="bg-white text-black p-10">
                <h1 className="text-sm sm:text-4xl font-bebasNeue">
                  <img
                    src={Dimonde}
                    alt={Dimonde}
                    className="w-[50px] h-[50px] rounded-full border border-black shadow-md shadow-slate-700"
                  />
                  Dimonde
                </h1>
                <p className="mt-3">Temukan Gaya Sesuai Fashion anda!!!</p>
                <p>
                  Ciptakan momen tak terlupakan dengan produk pilihan dari toko
                  online mini kami
                </p>
              </div>
            </div>
            <div className="bg-white text-black p-10">
              <h1 className="text-sm sm:text-4xl font-bebasNeue ">
                <img
                  src={Dimonde}
                  alt={Dimonde}
                  className="w-[50px] h-[50px] rounded-full border border-black shadow-md shadow-slate-700"
                />
                Dimonde
              </h1>
              <p className="mt-4">
                Kami tahu apa yang Anda butuhkan. Mini e-commerce kami siap
                memenuhi keinginan Anda.
              </p>
            </div>
            <div className="bg-white text-black p-10">
              <h1 className="text-sm sm:text-4xl font-bebasNeue">
                <img
                  src={Dimonde}
                  alt={Dimonde}
                  className="w-[50px] h-[50px] border-black shadow-md shadow-slate-700 border rounded-full"
                />
                Dimonde
              </h1>
              <p className="mt-5">
                Dari gaya sehari-hari hingga kebutuhan khusus, semuanya ada di
                sini!
              </p>
            </div>
          </Carousel>
        </section>
        <section className="grid grid-cols-3 place-content-center place-items-center gap-5 mt-7">
          <div
            onClick={handleLogout}
            className="p-2 bg-gradient-to-r from-slate-100  to-blue-100 px-7 rounded-lg shadow-md shadow-slate-800  cursor-pointer hover:bg-black "
          >
            <CgLogOut size={20} />
          </div>
          <div className="p-2 bg-gradient-to-r  from-slate-100  to-blue-100 px-7 rounded-lg shadow-md shadow-slate-800 cursor-pointer hover:bg-black ">
            <FaHome size={20} />
          </div>
          <NavLink
            to="/cart"
            className="p-2 bg-gradient-to-r relative  from-slate-100  to-blue-500 px-7 rounded-lg shadow-slate-800 shadow-md cursor-pointer hover:bg-black "
          >
            <FaShoppingCart size={20} />
            <div className="w-8 h-8 rounded-full grid place-content-center font-bold top-[-10px] right-[-10px] bg-white shadow-sm shadow-slate-800 absolute">
              {count}
            </div>
          </NavLink>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-3 p-2 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
            {dataProduct?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mt-32 bg-white p-2 shadow-md shadow-slate-500 rounded-md"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.image}
                      className="max-w-[200px] m-auto object-contain aspect-square"
                    />
                    <div>
                      <p className="mt-4 my-5 font-bold">{item.title}</p>
                      <p className="font-bold">{item.category.toUpperCase()}</p>
                      <div className="my-3">
                        <p className="font-bold">${item.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={() => handleAddToCart(item.title)}
                      className="bg-blue-600  text-white my-2 flex items-center gap-3"
                    >
                      Add to cart
                      <span>
                        <FaCartPlus />
                      </span>
                    </Button>
                    <NavLink
                      to={`detail/${item.id}`}
                      className="border border-black p-2 whitespace-nowrap hover:border-blue-400 hover:text-blue-500 text-sm rounded-md"
                    >
                      Detail Product
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
