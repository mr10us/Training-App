import { Link } from "react-router-dom";
import { routes } from "@consts";
import logoBird from "/img/logo-bird.png";

export const StartupMenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-orange-700 flex items-center justify-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-lg">
        <div className="text-center">
          <img src={logoBird} alt="Logo bird" className="h-40 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Вітаємо у Грифф
          </h1>
          <p className="text-gray-600 mb-6">
            Я Ваш віртуальний тренер і готовий вести Вас до нових перемог
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            className="bg-orange-500 text-white text-center px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none"
            to={routes.HOME}
          >
            Почати тренування
          </Link>
        </div>
      </div>
    </div>
  );
};
