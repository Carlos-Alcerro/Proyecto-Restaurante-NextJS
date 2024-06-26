"use client";
import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const onValueChange = (value) => {
    if (quantity + value < 1) return;

    onQuantityChange(quantity + value);
  };

  return (
    <div className="flex ">
      <button onClick={() => onValueChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200/50 text-center rounded">
        {quantity}
      </span>
      <button onClick={() => onValueChange(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};

export default QuantitySelector;
