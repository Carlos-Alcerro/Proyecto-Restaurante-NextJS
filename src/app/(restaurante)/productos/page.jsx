"use client";
import { useState, useEffect } from "react";
import Title from "@/components/Title/Title";
import ProductGrid from "@/components/productos/ProductGrid";
import { get } from "@/helpers/AxiosInstance";
import { useParams } from "next/navigation";
import Paginacion from "@/components/Paginacion/Paginacion";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const res = await get("http://localhost:3000/api/products");
        setProductos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, []);

  return (
    <div className="px-0 md:px-10 mt-28">
      <Title titulo="Productos Carl&#39;s" />
      {!productos || productos.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-3xl font-semibold">No se encontraron productos</p>
        </div>
      ) : (
        <>
          <ProductGrid productos={productos} />
          <div className="flex justify-center">
            <Paginacion />
          </div>
        </>
      )}
    </div>
  );
};

export default Productos;
