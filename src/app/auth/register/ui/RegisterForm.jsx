"use client";
import { post } from "@/helpers/AxiosInstance";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await post("http://localhost:3000/api/auth/register", {
        email: data.email,
        password: data.password,
        name: data.name,
      });
      console.log(res);
      reset();
      if (res.status === 201) {
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-md shadow p-4 md:p-8">
      <div className="flex justify-center">
        <p className="text-sky-800 text-lg md:text-xl font-semibold">
          Registrarse
        </p>
      </div>
      <div className="mt-6">
        <label htmlFor="" className="text-lg text-gray-700 font-semibold block">
          Nombre Completo
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded bg-gray-100 mt-2"
          placeholder="Nombre Completo"
          {...register("name", {
            required: "El campo nombre es requerido",
          })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="mt-10">
        <label htmlFor="" className="text-lg text-gray-700 font-semibold block">
          Correo Electronico
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded bg-gray-100 mt-2"
          placeholder="Correo Electronico"
          {...register("email", {
            required: "El campo email es requerido",
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mt-10">
        <label htmlFor="" className="text-lg text-gray-700 font-semibold block">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded bg-gray-100 mt-2"
          placeholder="**************"
          {...register("password", {
            required: "El campo contraseña es requerido",
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button className="w-full md:w-1/2 bg-sky-800 hover:bg-sky-700 px-8 py-2 text-white font-semibold rounded-lg shadow">
          Registrarse
        </button>
      </div>
      <div className="mt-6 flex justify-between">
        <Link href="" className="text-gray-600 text-sm hover:text-blue-500">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link
          href="/auth/login"
          className="text-gray-600 text-sm hover:text-blue-500"
        >
          Iniciar Sesión
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
