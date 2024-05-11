import Image from "next/image";
import { cn } from "@/_lib/utils";
import type { Product } from "@/types";
import { MENS_CLOTHING, WOMS_CLOTHING } from "@/_lib/constants";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const getCardBgColor = (category: string) => {
    switch (category) {
      case MENS_CLOTHING:
        return "bg-[#2BD9AF]";
      case WOMS_CLOTHING:
        return "bg-[#FF5E84]";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      key={product.id}
      className="h-96 bg-white rounded-3xl shadow-xl flex flex-col"
    >
      <div className="h-60 flex flex-col flex-1 px-6 py-4 font-bold text-center gap-2">
        <h6 className="text-lg whitespace-nowrap truncate">{product.title}</h6>

        <div className="flex justify-center items-center h-full">
          <Image
            src={product.image}
            alt={product.title}
            width={160}
            height={160}
            className="mx-auto aspect-[160/160] object-contain"
          />
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-center gap-1 h-36 py-4 px-6 rounded-3xl text-center",
          getCardBgColor(product.category)
        )}
      >
        <div className="text-[#0E42FD] font-bold text-xl">
          Rs {product.price}
        </div>
        <div className="text-wrap text-sm max-w-48 line-clamp-4">
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
