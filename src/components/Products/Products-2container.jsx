import Heading from "../Shared/Heading";
import { useState } from "react";

import ProductCard from "../Products/ProductCard.jsx";
// import Img1 from "../../assets/hero/keramik-hero.png";

// Keramik
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

// Granit
import Img24 from "../../assets/product/granit/Casanza.png";
import Img25 from "../../assets/product/granit/Ceranosa.png";
import Img26 from "../../assets/product/granit/Efata.png";
import Img27 from "../../assets/product/granit/Eleganza.png";
import Img28 from "../../assets/product/granit/Granito.png";
import Img29 from "../../assets/product/granit/Infiniti.png";
import Img30 from "../../assets/product/granit/Magia-1.png";
import Img31 from "../../assets/product/granit/Meliuz.png";
import Img32 from "../../assets/product/granit/Mgm.png";
import Img33 from "../../assets/product/granit/Niro.png";
import Img34 from "../../assets/product/granit/Quadra.png";
import Img35 from "../../assets/product/granit/Rixo.png";
import Img36 from "../../assets/product/granit/Roman-Granit.png";
import Img37 from "../../assets/product/granit/Sandimas.png";
import Img38 from "../../assets/product/granit/Serenity.png";
import Img39 from "../../assets/product/granit/Titanium.png";
import Img40 from "../../assets/product/granit/Valentino.png";
import Img41 from "../../assets/product/granit/Vellino.png";
import Img42 from "../../assets/product/granit/Vicenxa.png";

// Sanitary
import Img43 from "../../assets/product/sanitary/Ina.png";
import Img44 from "../../assets/product/sanitary/Mago.png";
import Img45 from "../../assets/product/sanitary/Onda.png";
import Img46 from "../../assets/product/sanitary/Polaris.png";
import Img47 from "../../assets/product/sanitary/TOTO.png";
import Img48 from "../../assets/product/sanitary/Trilliun.png";
import Img49 from "../../assets/product/sanitary/Wasser.png";
import Img50 from "../../assets/product/sanitary/Wika.png";

// Cat
import Img51 from "../../assets/product/cat/Altex.png";
import Img52 from "../../assets/product/cat/Asian-Paint.png";
import Img53 from "../../assets/product/cat/Kansai-Paint.png";
import Img54 from "../../assets/product/cat/Nippon.png";
import Img55 from "../../assets/product/cat/Paragon.png";

// Tandon
import Img56 from "../../assets/product/tandon/Maspion.png";
import Img57 from "../../assets/product/tandon/Mpoin.png";
import Img58 from "../../assets/product/tandon/Penguin.png";
import Img59 from "../../assets/product/tandon/Profil-Tank.png";
import Img60 from "../../assets/product/tandon/Tedmon.png";
import Img61 from "../../assets/product/tandon/Trilliun-Basic.png";
import Img62 from "../../assets/product/tandon/Wasser-Pump.png";

// Semet Perekat
import Img63 from "../../assets/product/semen-perekat/Demix.png";
import Img64 from "../../assets/product/semen-perekat/Mortar-Utama.png";
import Img65 from "../../assets/product/semen-perekat/Sika.png";

// Pintu Jendela
import Img66 from "../../assets/product/pintu-jendela/Golden-Agin.png";
import Img67 from "../../assets/product/pintu-jendela/S-plus.png";

//kuku macan, lis, stepnosing tangga
//marmer
//rolling door otomatis
import ImgPondokKeramik from "../../assets/logo-100x67.png";

//Glassblock loster
import Img68 from "../../assets/product/glassblock-loster/Mulia.png";

//Mosaic
import Img69 from "../../assets/product/mosaic/Eleganza.png";
import Img70 from "../../assets/product/mosaic/Enzo.png";
import Img71 from "../../assets/product/mosaic/Mass.png";

//Lampu
import Img72 from "../../assets/product/lampu/Casabella.png";
import Img73 from "../../assets/product/lampu/Inlite.png";

//Daput dan Rumah Tangga
import Img74 from "../../assets/product/dapur-rmhtangga/Ceradeco.png";
import Img75 from "../../assets/product/dapur-rmhtangga/Clean-Matic.png";
import Img76 from "../../assets/product/dapur-rmhtangga/Mami1.png";
import Img77 from "../../assets/product/dapur-rmhtangga/Royal.png";

//Vynil dan SPC
import Img78 from "../../assets/product/vynil-spc/Alvera.png";
import Img79 from "../../assets/product/vynil-spc/Taco.png";

//Scaffholding
import Img80 from "../../assets/product/scaffholding/TM.png";

//Atap, Keramik, Tanah Liat dan Spandek
import Img81 from "../../assets/product/atap-tanah-spandek/Bima.png";
import Img82 from "../../assets/product/atap-tanah-spandek/Grand-Luxe.png";
import Img83 from "../../assets/product/atap-tanah-spandek/Kanmuri.png";
import Img84 from "../../assets/product/atap-tanah-spandek/Kia.png";
import Img85 from "../../assets/product/atap-tanah-spandek/Rooftop.png";

const ProductData = [
  // Keramik
  {
    id: 1,
    img: Img1,
    title: "Keramik",
  },
  {
    id: 2,
    img: Img2,
    title: "Keramik",
  },
  {
    id: 3,
    img: Img3,
    title: "Keramik",
  },
  {
    id: 4,
    img: Img4,
    title: "Keramik",
  },
  {
    id: 5,
    img: Img5,
    title: "Keramik",
  },
  {
    id: 6,
    img: Img6,
    title: "Keramik",
  },
  {
    id: 7,
    img: Img7,
    title: "Keramik",
  },
  {
    id: 8,
    img: Img8,
    title: "Keramik",
  },
  {
    id: 9,
    img: Img9,
    title: "Keramik",
  },
  {
    id: 10,
    img: Img10,
    title: "Keramik",
  },
  {
    id: 11,
    img: Img11,
    title: "Keramik",
  },
  {
    id: 12,
    img: Img12,
    title: "Keramik",
  },
  {
    id: 13,
    img: Img13,
    title: "Keramik",
  },
  {
    id: 14,
    img: Img14,
    title: "Keramik",
  },
  {
    id: 15,
    img: Img15,
    title: "Keramik",
  },
  {
    id: 16,
    img: Img16,
    title: "Keramik",
  },
  {
    id: 17,
    img: Img17,
    title: "Keramik",
  },
  {
    id: 18,
    img: Img18,
    title: "Keramik",
  },
  {
    id: 19,
    img: Img19,
    title: "Keramik",
  },
  {
    id: 20,
    img: Img20,
    title: "Keramik",
  },
  {
    id: 21,
    img: Img21,
    title: "Keramik",
  },
  {
    id: 22,
    img: Img22,
    title: "Keramik",
  },
  {
    id: 23,
    img: Img23,
    title: "Keramik",
  },

  // Granit
  {
    id: 24,
    img: Img24,
    title: "Granit",
  },
  {
    id: 25,
    img: Img25,
    title: "Granit",
  },
  {
    id: 26,
    img: Img26,
    title: "Granit",
  },
  {
    id: 27,
    img: Img27,
    title: "Granit",
  },
  {
    id: 28,
    img: Img28,
    title: "Granit",
  },
  {
    id: 29,
    img: Img29,
    title: "Granit",
  },
  {
    id: 30,
    img: Img30,
    title: "Granit",
  },
  {
    id: 31,
    img: Img31,
    title: "Granit",
  },
  {
    id: 32,
    img: Img32,
    title: "Granit",
  },
  {
    id: 33,
    img: Img33,
    title: "Granit",
  },
  {
    id: 34,
    img: Img34,
    title: "Granit",
  },
  {
    id: 35,
    img: Img35,
    title: "Granit",
  },
  {
    id: 36,
    img: Img36,
    title: "Granit",
  },
  {
    id: 37,
    img: Img37,
    title: "Granit",
  },
  {
    id: 38,
    img: Img38,
    title: "Granit",
  },
  {
    id: 39,
    img: Img39,
    title: "Granit",
  },
  {
    id: 40,
    img: Img40,
    title: "Granit",
  },
  {
    id: 41,
    img: Img41,
    title: "Granit",
  },
  {
    id: 42,
    img: Img42,
    title: "Granit",
  },

  // Sanitary
  {
    id: 43,
    img: Img43,
    title: "Sanitary",
  },
  {
    id: 44,
    img: Img44,
    title: "Sanitary",
  },
  {
    id: 45,
    img: Img45,
    title: "Sanitary",
  },
  {
    id: 46,
    img: Img46,
    title: "Sanitary",
  },
  {
    id: 47,
    img: Img47,
    title: "Sanitary",
  },
  {
    id: 48,
    img: Img48,
    title: "Sanitary",
  },
  {
    id: 49,
    img: Img49,
    title: "Sanitary",
  },
  {
    id: 50,
    img: Img50,
    title: "Sanitary",
  },

  // Cat
  {
    id: 51,
    img: Img51,
    title: "Cat",
  },
  {
    id: 52,
    img: Img52,
    title: "Cat",
  },
  {
    id: 53,
    img: Img53,
    title: "Cat",
  },
  {
    id: 54,
    img: Img54,
    title: "Cat",
  },
  {
    id: 55,
    img: Img55,
    title: "Cat",
  },

  // Tandon
  {
    id: 56,
    img: Img56,
    title: "Tandon",
  },
  {
    id: 57,
    img: Img57,
    title: "Tandon",
  },
  {
    id: 58,
    img: Img58,
    title: "Tandon",
  },
  {
    id: 59,
    img: Img59,
    title: "Tandon",
  },
  {
    id: 60,
    img: Img60,
    title: "Tandon",
  },
  {
    id: 61,
    img: Img61,
    title: "Tandon",
  },
  {
    id: 62,
    img: Img62,
    title: "Tandon",
  },

  //Semen Perekat
  {
    id: 63,
    img: Img63,
    title: "Semen Perekat dan Nat",
  },
  {
    id: 64,
    img: Img64,
    title: "Semen Perekat dan Nat",
  },
  {
    id: 65,
    img: Img65,
    title: "Semen Perekat dan Nat",
  },

  //Pintu dan Jendela
  {
    id: 66,
    img: Img66,
    title: "Pintu dan Jendela",
  },
  {
    id: 67,
    img: Img67,
    title: "Pintu dan Jendela",
  },

  //Kuku Macan, Lis, Stepnosing Tangga
  {
    id: 68,
    img: ImgPondokKeramik,
    title: "Kuku Macan, Lis, Stepnosing Tangga",
  },

  // Glassblock dan Loster / Roster
  {
    id: 69,
    img: Img68,
    title: "Glassblock dan Loster / Roster",
  },

  // Marmer
  {
    id: 70,
    img: ImgPondokKeramik,
    title: "Marmer",
  },

  // Mosaic
  {
    id: 71,
    img: Img69,
    title: "Mosaic",
  },
  {
    id: 72,
    img: Img70,
    title: "Mosaic",
  },
  {
    id: 73,
    img: Img71,
    title: "Mosaic",
  },

  // Lampu
  {
    id: 74,
    img: Img72,
    title: "Lampu",
  },
  {
    id: 75,
    img: Img73,
    title: "Lampu",
  },

  // Dapur dan Rumah Tangga
  {
    id: 76,
    img: Img74,
    title: "Dapur dan Rumah Tangga",
  },
  {
    id: 77,
    img: Img75,
    title: "Dapur dan Rumah Tangga",
  },
  {
    id: 78,
    img: Img76,
    title: "Dapur dan Rumah Tangga",
  },
  {
    id: 79,
    img: Img77,
    title: "Dapur dan Rumah Tangga",
  },

  // Vynil dan SPC
  {
    id: 80,
    img: Img78,
    title: "Vynil dan SPC",
  },
  {
    id: 81,
    img: Img79,
    title: "Vynil dan SPC",
  },

  // Scaffholding
  {
    id: 82,
    img: Img80,
    title: "Scaffholding",
  },

  // Rollingdoor Otomatis
  {
    id: 83,
    img: ImgPondokKeramik,
    title: "Rolling Door Otomatis",
  },

  // Atap, Tanah Liat dan Spandek
  {
    id: 84,
    img: Img81,
    title: "Atap, Tanah Liat dan Spandek",
  },
  {
    id: 84,
    img: Img82,
    title: "Atap, Tanah Liat dan Spandek",
  },
  {
    id: 85,
    img: Img83,
    title: "Atap, Tanah Liat dan Spandek",
  },
  {
    id: 86,
    img: Img84,
    title: "Atap, Tanah Liat dan Spandek",
  },
  {
    id: 87,
    img: Img85,
    title: "Atap, Tanah Liat dan Spandek",
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
  { id: 17, title: "Atap, Tanah Liat dan Spandek" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Keramik");

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = selectedCategory
    ? ProductData.filter((product) => product.title === selectedCategory)
    : ProductData; // Jika tidak ada kategori yang dipilih, tampilkan semua produk

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
                className={`cursor-pointer hover:text-red-500 ${
                  selectedCategory === category.title
                    ? "text-red-500 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.title)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Body Section (Produk) */}
        <div className="w-full md:w-3/4">
          <ProductCard data={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
