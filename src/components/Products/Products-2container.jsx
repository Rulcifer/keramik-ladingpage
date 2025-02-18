import Heading from "../Shared/Heading";
import { useState } from "react";

import ProductCard from "../Products/ProductCard.jsx";
// import Img1 from "../../assets/hero/keramik-hero.png";
import Img1 from "../../assets/product/keramik/Accura.png";
import Img2 from "../../assets/product/keramik/Arwana.png";
import Img3 from "../../assets/product/keramik/Asia-Tile.png";
import Img4 from "../../assets/product/keramik/Aversa.png";
import Img5 from "../../assets/product/keramik/Avignon.png";
import Img6 from "../../assets/product/keramik/Centro.png";
import Img7 from "../../assets/product/keramik/Habitat.png";
import Img8 from "../../assets/product/keramik/Hercules.png";
import Img9 from "../../assets/product/keramik/Ikad.png";
import Img10 from "../../assets/product/keramik/Kaisar.png";
import Img11 from "../../assets/product/keramik/Kobin.png";
import Img12 from "../../assets/product/keramik/Massimo.png";
import Img13 from "../../assets/product/keramik/MCC.png";
import Img14 from "../../assets/product/keramik/Milan.png";
import Img15 from "../../assets/product/keramik/Mulia-Tile.png";
import Img16 from "../../assets/product/keramik/Mustika.png";
import Img17 from "../../assets/product/keramik/Otis.png";
import Img18 from "../../assets/product/keramik/Platinum.png";
import Img19 from "../../assets/product/keramik/Roman.png";
import Img20 from "../../assets/product/keramik/Signature.png";
import Img21 from "../../assets/product/keramik/Spectrum-1.png";
import Img22 from "../../assets/product/keramik/Tierra.png";
import Img23 from "../../assets/product/keramik/Uno.png";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Kermaik ",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Granit",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Sanitary",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Cat",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Tandon",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Semen Perekat dan Nat",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Pintu dan Jendela",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "Kuku Macan, Lis, Stepnosing Tangga",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img9,
    title: "Glassblock dan Loster / Roster",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img10,
    title: "Marmer",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 11,
    img: Img11,
    title: "Mosaic",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 12,
    img: Img12,
    title: "Lampu",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 13,
    img: Img13,
    title: "Dapur dan Rumah Tangga",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 14,
    img: Img14,
    title: "Vynil dan SPC",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 15,
    img: Img15,
    title: "Scaffholding",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 16,
    img: Img16,
    title: "Rolling Door Otomatis",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 17,
    img: Img17,
    title: "Atap",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 18,
    img: Img18,
    title: "Tanah Liat dan Spandek",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 19,
    img: Img19,
    title: "Tanah Liat dan Spandek",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 20,
    img: Img20,
    title: "Tanah Liat dan Spandek",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 21,
    img: Img21,
  },
  {
    id: 22,
    img: Img22,
  },
  {
    id: 23,
    img: Img23,
  },
];

const categories = [
  { id: 1, title: "Keramik" },
  { id: 2, title: "Granit" },
  { id: 3, title: "Sanitary" },
  { id: 4, title: "Cat" },
  { id: 5, title: "Tandon" },
  { id: 6, title: "Semen Perekat dan Nat" },
  { id: 7, title: "Pintu dan Jendela" },
  { id: 8, title: "Kuku Macan, Lis, Stepnosing Tangga" },
  { id: 9, title: "Glassblock dan Loster / Roster" },
  { id: 10, title: "Marmer" },
  { id: 11, title: "Mosaic" },
  { id: 12, title: "Lampu" },
  { id: 13, title: "Dapur dan Rumah Tangga" },
  { id: 14, title: "Vynil dan SPC" },
  { id: 15, title: "Scaffholding" },
  { id: 16, title: "Rolling Door Otomatis" },
  { id: 17, title: "Atap" },
  { id: 18, title: "Tanah Liat dan Spandek" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      {/* Header Section */}
      <Heading title="Produk lainnya" subtitle="Jelajahi Produk Kami" />

      {/* Container */}
      <div className="container pt-8 flex flex-col md:flex-row gap-6">
        {/* Kategori sebagai Dropdown di Mobile */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Kategori</h3>

          {/* Dropdown untuk Mobile */}
          <div className="md:hidden">
            <select
              className="w-full p-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Pilih Kategori</option>
              {categories.map((category) => (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          {/* Sidebar untuk Desktop */}
          <ul className="hidden md:block space-y-2">
            {categories.map((category) => (
              <li
                key={category.id}
                className="cursor-pointer hover:text-blue-500"
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Body Section (Produk) */}
        <div className="w-full md:w-3/4">
          <ProductCard data={ProductData} />
        </div>
      </div>
    </div>
  );
};

export default Products;
