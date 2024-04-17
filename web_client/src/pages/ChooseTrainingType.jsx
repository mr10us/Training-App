import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import BackButton from "@components/UI/BackButton";

export const ChooseTrainingType = () => {
  return (
    <MainLayout>
      <BackButton />
      <p>This is a ChooseTrainingType page</p>
    </MainLayout>
  );
};
