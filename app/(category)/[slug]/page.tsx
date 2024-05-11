import { api } from "../../_lib/api";
import { MENS_CLOTHING, WOMS_CLOTHING } from "../../_lib/constants";
import ProductCard from "../../_components/product-card";
import type { Product } from "../../types";
import Link from "next/link";
import ProductsNotAvailableCard from "./products-not-available-card";

const MENS_CLOTHING_SLUG = "mens-clothing";
const WOMS_CLOTHING_SLUG = "womens-clothing";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

const CategoryPage = async ({ params: { slug } }: CategoryPageProps) => {
  const getCategoryBySlug = (slug: string) => {
    switch (slug) {
      case MENS_CLOTHING_SLUG:
        return MENS_CLOTHING;
      case WOMS_CLOTHING_SLUG:
        return WOMS_CLOTHING;
      default:
        return undefined;
    }
  };

  const categoryProducts = await api
    .get(`products/category/${getCategoryBySlug(slug)}`, {
      searchParams: { limit: "8" },
    })
    .json<Product[]>();

  return (
    <div className="container py-14 space-y-14 px-4 md:px-0">
      <section className="space-y-10">
        <h2 className="text-3xl font-bold capitalize">
          {getCategoryBySlug(slug) ?? slug.replace("-", " ")}
        </h2>
      </section>

      {categoryProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {categoryProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <ProductsNotAvailableCard />
      )}
    </div>
  );
};

export default CategoryPage;
