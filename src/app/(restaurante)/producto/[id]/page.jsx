"use client";
import { get } from "@/helpers/AxiosInstance";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import SlidesDesktop from "../ui/SlidesDesktop";
import { FormatMoney } from "@/utils/FormatMoney";

const ProductId = () => {
  const [productId, setProductId] = useState([]);
  const [imagenes, setImagenes] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getProductId = async () => {
      try {
        const res = await get(
          `http://localhost:3000/api/products/${params.id}`
        );
        setProductId(res.data);
        setImagenes(res.data.images);
      } catch (error) {
        console.log(error);
      }
    };
    getProductId();
  }, [params.id]);

  console.log("producto", productId);

  return (
    <div className="mt-32">
      <div className="mx-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <SlidesDesktop
            producto={productId}
            key={productId.id}
            title={productId.nombreProd}
          />
        </div>
        <div className="md:col-span-1">
          <div className="block">
            <p className="text-3xl font-semibold text-gray-700">
              {productId.nombreProd}
            </p>
          </div>
          <div className="block mt-5">
            <p className="text-xl font-semibold text-gray-700">
              Disponibles:{" "}
              <span className="font-normal">{productId.inStock}</span>
            </p>
          </div>
          <div className="block mt-5">
            <p className="text-xl font-semibold text-gray-700">
              Precio:{" "}
              <span className="font-normal">
                {FormatMoney(productId.precio)}
              </span>
            </p>
          </div>
          <div className="block mt-5">
            <p className="text-xl font-semibold text-gray-700">
              Descripcion:{" "}
              <span className="font-normal">{productId.descripcion}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
