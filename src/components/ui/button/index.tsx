import { Link } from "react-router-dom";
import "./style.scss";


const Button = () => {
    return (
      <Link to="#">
        <div className="button flex w-[200px] h-[50px] justify-evenly items-center border p-3 rounded-3xl bg-gray-800">
          <p className="text-white">Aloqada bo'ling</p>
          <i className="fa-solid fa-phone text-white"></i>
        </div>
      </Link>
    );
};

export default Button;