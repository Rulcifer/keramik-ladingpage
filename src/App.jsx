import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";

import keramik from "./assets/hero/keramik-hero.png";
// import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
// import Popup from "./components/Popup/Popup.jsx";
// import AOS from "aos";
// import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "FEBRUSALE",
  date: "1 Feb to 28 Feb",
  image: keramik,
  title2: "Keramik Roman",
  title3: "Februari Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Akhirnya",
  date: "1 Feb to 28 Feb",
  image: keramik,
  title2: "Keramik Roman",
  title3: "New Year Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // React.useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //     offset: 100,
  //   });
  //   AOS.refresh();
  // }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      {/* <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> */}
    </div>
  );
};

export default App;
