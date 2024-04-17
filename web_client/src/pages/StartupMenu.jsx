import { Link } from "react-router-dom";
import { routes } from "@consts";

export const StartupMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Добро пожаловать в фитнес-приложение!</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="btn-grid" onClick={() => console.log('Выбрана тренировка')}>
          Выбрать тренировку
        </button>
        <button className="btn-grid" onClick={() => console.log('Калькулятор калорий')}>
          Калькулятор калорий
        </button>
        <button className="btn-grid" onClick={() => console.log('Настройки')}>
          Настройки
        </button>
        <button className="btn-grid" onClick={() => console.log('Выход')}>
          Выйти
        </button>
      </div>
    </div>
  );
};
