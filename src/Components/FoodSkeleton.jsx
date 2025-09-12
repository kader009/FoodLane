const FoodSkeleton = () => {
  return (
    <div className="w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-3">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-9 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodSkeleton;
