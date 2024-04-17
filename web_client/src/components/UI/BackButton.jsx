import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to={-1} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
      Назад
    </Link>
  );
};

export default BackButton;
