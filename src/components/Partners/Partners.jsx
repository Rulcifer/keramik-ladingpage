import brand1 from "../../assets/brand/infiniti.png";
import brand2 from "../../assets/brand/altex.png";
import brand3 from "../../assets/brand/accura.jpeg";

const Partners = () => {
  return (
    <div className="py-8 mt-24 grid-cols-5 md:block bg-gray-200 dark:bg-white/10">
      <div className="container">
        <div className="grid grid-cols-5 gap-1 place-items-center opacity-50">
          <img src={brand1} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand2} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand3} alt="brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
