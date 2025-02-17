import Image1 from "../../assets/category/keramik1.png";
import Image4 from "../../assets/category/keramik4.png";
import Image5 from "../../assets/category/keramik5.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="sm:col-span-2 lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/100 to-gray-900 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-100">Jenis</p>
                <p className="text-2xl font-semibold mb-[2px] opacity-80">
                  Granit
                </p>
                <p className="text-4xl xl:text-5xl font-bold">Dinding</p>
                <button className="bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full">
                  Beli Sekarang
                </button>
              </div>
            </div>
            <img
              src={Image4}
              alt=""
              className="h-[250px] w-[540px] absolute left-32 bottom-5 z-0 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-gray-300/100 to-blue-900 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-100">Jenis</p>
                <p className="text-2xl font-semibold mb-[2px] opacity-80">
                  Keramik
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80">
                  Lantai
                </p>
                <button className="bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full">
                  Beli Sekarang
                </button>
              </div>
            </div>
            <img
              src={Image5}
              alt=""
              className="h-[250px] w-[540px] absolute left-32 bottom-5 z-0 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-gray-400/100 to-red-600 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-100">Jenis</p>
                <p className="text-2xl font-semibold mb-[2px] opacity-80">
                  Keramik
                </p>
                <p className="text-4xl xl:text-5xl font-bold">Dinding</p>
                <button className="bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full">
                  Beli Sekarang
                </button>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="h-[250px] w-[540px] absolute left-32 bottom-5 z-0 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
