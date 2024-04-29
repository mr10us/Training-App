import React from "react";
import { PageHeader } from "@components/PageHeader";
import { MainLayout } from "../../../layouts/MainLayout";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Flex, List, Space } from "antd";
import { TrainingTypeList } from "@components/TrainingTypeList";
import { Link } from "react-router-dom";
import { routes } from "@consts";

export const Trainings = () => {
  const trainings = [
    {
      id: 1,
      title: "Тренування ніг",
      time: "12 хв",
      rate: 4.3,
      type: "Новачок",
      img: "/img/testTraining.jpg",
    },
    {
      id: 2,
      title: "Тренування ніг",
      time: "12 хв",
      rate: 4.3,
      type: "Новачок",
      img: "/img/testTraining.jpg",
    },
    {
      id: 3,
      title: "Тренування ніг",
      time: "12 хв",
      rate: 4.3,
      type: "Новачок",
      img: "/img/testTraining.jpg",
    },
    {
      id: 4,
      title: "Тренування ніг",
      time: "12 хв",
      rate: 4.3,
      type: "Новачок",
      img: "/img/testTraining.jpg",
    },
    {
      id: 5,
      title: "Тренування ніг",
      time: "12 хв",
      rate: 4.3,
      type: "Новачок",
      img: "/img/testTraining.jpg",
    },
    {
      id: 6,
      title: "Тренування ніг",
      time: "12 хв",
      rate: 4.3,
      type: "Новачок",
      img: "/img/testTraining.jpg",
    },
  ];

  return (
    <MainLayout style={{ overflowX: "scroll" }}>
      <PageHeader text={"Тренування"} size={"medium"} />
      <div className="mx-4" style={{maxHeight: 600, overflowY: "scroll"}}>
        <List
          size="large"
          dataSource={trainings}

          renderItem={(item) => (
            <Link to={`${routes.ADMIN_TRAININGS}${item.id}`}>
              <div className="p-4 my-4 bg-yellow-50 flex items-center justify-between rounded-lg shadow-md">
                <div className="basis-2/3">
                  <h2>{item.title}</h2>
                  <p>Тип: {item.type}</p>
                </div>
                <div className="basis-1/3">
                  <img
                    className="rounded-md"
                    src={item.img}
                    alt="training image"
                  />
                </div>
              </div>
            </Link>
          )}
        />
      </div>
    </MainLayout>
  );
};
