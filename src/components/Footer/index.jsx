import Dimonde from "../../assets/images/dimonde.jpg";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 gap-14  place-content-center place-items-center bg-white p-10 mt-10 text-black shadow-lg shadow-slate-900 w-full rounded-md">
      <div>
        <h1 className="text-xs font-bold">@Dimonde</h1>
      </div>
      <div>
        <h1 className="whitespace-nowrap text-xs flex items-center ">
          <img src={Dimonde} alt={Dimonde} className="w-[60px] h-[60px]" />
          Dimonde
        </h1>
      </div>
    </div>
  );
};

export default Footer;
