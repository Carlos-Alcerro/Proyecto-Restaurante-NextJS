import Confirm from "@/components/ConfirmSuccess/Confirm";
import { post } from "@/helpers/AxiosInstance";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormProducts = ({ setCheck, check }) => {
  const { user } = useSelector((state) => state.auth);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!user.token) return;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const formData = new FormData();

      formData.append("nombreProd", data.nombreProd);
      formData.append("descripcion", data.descripcion);
      formData.append("precio", parseFloat(data.precio));
      formData.append("categoria", data.categoria);
      formData.append("inStock", parseInt(data.inStock));

      if (data.files && data.files.length) {
        for (let i = 0; i < data.files.length; i++) {
          formData.append(`files`, data.files[i]);
        }
      }
      const res = await post(
        "http://localhost:3000/api/products",
        formData,
        config
      );
      if (res.status === 201) {
        toast.success(`Producto Creado Exitosamente`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setCheck(!check);
      reset();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="p-3 bg-white shadow-md rounded-md w-full"
    >
      <ToastContainer position="top-right" />
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Nombre Producto
        </label>
        <input
          {...register("nombreProd", {
            required: "El campo (Nombre) es obligatorio",
          })}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Nombre Producto"
        />
        {errors.nombreProd && (
          <span className="text-red-500">{errors.nombreProd.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Descripcion
        </label>
        <input
          {...register("descripcion")}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Descripcion del Productos"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Precio
        </label>
        <input
          {...register("precio")}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Precio del Producto"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Categoria
        </label>
        <select
          {...register("categoria", {
            required: "El campo (Categoria) es obligatorio",
          })}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
        >
          <option>-- Selecciona --</option>
          <option value="platillos">Platillos</option>
          <option value="postres">Postres</option>
          <option value="cocteles">Cocteles</option>
          <option value="otros">Otros</option>
        </select>
        {errors.categoria && (
          <span className="text-red-500">{errors.categoria.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Cantidad
        </label>
        <input
          {...register("inStock")}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Cantidad de Producto"
        />
      </div>
      <div className="mt-3">
        <label
          htmlFor=""
          className="uppercase text-sm font-semibold block mb-2"
        >
          Imagenes
        </label>

        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple
          {...register("files")}
        />
      </div>
      <div className="mt-3 flex justify-center mb-5">
        <button
          type="submit"
          className="w-full md:w-1/2 bg-sky-700 hover:bg-sky-800 px-8 py-2 text-white font-semibold rounded-lg shadow"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default FormProducts;
