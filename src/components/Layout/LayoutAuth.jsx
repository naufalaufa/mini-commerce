import { Carousel, Col, Row } from "antd";
import PropTypes from "prop-types";
import Image1 from "../../assets/images/fashion-1.jpg";
import Image2 from "../../assets/images/fashion-2.jpg";
import Image3 from "../../assets/images/fashion-3.jpg";
import Dimonde from "../../assets/images/dimonde.jpg";

const LayoutAuth = ({ children }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col
        span={12}
        style={{
          margin: "auto",
          display: "grid",
          height: "100vh",
          color: "black",
          placeContent: "center",
        }}
      >
        {children}
      </Col>
      <Col
        className="hidden sm:inline-block"
        span={12}
        style={
          {
            // display: "grid",
            // height: "100vh",
            // margin: "auto",
            // placeContent: "center",
            // placeItems: "center",
            // gap: "10px",
          }
        }
      >
        <Carousel autoplay autoplaySpeed={1500}>
          <div className="relative">
            <div className="flex items-center gap-2 px-4 mx-4 my-4 duration-75 absolute font-bold  whitespace-nowrap bg-white p-4 rounded  text-sm shadow-md shadow-slate-600 hover:bg-blue-600 hover:text-white cursor-pointer">
              <h1>Dimonde</h1>
              <img
                src={Dimonde}
                alt={Dimonde}
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>

            <p className="absolute bottom-[320px] p-4 max-w-[500px] text-white">
              Temukan gaya dan kenyamanan di ujung jari Anda dengan Naufal
              Commerce, destinasi belanja online terpercaya untuk kebutuhan gaya
              hidup Anda. Kami menyajikan koleksi produk terbaik dengan kualitas
              premium dan harga yang terjangkau. 🛍️ Pilihan Produk Menarik:
            </p>
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "550px",
                objectFit: "cover",
              }}
              src={Image1}
              alt={Image1}
            />
          </div>
          <div className="relative">
            <div className="font-bold flex items-center gap-2 whitespace-nowrap mx-5 my-4 shadow-sm shadow-slate-500 absolute bg-white p-4 rounded text-sm hover:text-white hover:bg-blue-600 cursor-pointer">
              <h1>Dimonde</h1>
              <img
                src={Dimonde}
                alt={Dimonde}
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <p className="absolute bottom-[320px] max-w-[500px] text-white p-2 shadow-sm shadow-slate-700 bg-black/20 mx-2 rounded-md">
              Dari fashion tren terkini hingga peralatan rumah tangga yang
              inovatif, Naufal Commerce memiliki semua yang Anda butuhkan.
              Temukan pakaian stylish, sepatu nyaman, aksesori yang memikat, dan
              masih banyak lagi. Jelajahi kategori kami yang beragam
            </p>
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "550px",
                objectFit: "cover",
              }}
              src={Image2}
              alt={Image2}
            />
          </div>
          <div className="relative">
            <div className="font-bold whitespace-nowrap flex items-center gap-2  mx-5 my-4 shadow-sm shadow-slate-500 absolute bg-white p-4 rounded text-sm hover:text-white hover:bg-blue-600 cursor-pointer">
              <h1>Dimonde</h1>
              <img
                src={Dimonde}
                alt={Dimonde}
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <p className="absolute bottom-[320px] max-w-[500px] text-white p-2 shadow-sm shadow-slate-700 bg-black/20 mx-2 rounded-md">
              Nikmati pengalaman belanja online yang menyenangkan dan aman di
              [Nama Toko]. Temukan produk unggulan kami dan tingkatkan gaya
              hidup Anda hari ini!
            </p>
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "550px",
                objectFit: "cover",
              }}
              src={Image3}
              alt={Image3}
            />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.node,
};

export default LayoutAuth;
