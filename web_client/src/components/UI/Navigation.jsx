import { routes } from "@consts";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navigation = ({ children }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand p-2 w-1/2 h-12 flex justify-center items-center rounded-2xl">
      {children}
    </div>
  );
};

Navigation.Home = () => {
  return (
    <Link to={routes.HOME}>
      <FaHome size={"1.5rem"} className="text-yellow-200"/>
    </Link>
  );
};
