"use client";
import { logout } from "@/store/authSesion/sessionSlice";
import Image from "next/image";
import Link from "next/link";
import { redirect, useParams, usePathname } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const path = usePathname();

  const handleLogout = async () => {
    await dispatch(logout());
    window.location.href = "/auth/login";
  };

  return (
    <nav className="bg-sky-700 shadow-md dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2">
        {user && user.user?.roles && user.user.roles[0] === "admin" && (
          <Link href="" className="flex justify-between items-center gap-3">
            <Image
              src="/svg/carls-jr-restaurants-1.svg"
              alt="svg"
              width={50}
              height={50}
            />
            <p className="text-lg font-semibold text-white">
              Carl&#39;s Restaurant
            </p>
          </Link>
        )}
        {(user.user === null || user?.user?.roles[0] === "user") && (
          <>
            <Link href="/" className="flex justify-between items-center gap-3">
              <Image
                src="/svg/carls-jr-restaurants-1.svg"
                alt="svg"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold text-white">
                Carl&#39;s Restaurant
              </p>
            </Link>
            <div>
              <Link
                href="/productos"
                className={`${
                  path === "/productos"
                    ? "text-lg font-light cursor-pointer underline underline-offset-1 text-white"
                    : "text-lg font-light cursor-pointer hover:underline hover:underline-offset-1 text-white"
                }`}
              >
                Todo
              </Link>
            </div>
            <div>
              <Link
                href="/productos/platillos"
                className={`${
                  params.categoria === "platillos"
                    ? "text-lg font-light cursor-pointer underline underline-offset-1 text-white"
                    : "text-lg font-light cursor-pointer hover:underline hover:underline-offset-1 text-white"
                }`}
              >
                Platillos
              </Link>
            </div>
            <div>
              <Link
                href="/productos/postres"
                className={`${
                  params.categoria === "postres"
                    ? "text-lg font-light cursor-pointer underline underline-offset-1 text-white"
                    : "text-lg font-light cursor-pointer hover:underline hover:underline-offset-1 text-white"
                }`}
              >
                Postres
              </Link>
            </div>
            <div>
              <Link
                href="/productos/cocteles"
                className={`${
                  params.categoria === "cocteles"
                    ? "text-lg font-light cursor-pointer underline underline-offset-1 text-white"
                    : "text-lg font-light cursor-pointer hover:underline hover:underline-offset-1 text-white"
                }`}
              >
                Cócteles
              </Link>
            </div>
            <div>
              <Link
                href="/productos/otros"
                className={`${
                  params.categoria === "otros"
                    ? "text-lg font-light cursor-pointer underline underline-offset-1 text-white"
                    : "text-lg font-light cursor-pointer hover:underline hover:underline-offset-1 text-white"
                }`}
              >
                Otros
              </Link>
            </div>
            <Link href="/cart" className="cursor-pointer">
              <div className="bg-white h-4 w-4 rounded-full ml-5 flex justify-center items-center">
                <span className="text-sky-600 font-bold">
                  {cart.cart.length}
                </span>
              </div>
              <IoCartOutline size={30} color="white" />
            </Link>
          </>
        )}
        <div className="text-white">
          {user.user === null ? (
            <>
              <Link
                href="/auth/login"
                className="text-base font-light hover:underline hover:underline-offset-1"
              >
                Iniciar Sesion
              </Link>{" "}
              |{" "}
              <Link
                href="/auth/register"
                className="text-base font-light hover:underline hover:underline-offset-1"
              >
                Registrate
              </Link>
            </>
          ) : (
            <div>
              <button
                onClick={handleLogout}
                className="p-3 rounded text-white shadow-lg bg-red-600 hover:bg-red-500 border-spacing-1 border"
              >
                Cerrar Sesion
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
