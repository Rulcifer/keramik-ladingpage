import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard.jsx";
// import Img1 from "../../assets/hero/keramik-hero.png";
import Img1 from "../../assets/product/keramik.png";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Keramik ",
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

const Products = () => {
  return (
    <div>
      <div className="container pt-8">
        {/* header section */}
        <Heading
          title="Produk lainnya"
          subtitle="Jelajahi Produk Kami"
        ></Heading>
        {/* body section */}
        <div className="overflow-x-auto no-scrollbar">
          <ProductCard data={ProductData}></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Products;
