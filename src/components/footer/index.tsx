import "./style.scss";
import LOGO from "../../assets/logo-site.png"
import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className="bg-black pt-20 pb-20 mt-[150px] ">
        <div className="container p-5 text-white bg-gray-500 rounded-3xl flex justify-between ">
          <div className="first w-[22%] flex flex-wrap gap-5">
            <img src={LOGO} alt="" className="w-[300px]" />
            <p className="text-3xl">+998 90 710 71 01</p>
            <div className="icons flex gap-10 text-xl">
              <Link to="https://t.me/maabinnovation">
                <i className="fa-brands fa-telegram"></i>
              </Link>
              <Link to="https://www.instagram.com/maab.academy/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="https://www.linkedin.com/company/maab-innovation-llc/">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </div>
          </div>
          <div className="second w-[22%]">
            <h2 className="text-2xl">Kurslarimiz</h2>
            <br />
            <div className="wrapper flex flex-wrap gap-5">
              <p className="w-[100%]">DATA Analytics</p>
              <p className="w-[100%]">DATA Engineer</p>
              <p className="w-[100%]">Cloud data Engineer</p>
            </div>
          </div>
          <div className="third w-[22%]">
            <h2 className="text-2xl">MANYULAR</h2>
            <br />
            <div className="wrapper flex flex-wrap gap-5">
              <p className="w-[100%]">Grantlar</p>
              <p className="w-[100%]">Sertifikatlar</p>
              <p className="w-[100%]">Ustozlar</p>
            </div>
          </div>
          <div className="fourth w-[22%]">
            <h2 className="text-2xl">BIZ BILAN BOG'LANING</h2>
            <br />
            <div className="wrapper flex flex-wrap gap-5">
              <p className="w-[100%]">
                <i className="fa-solid fa-location-dot"></i> tashkent, Mirabad
                district,Oybek 18/1 ATRIUM, Business Center 5th floor-1
              </p>
              <p className="w-[100%]">
                <i className="fa-solid fa-envelope"></i> info@maab.uz
              </p>
              <p className="w-[100%]">
                <i className="fa-solid fa-phone"></i> +998 90 710 71 01
              </p>
            </div>
          </div>
        </div>

        <div className="container text-white pt-10 flex justify-between items-center">
            <h1>2023 MAAB INNOVATION</h1>
            <p>Dizaynerlar: Mazmoon  | Dasturchilar: UniFS</p>
        </div>
      </footer>
    );
};

export default Footer;