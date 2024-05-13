import type { Metadata } from "next";
import ProductCard from "@/_components/product-card";
import { api } from "@/_lib/api";
import type { Product } from "@/types";
import CategoryCard from "@/_components/category-card";

export const metadata: Metadata = {
  title: "Modern Walk | Home",
  description: "The fashion retail store for the modern",
};

const Home = async () => {
  // TODO: Cannot get products exactly as in the figma design
  const flashSaleProducts = await api
    .get(`products`, {
      searchParams: { limit: "4", sort: "asc" },
    })
    .json<Product[]>();

  return (
    <div className="container px-6 md:px-0 py-14 space-y-12">
      {/* Flash Sale section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold">Flash Sale</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {flashSaleProducts?.length > 0 &&
            flashSaleProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </section>

      {/* Categories section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold">Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CategoryCard
            category="Men's Clothing"
            className="bg-mw-green"
            href="/category/mens-clothing"
          />
          <CategoryCard
            category="Women's Clothing"
            className="bg-mw-pink"
            href="/category/womens-clothing"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
