const sizes = {
  LARGE: (title) => (
    <h1 className="text-gray-100 font-bold text-3xl drop-shadow-xl">{title}</h1>
  ),
  MEDIUM: (title) => (
    <h2 className="text-gray-100 font-bold text-2xl drop-shadow-xl">{title}</h2>
  ),
  SMALL: (title) => (
    <h3 className="text-gray-100 font-bold text-xl drop-shadow-xl">{title}</h3>
  ),
};

export const PageHeader = ({ size, text }) => {
  const renderTitle = () => {
    const sizeKey = size?.toUpperCase();
    if (sizeKey && sizes[sizeKey]) {
      return sizes[sizeKey](text);
    } else {
      return <h3 className="text-gray-100 font-bold text-md drop-shadow-xl">{text}</h3>;
    }
  };

  return <div className="text-center m-4">{renderTitle()}</div>;
};
