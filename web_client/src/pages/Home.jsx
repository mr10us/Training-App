import { useTelegram } from "@hooks/useTelegram";
import { MainLayout } from "../layouts/MainLayout";
import React from "react";
import { MenuButtons } from "@components/MenuButtons";

export const Home = () => {
  const { user } = useTelegram();

  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen">
        <MenuButtons />
      </div>
    </MainLayout>
  );
};
