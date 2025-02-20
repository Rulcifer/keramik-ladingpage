import Heading from "../../components/Shared/Heading";
import { Link } from "react-router-dom";
import BlogData from "../../pages/Blogs/data/BlogData";

const Blogs = () => {
  return (
    <div>
      <div className="container pt-8">
        {/* header section */}
        <Heading
          title="Berita Pondok Keramik"
          subtitle="Jelajahi Blog Kami dan Temukan berita menarik terkait kontruksi"
        />

        {/* blog sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* blog card */}
          {BlogData.map((data) => (
            <Link to={`/blog/${data.id}`} key={data.id} className="block">
              {" "}
              <div className="cursor-pointer">
                {" "}
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img
                    src={data.image}
                    alt={data.title}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
