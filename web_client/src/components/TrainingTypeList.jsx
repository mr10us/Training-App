import { Rating } from "@mui/material";

export const TrainingTypeList = ({ children }) => {
  return (
    <div className="flex flex-col gap-5 overflow-y-scroll h-full m-4 scroller">
      {children}
    </div>
  );
};

TrainingTypeList.Item = ({ title, time, rate, type, img }) => {
  return (
    <div className="p-6 bg-yellow-50 flex items-center justify-between rounded-lg shadow-md">
      <div className="basis-2/3">
        <h2>{title}</h2>
        <p>Час виконання: {time}</p>
        <p>Тип: {type}</p>
        <div className="flex">
          <Rating value={rate} readOnly precision={0.1} />
          <p className="ml-1">{rate}</p>
        </div>
      </div>
      <div className="basis-1/3">
        <img className="rounded-md" src={img} alt="training image" />
      </div>
    </div>
  );
};
