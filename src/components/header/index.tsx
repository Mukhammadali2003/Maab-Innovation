import "./style.scss";
import Nav from "../nav";
import Logo from "../../assets/logo-site.png"
import Button from "../ui/button";
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <header>
          <Nav />
        <div className="container p-2 flex justify-between items-center">
          <div className="right">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="left flex items-center gap-5">
            <Link to="#">
              <p className="text-2xl text-orange-500">+998 97 783 90 45</p>
            </Link>
            <Button />
          </div>
        </div>
      </header>
    );
};

export default Header;