import { useParams } from "react-router-dom";
import ProductData from "./data/ProductData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id.toString() === id);

  console.log("Product Data:", product); // Debugging

  if (!product) {
    return (
      <div className="text-center text-red-500 font-bold">
        Produk tidak ditemukan!
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-6 p-4 bg-white shadow-lg rounded-lg">
      {/* Gambar Produk */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>

      {/* Info Produk */}
      <div className="flex items-center justify-between p-4 bg-red-50 text-red-800 rounded-lg shadow-md">
        <h1 className="text-lg font-bold">{product.name}</h1>
        <span className="text-lg font-semibold">{product.price}</span>
      </div>

      {/* Deskripsi Produk */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Deskripsi Produk</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Detail Tambahan */}
      <div className="flex flex-col gap-3 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Detail Produk</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {product.details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      {/* Tombol Beli */}
      <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
        Beli Sekarang
      </button>
    </div>
  );
};

export default ProductDetail;
