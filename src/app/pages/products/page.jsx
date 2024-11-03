import Header from "../../components/Header";
import Collections from "../../components/products/ListCollection";

export default function Products() {
  return (
    <div>
      <Header/>
      <div className="mt-20">
        <Collections/>
      </div>
    </div>
  );
}