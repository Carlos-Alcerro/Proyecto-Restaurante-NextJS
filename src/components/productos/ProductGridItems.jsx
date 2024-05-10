"use client";
import { FormatMoney } from "@/utils/FormatMoney";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const ProductGridItems = ({ producto }) => {
  const [displayImg, setDisplayImg] = useState(producto.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/producto/${producto.id}`}>
        <Image
          src={displayImg}
          alt={producto.nombreProd}
          width={500}
          height={500}
          className="w-full h-80 object-cover rounded"
          onMouseEnter={() => setDisplayImg(producto.images[1])}
          onMouseLeave={() => setDisplayImg(producto.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-500 text-xl font-normal"
          href={`/producto/${producto.id}`}
        >
          {producto.nombreProd}
        </Link>
        <span className="text-md font-bold">
          {FormatMoney(producto.precio)}
        </span>
      </div>
    </div>
  );
};

export default ProductGridItems;
