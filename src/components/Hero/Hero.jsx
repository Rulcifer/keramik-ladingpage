import Slider from "react-slick";
import Image1 from "../../assets/hero/keramik-hero.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "dTreccia Naturale",
    title: "Roman",
    title2: "Keramik",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis vulputate laoreet. Fusce ac ligula nec felis interdum laoreet non a velit. Integer et turpis vel orci interdum dictum. In hac habitasse platea dictumst ",
  },
  {
    id: 2,
    img: Image1,
    subtitle: "dTreccia Naturale",
    title: "Roman",
    title2: "Keramik",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis vulputate laoreet. Fusce ac ligula nec felis interdum laoreet non a velit. Integer et turpis vel orci interdum dictum. In hac habitasse platea dictumst ",
  },
  {
    id: 3,
    img: Image1,
    subtitle: "dTreccia Naturale",
    title: "Roman",
    title2: "Keramik",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis vulputate laoreet. Fusce ac ligula nec felis interdum laoreet non a velit. Integer et turpis vel orci interdum dictum. In hac habitasse platea dictumst ",
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
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 
                  text-center sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h1 className="text-5xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full">
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 
                        object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
