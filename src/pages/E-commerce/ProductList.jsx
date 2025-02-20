import { Link } from "react-router-dom";
import ProductData from "./data/ProductData";

const ProductList = () => {
  return (
    <div className="container pb-4 flex flex-col bg-background-blackOnWhite">
      <h2 className="text-2xl font-bold text-center py-4">Produk Kami</h2>

      {/* Produk Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col items-center justify-between border border-border-disabled bg-white rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>

            {/* Tombol Beli Sekarang */}
            <Link
              to={`/produk/${product.id}`}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Beli Sekarang
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
