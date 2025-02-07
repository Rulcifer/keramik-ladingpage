import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard.jsx";
// import Img1 from "../../assets/hero/keramik-hero.png";
import Img1 from "../../assets/product/produk-keramik.png";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img1,
    title: "Kermaik Roman",
    price: "50000",
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <Heading
          title="Produk lainnya"
          subtitle="Jelajahi Produk Kami"
        ></Heading>
        {/* body section */}
        <ProductCard data={ProductData}></ProductCard>
      </div>
    </div>
  );
};

export default Products;
