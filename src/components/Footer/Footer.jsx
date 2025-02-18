import { FaMobileAlt } from "react-icons/fa";
import {
  FaLocationArrow,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Keramik Lantai",
    link: "/#",
  },
  {
    title: "Keramik Dinding",
    link: "/#",
  },
  {
    title: "Granit Lantai",
    link: "/#",
  },
  {
    title: "Granit Dinding",
    link: "/#",
  },
];

const FooterLinks2 = [
  {
    title: "Keramik 20x20",
    link: "/#",
  },
  {
    title: "Keramik 20x40",
    link: "/#",
  },
  {
    title: "Keramik 25x25",
    link: "/#",
  },
  {
    title: "Keramik 25x40",
    link: "/#",
  },
  {
    title: "Keramik 30x30",
    link: "/#",
  },
  {
    title: "Keramik 30x60",
    link: "/#",
  },
  {
    title: "Keramik 40x40",
    link: "/#",
  },
  {
    title: "Keramik 50x50",
    link: "/#",
  },
  {
    title: "Keramik 60x60",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-wideset
            text-2xl uppercase sm:text-3xl"
            >
              Pondok Keramik
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Toko Keramik Terlengkap dan Bahan Bangunan Finishing Lainnya di
              Surabaya. Menjual ecer maupun partai keramik, granit, closet,
              wastafel, kran, cat, tandon, pintu, pompa, water heater, lampu,
              vynil, SPC, dan lainnya. Pondok Keramik solusi Belanja Hemat,
              Pelayanan Terbaik, dan Pengiriman Cepat.
            </p>
            <p className="text-gray-500 mt-4">Pondok Keramik Surabaya</p>
            {/* <a
              href="https://www.instagram.com/pondokkeramik/"
              target="blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Kunjungi Instagram Kami
            </a> */}
          </div>
          {/* footer link */}
          <div
            className="col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10"
          >
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Menu</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col link */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Kategori Keramik
              </h1>
              <ul className="space-y-3">
                {FooterLinks2.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* company addres */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Jl. Raya Menganti no 430, Wiyung, Surabaya</p>
              </div>
              <a
                className="flex items-center gap-3 mt-6 hover:text-red-500 hover:scale-105 transition-transform duration-300"
                href="https://api.whatsapp.com/send?phone=6285775005758"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMobileAlt />
                <p>Admin 1: 0857 7500 5758</p>
              </a>
              <a
                className="flex items-center gap-3 mt-6 hover:text-red-500 hover:scale-105 transition-transform duration-300"
                href="https://api.whatsapp.com/send?phone=6282233024171"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMobileAlt />
                <p>Admin 2: 0822 3302 4171</p>
              </a>

              {/* social link */}
              <div className="flex items-center gap-3 mt-6 item-center justify-center gap-3 mt-6">
                <a href="https://www.instagram.com/pondokkeramik/">
                  <FaInstagram
                    className="text-3xl
                    hover:text-primary duration-300"
                  />
                </a>
                <a href="https://www.tiktok.com/@pondokkeramik?_t=8r6UiSXIyTR&_r=1">
                  <FaTiktok
                    className="text-3xl
                    hover:text-primary duration-300"
                  />
                </a>
                <a href="https://web.facebook.com/tokokeramiksurabaya?rdid=ahuNwtESdQHAthuI&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FfsDMbqTi5n3UB5wX%2F%3F_rdc%3D1%26_rdr#">
                  <FaFacebook
                    className="text-3xl
                    hover:text-primary duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
