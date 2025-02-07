import { FaMobileAlt } from "react-icons/fa";
import {
  FaLocationArrow,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
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
    title: "Granit",
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
              Kshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at quam a elit ullamcorper luctus. Vestibulum id urna eget turpis
              vulputate laoreet.
            </p>
            <p className="text-gray-500 mt-4">Made Pondok Keramik Surabaya</p>
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
                Menu Kedua
              </h1>
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

            {/* company addres */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Jl. Raya Menganti no 430, Wiyung, Surabaya</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>082233024171</p>
              </div>

              {/* social link */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/pondokkeramik/">
                  <FaInstagram
                    className="text-3xl
                    hover:text-primary duration-300"
                  />
                </a>
                <a href="#">
                  <FaFacebook
                    className="text-3xl
                    hover:text-primary duration-300"
                  />
                </a>
                <a href="#">
                  <FaLinkedin
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
