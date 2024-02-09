import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import axios from "axios";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  const { data: dataDetail, isLoading } = useQuery({
    queryKey: ["detail"],
    queryFn: async () => {
      const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
      return response.data;
    },
  });

  if (isLoading)
    return (
      <>
        <Spin
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
            placeItems: "center",
          }}
        />
      </>
    );
  return (
    <>
      <div>Detail</div>
    </>
  );
};

export default Detail;
