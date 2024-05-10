import { post } from "@/helpers/AxiosInstance";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormUsers = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await post("http://localhost:3000/api/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        telefono: data.telefono,
        direccion: data.direccion,
        roles: [data.roles],
      });
      if (res.status === 201) {
        toast.success(`Usuario Creado Exitosamente`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
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
          Nombre Completo
        </label>
        <input
          {...register("name", {
            required: "El campo (Nombre) es obligatorio",
          })}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Nombre Completo"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Correo Electronico
        </label>
        <input
          {...register("email", {
            required: "El campo (Correo Electronico) es obligatorio",
          })}
          type="email"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Correo Electronico"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Contraseña
        </label>
        <input
          {...register("password", {
            required: "El campo (Contraseña) es obligatorio",
          })}
          type="password"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="***********"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Telefono
        </label>
        <input
          {...register("telefono", {
            required: "El campo (Telefono) es obligatorio",
          })}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="ejem: 99099009"
        />
        {errors.telefono && (
          <span className="text-red-500">{errors.telefono.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Direccion
        </label>
        <input
          {...register("direccion", {
            required: "El campo (Direccion) es obligatorio",
          })}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
          placeholder="Direccion"
        />
        {errors.direccion && (
          <span className="text-red-500">{errors.direccion.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="" className="uppercase text-sm font-semibold block">
          Rol
        </label>
        <select
          {...register("roles", {
            required: "El campo (Rol) es obligatorio",
          })}
          type="text"
          className="p-2 shadow-sm bg-gray-100 w-full mt-3"
        >
          <option>-- Selecciona --</option>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
          <option value="cocinero">Cocinero</option>
        </select>
        {errors.roles && (
          <span className="text-red-500">{errors.roles.message}</span>
        )}
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

export default FormUsers;
