"use client";
import { post } from "@/helpers/AxiosInstance";
import { loginSuccess } from "@/store/authSesion/sessionSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  console.log("USER", user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await post("http://localhost:3000/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log("RES", res);
      dispatch(loginSuccess(res.data));
      reset();
      if (res.status === 201 && res.data.roles[0] === "user") {
        router.push("/productos");
      }
      if (res.status === 201 && res.data.roles[0] === "admin") {
        router.push("/AddProducts");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-md shadow p-4 md:p-8">
      <div className="flex justify-center">
        <p className="text-sky-800 text-lg md:text-xl font-semibold">
          Iniciar Sesión
        </p>
      </div>
      <div className="mt-6">
        <label htmlFor="" className="text-lg text-gray-700 font-semibold block">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded bg-gray-100 mt-2"
          placeholder="Correo Electrónico"
          {...register("email", {
            required: "El correo electrónico es requerido",
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="" className="text-lg text-gray-700 font-semibold block">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded bg-gray-100 mt-2"
          placeholder="Contraseña"
          {...register("password", { required: "La contraseña es requerida" })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button className="w-full md:w-1/2 bg-sky-800 hover:bg-sky-700 px-8 py-2 text-white font-semibold rounded-lg shadow">
          Ingresar
        </button>
      </div>
      <div className="mt-6 flex justify-between">
        <Link href="" className="text-gray-600 text-sm hover:text-blue-500">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link
          href="/auth/register"
          className="text-gray-600 text-sm hover:text-blue-500"
        >
          Regístrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
