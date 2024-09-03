import { useLoaderData } from "react-router-dom";

const PurchasePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>purchase</h1>
    </div>
  );
};

export default PurchasePage;