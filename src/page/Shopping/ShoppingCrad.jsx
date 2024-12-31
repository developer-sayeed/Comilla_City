import { useParams } from "react-router-dom";
import { shopsData } from "./data";

const ShoppingCrad = () => {
  const { id } = useParams();

  if (!id) {
    console.error("ID প্যারামিটার পাওয়া যায়নি");
  } else {
    console.log("Shop ID:", id);
  }

  const shop = shopsData.find((item) => item.id === parseInt(id));

  if (!shop) {
    return <div>Shop not found</div>;
  }

  return (
    <div>
      <h1>{shop.name}</h1>
      <p>{shop.address}</p>
      <img src={shop.image} alt={shop.name} />
      {/* অন্যান্য ডিটেইলস */}
    </div>
  );
};

export default ShoppingCrad;
