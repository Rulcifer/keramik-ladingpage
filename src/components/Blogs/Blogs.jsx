import Heading from "../Shared/Heading";
import { Link } from "react-router-dom";
import BlogData from "../../pages/Blogs/data/BlogData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container pt-8">
        {/* Header */}
        <Heading title="Berita Pondok Keramik" subtitle="Jelajahi Blogs Kami" />

        {/* Blog Sections */}
        <Slider {...settings} className="my-5">
          {BlogData.map((data) => (
            <div key={data.id} className="px-2">
              <Link to={`/blog/${data.id}`} className="block">
                <div className="cursor-pointer">
                  {/* Image Section */}
                  <div className="overflow-hidden rounded-2xl mb-2">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">{data.published}</p>
                    <p className="font-bold line-clamp-1">{data.title}</p>
                    <p className="line-clamp-2">{data.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
