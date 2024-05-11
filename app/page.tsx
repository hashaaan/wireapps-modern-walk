import type { Metadata } from "next";
import ProductCard from "@/_components/product-card";
import { api } from "@/_lib/api";
import type { Product } from "@/types";
import { MENS_CLOTHING, WOMS_CLOTHING } from "@/_lib/constants";
import CategoryCard from "@/_components/category-card";

export const metadata: Metadata = {
  title: "Modern Walk | Home",
  description: "The fashion retail store for the modern",
};

const Home = async () => {
  // TODO: Cannot get the random products
  // api only returns products related to the category
  const flashSaleProducts = await api
    .get(`products/category/${MENS_CLOTHING}`, {
      searchParams: { limit: "6" },
    })
    .json<Product[]>();

  return (
    <div className="container px-4 md:px-0 py-14 space-y-12">
      {/* Flash Sale section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold">Flash Sale</h2>

        <div className="flex flex-row gap-10 overflow-x-scroll no-scrollbar pb-8">
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
