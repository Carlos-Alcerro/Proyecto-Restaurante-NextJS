import { useState, useEffect } from "react";
import { get } from "@/helpers/AxiosInstance";

const TableUsers = ({ setUser }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [limite, setlimite] = useState(5);
  const [offset, setOffset] = useState(0);
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await get(
          `http://localhost:3000/api/auth/usuarios?limit=${limite}&offset=${offset}`
        );
        setUsuarios(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [limite, offset]);

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
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Direccion
            </th>
            <th scope="col" className="px-6 py-3">
              Telefono
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
            <th scope="col" className="px-6 py-3">
              Activo
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <tr
                key={usuario.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {usuario.name}
                </th>
                <td className="px-6 py-4">{usuario.email}</td>
                <td className="px-6 py-4">{usuario.direccion}</td>
                <td className="px-6 py-4">{usuario.telefono}</td>
                <td className="px-6 py-4">{usuario.roles[0]}</td>
                <td className="px-6 py-4">
                  {usuario.IsActive === true ? "Activo" : "Inactivo"}
                </td>
                <td className="px-6 py-4 flex justify-between gap-4">
                  <p
                    onClick={() => setUser(usuario)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    Editar
                  </p>

                  <p className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">
                    Desactivar
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
            usuarios.length < limite
              ? "p-2 bg-gray-50 rounded-md shadow-sm font-medium"
              : "p-2 bg-sky-700 hover:bg-sky-800 rounded-md shadow-sm text-white font-medium"
          }`}
          disabled={usuarios.length < limite}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TableUsers;
