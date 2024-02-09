import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

const Cart = () => {
  const { id } = useParams();
  const { data: dataArticle } = useQuery({
    queryKey: ["artilce"],
    queryFn: async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    },
  });

  console.log(dataArticle);

  return (
    <>
      <div>tes cart</div>
    </>
  );
};

export default Cart;
