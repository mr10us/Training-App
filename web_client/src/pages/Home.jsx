import { useTelegram } from "@hooks/useTelegram";
import { MainLayout } from "../layouts/MainLayout";
import React from "react";
import { MenuButtons } from "@components/MenuButtons";

export const Home = () => {
  const { user } = useTelegram();
  const image = user?.photo_url || null;
  const name = user ? user?.first_name || user?.username : "друже";

  return (
    <MainLayout>
      {user?.photo_url}
      <div className="flex flex-col justify-between h-screen">
        <div className="pt-8 px-4">
          {image ? (
            <img
              className="size-16 object-contain"
              src={image}
              alt="user image"
            />
          ) : (
            <div className="bg-brand-dark flex justify-center items-center rounded-full size-16 mb-3">
              <p className="text-gray-100 text-2xl font-bold">
                {name[1].toUpperCase()}
              </p>
            </div>
          )}
          <p className="text-gray-100 py font-bold text-4xl">
            Привіт, <br />
            <span className="text-6xl text-yellow-300 ml-4">{name}</span>!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <MenuButtons />
        </div>
      </div>
    </MainLayout>
  );
};
