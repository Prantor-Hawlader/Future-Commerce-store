import Billboard from "@/components/Billboard";
import getCategory from "@/components/actions/getCategory";
import getColors from "@/components/actions/getColors";
import getProducts from "@/components/actions/getProducts";
import getSizes from "@/components/actions/getSizes";
import Container from "@/components/ui/Container";
import Filter from "./components/Filter";
import ProductCard from "@/components/ui/ProductCard";
import NoResults from "@/components/ui/NoResults";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0;
const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
