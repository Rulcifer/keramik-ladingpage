import Slider from "react-slick";
import Banner1 from "../../assets/banner/banner1.jpg";

const HeroData = [
  {
    id: 1,
    img: Banner1,
  },
  {
    id: 2,
    img: Banner1,
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    // <div className="container py-8">
    <div className="overflow-hidden min-h-[350px] flex justify-center items-center py-2">
      <div className="container py-4">
        {/* hero section */}
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id} className="flex justify-center items-center">
              {/* img section */}
              <div className="order-1 sm:order-2 w-full h-full">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full drop-shadow-3xl object-cover rounded-3xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
