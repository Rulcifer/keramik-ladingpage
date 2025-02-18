import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard.jsx";
// import Img1 from "../../assets/hero/keramik-hero.png";
import Img1 from "../../assets/product/produk-keramik.png";

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
    img: Img1,
    title: "Granit",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img1,
    title: "Sanitary",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img1,
    title: "Cat",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img1,
    title: "Tandon",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img1,
    title: "Semen Perekat dan Nat",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img1,
    title: "Pintu dan Jendela",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img1,
    title: "Kuku Macan, Lis, Stepnosing Tangga",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img1,
    title: "Glassblock dan Loster / Roster",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img1,
    title: "Marmer",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 11,
    img: Img1,
    title: "Mosaic",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 12,
    img: Img1,
    title: "Lampu",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 13,
    img: Img1,
    title: "Dapur dan Rumah Tangga",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 14,
    img: Img1,
    title: "Vynil dan SPC",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 15,
    img: Img1,
    title: "Scaffholding",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 16,
    img: Img1,
    title: "Rolling Door Otomatis",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 17,
    img: Img1,
    title: "Atap",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 18,
    img: Img1,
    title: "Tanah Liat dan Spandek",
    price: "50000",
    aosDelay: "0",
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
  return (
    <div>
      {/* header section */}
      <Heading title="Produk lainnya" subtitle="Jelajahi Produk Kami"></Heading>
      <div className="container pt-8 flex gap-6">
        {/* Sidebar Kategori */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow">
          {/* <h3 className="text-lg font-bold mb-4">Produk Kami</h3> */}
          <ul className="space-y-2">
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
        {/* body section */}
        <ProductCard data={ProductData}></ProductCard>
      </div>
    </div>
  );
};

export default Products;
