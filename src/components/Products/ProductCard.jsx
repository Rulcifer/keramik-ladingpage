const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-flow-col gap-4 overflow-x-auto no-scrollbar sm:gap-x-6 sm:gap-y-10 sm:grid-flow-row sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {/* data section */}
        {data.map((item) => (
          <div className="w-20 sm:w-full flex flex-col gap-2" key={item.id}>
            <div className="w-full p-2 flex justify-center bg-green-50 rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="[h-120px] w-[120px] object-cover rounded-md"
              />
              {/* hover button */}
              <div
                className="hidden group-hover:flex absolute
                 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
              h-full w-full text-center 
              group-hover:backdrop-blur-sm justify-center 
              items-center duration-200"
              >
                <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full">
                  Jelajahi
                </button>
              </div>
            </div>
            <p className="text-center text-sm sm:text-xs font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
