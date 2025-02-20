import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
import HeroBanner from "./components/Hero/Hero-Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
import BannerImg from "./components/Banner/BannerImg";
import Partners from "./components/Partners/Partners.jsx";

// import keramik from "./assets/hero/keramik-hero.png";
import banner1 from "./assets/banner/banner4.jpg";
import banner2 from "./assets/banner/banner5.jpg";
// import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

// import Products from "./components/Products/Products";
import Products2 from "./components/Products/Products-2container";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
// import Popup from "./components/Popup/Popup.jsx";
// import AOS from "aos";
// import "aos/dist/aos.css";

//Halaman lain
import BlogDetail from "./pages/Blogs/BlogDetail.jsx";
import BlogList from "./pages/Blogs/Blogs.jsx";
import ProductDetail from "./pages/E-commerce/ProductDetail.jsx";
import ProductList from "./pages/E-commerce/ProductList.jsx";

const BannerData1 = {
  image: banner1,
};
const BannerData2 = {
  image: banner2,
};

// const BannerData3 = {
//   discount: "30% OFF",
//   title: "Akhirnya",
//   date: "1 Feb to 28 Feb",
//   image: keramik,
//   title2: "Keramik Roman",
//   title3: "New Year Sale",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#2dcc6f",
// };

// const BannerData4 = {
//   discount: "30% OFF",
//   title: "Akhirnya",
//   date: "1 Feb to 28 Feb",
//   image: keramik,
//   title2: "Keramik Roman",
//   title3: "New Year Sale",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#fdd871",
// };

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
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <Category />
                <Category2 />
                <Services />
                <BannerImg data={BannerData1} />
                <Products2 />
                <BannerImg data={BannerData2} />
                <Blogs />
                <Partners />
              </>
            }
          />

          {/* Halaman Blog List */}
          <Route path="/blog" element={<BlogList />} />
          {/* Halaman Detail Blog */}
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Halaman Produk List */}
          <Route path="/produk" element={<ProductList />} />
          {/* Halaman Detail Produk */}
          <Route path="/produk/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
// <HeroBanner handleOrderPopup={handleOrderPopup} />
// <Category />
// <Category2 />
// <Services />
// <BannerImg data={BannerData1} />
// {/* <Banner data={BannerData} /> */}
// {/* <Products /> */}
// <Products2 />
// {/* <div className="flex gap-4">
//   <Banner data={BannerData2} />
//   <Banner data={BannerData3} />
// </div> */}
// <BannerImg data={BannerData2} />
// <Blogs />
// <Partners />
// <Footer />
// {/* <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> */}
