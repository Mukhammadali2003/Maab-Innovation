import "./style.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="pr-5">
      <div className="container flex gap-20 justify-end items-center p-2">
        <div className="icons flex gap-3 text-xl">
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
        <select name="" id="">
          <option value="UZB">Uzbek</option>
          <option value="RU">Russian</option>
          <option value="ENG">English</option>
        </select>
      </div>
    </nav>
  );
}

export default Nav;
