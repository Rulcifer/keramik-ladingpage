import { useNavigate } from "react-router-dom";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/category/milazzo-tirana-40x40.png";
import Img2 from "../../assets/category/milazzo-warsawa-50x50.png";
import Img3 from "../../assets/category/milazzo-kamala-25x40.png";

const Category = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/produk`);
  };

  return (
    <div className="pt-8 pb-1">
      <div className="container">
        <Heading
          title="Anda Mencari Keramik?"
          subtitle="Belanja Sambil Rebahan"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Produk 60x60 */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue/70 to-brandBlue text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-100">Jenis</p>
                <p className="text-2xl font-semibold mb-[2px]">Keramik</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80">
                  60x60
                </p>
                <button
                  onClick={() => handleBuyNow("60x60")}
                  className="bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
            <img
              src={Img1}
              alt="Keramik 60x60"
              className="h-[250px] w-[540px] absolute left-32 bottom-5 z-0"
            />
          </div>

          {/* Produk 50x50 */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/60 to-brandYellow text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-100">Jenis</p>
                <p className="text-2xl font-semibold mb-[2px]">Keramik</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80">
                  50x50
                </p>
                <button
                  onClick={() => handleBuyNow("50x50")}
                  className="bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
            <img
              src={Img2}
              alt="Keramik 50x50"
              className="h-[250px] w-[540px] absolute left-32 bottom-5 z-0"
            />
          </div>

          {/* Produk 25x50 */}
          <div className="sm:col-span-2 lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-100">Jenis</p>
                <p className="text-2xl font-semibold mb-[2px]">Keramik</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80">
                  25x50
                </p>
                <button
                  onClick={() => handleBuyNow("25x50")}
                  className="bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
            <img
              src={Img3}
              alt="Keramik 25x50"
              className="h-[250px] w-[540px] absolute left-32 bottom-5 z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
