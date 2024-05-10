import ProductGridItems from "./ProductGridItems";

const ProductGrid = ({ productos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {productos.map((producto) => (
        <ProductGridItems key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ProductGrid;
