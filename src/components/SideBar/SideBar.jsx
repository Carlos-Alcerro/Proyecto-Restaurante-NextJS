"use client";
import Image from "next/image";
import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { dataSideBar } from "@/data/SideBarData";

const SideBar = () => {
  const params = usePathname();
  return (
    <aside className="px-3">
      <div className="mb-5 flex justify-center">
        <div className="block mb-8 mt-5">
          <div>
            <Image
              src="/images/perfilAdm.jpg"
              alt="perfil-Admin"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="mt-3">
            <p>Carlos Alcerro</p>
          </div>
        </div>
      </div>
      {dataSideBar.map((data) => (
        <Link
          key={data.id}
          href={data.link}
          className={`${
            data.link === params
              ? "flex justify-around bg-sky-700 text-white shadow-md items-center p-4 w-full"
              : "flex justify-around bg-white shadow-md items-center p-4 w-full"
          }`}
        >
          <p
            className={`${
              data.link === params
                ? "text-white font-light rounded-sm"
                : "text-black font-light rounded-sm"
            }`}
          >
            {data.name}
          </p>
          {data.icon}
        </Link>
      ))}
    </aside>
  );
};

export default SideBar;
