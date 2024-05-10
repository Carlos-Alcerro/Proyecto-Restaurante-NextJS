import { useState, useEffect } from "react";
import { get } from "@/helpers/AxiosInstance";
import Image from "next/image";

const TableProducts = ({ check }) => {
  const [productos, setProductos] = useState([]);
  const [limite, setlimite] = useState(5);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await get(
          `http://localhost:3000/api/products?limit=${limite}&offset=${offset}`
        );
        setProductos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [limite, offset, check]);

  const handlePrevPage = () => {
    if (offset >= limite) {
      setOffset(offset - limite);
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limite);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Imagen
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {productos.length > 0 ? (
            productos.map((producto) => (
              <tr
                key={producto.id}
                className="text-center odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {producto.nombreProd}
                </th>
                <td className="px-6 py-4">{producto.categoria}</td>
                <td className="px-6 py-4">{producto.precio}</td>
                <td className="px-6 py-4">{producto.inStock}</td>
                <td className="px-6 py-4">
                  <Image
                    src={producto.images[0]}
                    alt={producto.nombreProd}
                    width={300}
                    height={200}
                    className="h-32 w-32"
                  />
                </td>
                <td className="px-6 py-4 flex justify-between gap-4">
                  <p
                    /*  onClick={() => setUser(producto)} */
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    Editar
                  </p>

                  <p className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">
                    Eliminar
                  </p>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No se encontraron usuarios
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mt-10 flex justify-end gap-5 mb-8 px-4">
        <button
          onClick={handlePrevPage}
          disabled={offset === 0}
          className={`${
            offset === 0
              ? "p-2 bg-gray-50 rounded-md shadow-sm font-medium"
              : "p-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow-sm text-black font-medium"
          }`}
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          className={`${
            productos.length < limite
              ? "p-2 bg-gray-50 rounded-md shadow-sm font-medium"
              : "p-2 bg-sky-700 hover:bg-sky-800 rounded-md shadow-sm text-white font-medium"
          }`}
          disabled={productos.length < limite}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TableProducts;
