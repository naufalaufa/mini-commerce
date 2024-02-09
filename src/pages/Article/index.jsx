import { Navbar } from "src/components";
import Dimonde from "../../assets/images/dimonde.jpg";
import BreadCumb from "src/components/BreadCumb";

const Article = () => {
  return (
    <>
      <Navbar />
      <div className="p-12">
        <BreadCumb />
        <div className="mt-20 font-bold text-white flex items-center gap-3">
          <img
            src={Dimonde}
            alt={Dimonde}
            className=" w-20 h-20 rounded-full shadow-sm shadow-slate-700"
          />
          <p>Dimonde</p>
        </div>
        <p className="mt-32 text-white">
          Masa Depan Dimonde Saat Dimonde terus mendorong batas dan
          mendefinisikan kembali kemewahan dalam industri fashion, masa depan
          terlihat cerah bagi merek inovatif ini. Dengan rencana untuk
          memperluas pasar baru, meluncurkan kolaborasi menarik, dan lebih
          meningkatkan upaya keberlanjutannya, Dimonde siap meninggalkan jejak
          yang tak terhapuskan dalam dunia fashion untuk tahun-tahun yang akan
          datang. Di dunia di mana gaya dan substansi sering bertabrakan,
          Dimonde berdiri sebagai cahaya harapan, membuktikan bahwa fashion
          mewah dapat menjadi indah dan etis. Dengan komitmennya yang teguh
          terhadap kerajinan, inovasi, dan keberlanjutan, Dimonde bukan hanya
          sekadar merek—ini adalah gerakan yang membentuk ulang masa depan
          fashion, satu kreasi eksklusif pada satu waktu.
        </p>
      </div>
    </>
  );
};

export default Article;
