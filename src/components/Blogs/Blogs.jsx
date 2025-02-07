import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/berita1.jpeg";

const BlogData = [
  {
    title: "Bagaiaman Cara Pemasangan Keramik yang Benar",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis vulputate laoreet. Fusce ac ligula nec felis interdum laoreet non a velit. Integer et turpis vel orci interdum dictum. In hac habitasse platea dictumst",
    published: "Feb 5, 2025 oleh Sahrul",
    image: Img1,
  },
  {
    title: "Bagaiaman Cara Pemasangan Keramik yang Benar",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis vulputate laoreet. Fusce ac ligula nec felis interdum laoreet non a velit. Integer et turpis vel orci interdum dictum. In hac habitasse platea dictumst",
    published: "Feb 5, 2025 oleh Sahrul",
    image: Img1,
  },
  {
    title: "Bagaiaman Cara Pemasangan Keramik yang Benar",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis vulputate laoreet. Fusce ac ligula nec felis interdum laoreet non a velit. Integer et turpis vel orci interdum dictum. In hac habitasse platea dictumst",
    published: "Feb 5, 2025 oleh Sahrul",
    image: Img1,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container">
        {/* heder section */}
        <Heading
          title="Berita Pondok Keramik"
          subtitle={"Jelajahi Blogs Kami"}
        />
        {/* blog sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 ">
          {/* blod card */}
          {BlogData.map((data) => (
            <div className="">
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
