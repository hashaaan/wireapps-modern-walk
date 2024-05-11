import Link from "next/link";

const ProductsNotAvailableCard = () => (
  <div className="flex flex-col justify-center items-center text-center py-10 bg-red-600/10 rounded-3xl shadow-xl">
    <div className="text-2xl capitalize text-red-600 font-bold">
      No products available 🙁
    </div>
    <div className="text-sm text-red-600 font-bold">for this category</div>

    <Link
      className="text-blue-500 py-2 px-3 bg-white w-fit rounded-md mt-5"
      href="/"
    >
      Go to home page
    </Link>
  </div>
);

export default ProductsNotAvailableCard;
