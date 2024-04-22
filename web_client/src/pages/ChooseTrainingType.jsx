import { Rating } from "@components/UI/Rating";
import { MainLayout } from "../layouts/MainLayout";
import { Navigation } from "@components/UI/Navigation";

export const ChooseTrainingType = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-12 h-full overflow-y-scroll m-4">
        <div className="p-6 bg-yellow-50 flex items-center justify-between rounded-lg">
          <div className="basis-2/3">
            <h2>Title</h2>
            <p>Час виконання</p>
            <p>Тип</p>
            <Rating rating={4} />
          </div>
          <div className="basis-1/3">
            <img
              className="rounded-md"
              src="/img/testTraining.jpg"
              alt="training image"
            />
          </div>
        </div>
        <div className="p-6 bg-yellow-50 flex items-center justify-between rounded-lg">
          <div className="basis-2/3">
            <h2>Title</h2>
            <p>Час виконання</p>
            <p>Тип</p>
            <Rating rating={4} />
          </div>
          <div className="basis-1/3">
            <img
              className="rounded-md"
              src="/img/testTraining.jpg"
              alt="training image"
            />
          </div>
        </div>
      </div>
      <Navigation>
        <Navigation.Home />
      </Navigation>
    </MainLayout>
  );
};
