import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";

export default function AdminLayout({ children }) {
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
