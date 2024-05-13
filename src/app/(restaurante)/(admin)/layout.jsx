"use client";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
  const user = useSelector((state) => state.auth);

  if (
    !user ||
    !user.user ||
    !user.user.roles ||
    user.user.roles[0] !== "admin" ||
    !user.user.token
  ) {
    redirect("/auth/login");
  }

  return (
    <div className="h-full">
      <div className="mt-32 md:mt-24 w-full block md:flex">
        <div className="w-full md:w-1/3">
          <SideBar />
        </div>
        <main className="mt-5 p-2 md:w-2/3">{children}</main>
      </div>
    </div>
  );
}
