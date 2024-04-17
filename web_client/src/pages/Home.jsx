import { useTelegram } from "@hooks/useTelegram";
import React from "react";
import { FaDumbbell, FaCalculator, FaCog, FaSignOutAlt } from "react-icons/fa"; // Пример использования иконок из библиотеки Font Awesome

export const Home = () => {
  const { tg } = useTelegram();

  console.log(typeof tg);
  console.log(tg)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8"></h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          className="btn-grid"
          onClick={() => console.log("Выбрана тренировка")}
        >
          <FaDumbbell className="icon" /> Выбрать тренировку
        </button>
        <button
          className="btn-grid"
          onClick={() => console.log("Калькулятор калорий")}
        >
          <FaCalculator className="icon" /> Калькулятор калорий
        </button>
        <button className="btn-grid" onClick={() => console.log("Настройки")}>
          <FaCog className="icon" /> Настройки
        </button>
        <button className="btn-grid" onClick={() => console.log("Выход")}>
          <FaSignOutAlt className="icon" /> Выйти
        </button>
      </div>
    </div>
  );
};
