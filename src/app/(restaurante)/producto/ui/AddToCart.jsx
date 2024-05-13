"use client";
import { useState } from "react";
import QuantitySelector from "@/components/Quantity/QuantitySelector";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/store/cart/cartSlice";

const AddToCart = ({ producto }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const productWithQuantity = { ...producto, quantity: quantity };
    dispatch(addProductToCart(productWithQuantity));
    setQuantity(1);
  };
  return (
    <>
      <QuantitySelector onQuantityChange={setQuantity} quantity={quantity} />

      <button
        onClick={() => addToCart()}
        className="p-3 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-md shadow flex gap-4 items-center mt-5"
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default AddToCart;
