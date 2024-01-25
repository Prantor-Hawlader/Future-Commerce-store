import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import getBillboard from "@/components/actions/getBillboard";
import getProducts from "@/components/actions/getProducts";
import Container from "@/components/ui/Container";
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("78d93142-d310-4556-a89a-051d65b5cdaf");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList items={products} title={"Featured Products"} />
      </div>
    </Container>
  );
};

export default HomePage;
