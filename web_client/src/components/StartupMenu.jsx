export const StartupMenu = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Fitness App</h1>
        <p className="text-gray-600 mb-6">Welcome to our fitness app!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Get Started</button>
      </div>
    </div>
  );
};
