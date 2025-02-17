const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* data section */}
        {data.map((item) => (
          <div className="group" key={item.id}>
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="[h-180px] w-[260px] object-cover rounded-md"
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
                  Tambahkan
                </button>
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">Rp {item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
