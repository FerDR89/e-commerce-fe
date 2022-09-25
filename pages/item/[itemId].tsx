import { useRouter } from "next/router";
import type { NextPage } from "next";
import ProductPage from "components/product-page";
import { MainLayout } from "components/layout";

const Item: NextPage = () => {
  const router = useRouter();
  const itemId = router.query.itemId as string;
  return itemId ? (
    <MainLayout>
      <ProductPage productId={itemId} />
    </MainLayout>
  ) : null;
};

export default Item;
