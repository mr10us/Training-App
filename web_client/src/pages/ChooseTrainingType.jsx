import { MainLayout } from "../layouts/MainLayout";
import { Navigation } from "@components/UI/Navigation";
import { TrainingTypeList } from "@components/TrainingTypeList";
import { FaArrowLeft, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ChooseTrainingType = () => {
  return (
    <MainLayout>
      <div className="flex justify-between m-6 items-center">
        <div>
          <Link to={-1}>
            <FaArrowLeft size={"1.5rem"} className="text-yellow-200" />
          </Link>
        </div>
        <div>
          <p className="text-brand-dark font-bold text-4xl">GRIFF</p>
        </div>
        <div>
          <FaSort size={"1.5rem"} className="text-yellow-200" />
        </div>
      </div>
      <div className="h-5/6">
        <TrainingTypeList>
          <Link to={"7"}>
            <TrainingTypeList.Item
              title={"Тренування ніг"}
              time={"12 хв"}
              rate={4.3}
              type={"Новачок"}
              img={"/img/testTraining.jpg"}
            />
          </Link>
          <TrainingTypeList.Item
            title={"Тренування рук"}
            time={"322 хв"}
            rate={5}
            type={"Спортсмен"}
            img={"/img/testTraining.jpg"}
          />
          <TrainingTypeList.Item
            title={"Тренування грудей"}
            time={"666 хв"}
            rate={5}
            type={"Середній"}
            img={"/img/testTraining.jpg"}
          />
          <TrainingTypeList.Item
            title={"Тренування на все тіло"}
            time={"180 хв"}
            rate={5}
            type={"Новачок"}
            img={"/img/testTraining.jpg"}
          />
          <TrainingTypeList.Item
            title={"Кардіо"}
            time={"32 хв"}
            rate={5}
            type={"Новачок"}
            img={"/img/testTraining.jpg"}
          />
        </TrainingTypeList>
      </div>
      <div className="h-1/6">
        <Navigation>
          <Navigation.Item>
            <p className="text-gray-100 font-bold text-xl">Фільтрувати</p>
          </Navigation.Item>
        </Navigation>
      </div>
    </MainLayout>
  );
};
