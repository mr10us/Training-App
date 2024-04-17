import { useTelegram } from "@hooks/useTelegram";
import { MainLayout } from "../layouts/MainLayout";
import React from "react";
import { MenuButtons } from "@components/MenuButtons";

export const Home = () => {
  const { user } = useTelegram();

  const name = user ? user?.first_name || user?.username : "друже";

  return (
    <MainLayout>
      <div>
        <p className="text-gray-100">Привіт, {name}</p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <MenuButtons />
      </div>
    </MainLayout>
  );
};
