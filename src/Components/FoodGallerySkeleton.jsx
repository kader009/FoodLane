const FoodGallerySkeleton = () => {
  return (
    <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg bg-gray-800 mx-4 my-4 animate-pulse">
      {/* image placeholder */}
      <div className="w-full h-full bg-gray-700"></div>

      {/* overlay text placeholder */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-gray-400 p-4 space-y-2">
          <div className="h-6 w-32 bg-gray-600 mx-auto rounded"></div>
          <div className="h-4 w-48 bg-gray-600 mx-auto rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodGallerySkeleton;
