import { NavLink } from "react-router-dom";

const LandingHome = () => {
  return (
    <>
      <div>
        <div className="grid  max-w-[400px]">
          <h1 className="text-4xl text-white font-bold">
            <span className="bg-yellow-500 mr-1 underline   p-2 rounded-md shadow-sm shadow-slate-700">
              N
            </span>
            aufal commerce
          </h1>
          <p className="my-10 text-black">
            Selamat datang di toko online mini kami! Temukan keindahan dalam
            setiap klik. Kecil dalam ukuran, besar dalam pilihan! Lihat koleksi
            kami sekarang Bawa pulang kebahagiaan dengan belanja mudah di mini
            e-commerce kami.
          </p>
          <NavLink
            to="/signin"
            className="bg-blue-500 text-white w-full p-2 rounded-md max-w-[200px] text-center hover:bg-black hover:text-white font-bold duration-75"
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LandingHome;
