import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog1.png";
import Img2 from "../../assets/blogs/blog2.png";
import Img3 from "../../assets/blogs/blog3.png";

const BlogData = [
  {
    title: "Kreasi Keramik Modern: Gaya Minimalis untuk Rumah Masa Kini",
    subtitle:
      "Jadikan keramik sebagai elemen desain interior modern. Ide-ide segar untuk dekorasi rumah Anda ada di sini.",
    published: "Feb 5, 2025",
    image: Img1,
  },
  {
    title: "Keramik Ramah Lingkungan: Kreativitas yang Berkelanjutan",
    subtitle:
      "Bagaimana keramik dapat menjadi bagian dari gaya hidup berkelanjutan? Temukan jawaban dan inspirasinya di sini.",
    published: "Feb 5, 2025",
    image: Img2,
  },
  {
    title: "Tips Membuat Keramik untuk Pemula: Mulai dari Niat hingga Teknik",
    subtitle:
      "Bingung mulai dari mana? Artikel ini akan membantu Anda memahami langkah awal membuat keramik, mulai dari bahan hingga alat yang",
    published: "Feb 5, 2025",
    image: Img3,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container pt-8">
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
