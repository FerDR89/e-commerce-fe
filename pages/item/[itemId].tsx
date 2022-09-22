import { useRouter } from "next/router";
import type { NextPage } from "next";

const Item: NextPage = () => {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <>
      <p style={{ color: "white" }}>{JSON.stringify(itemId)}</p>
    </>
  );
};

export default Item;
