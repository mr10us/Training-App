import { Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import BackButton from "@components/UI/BackButton";

export const Settings = () => {
  return (
    <MainLayout>
      This is a Settings page <BackButton />
    </MainLayout>
  );
};
