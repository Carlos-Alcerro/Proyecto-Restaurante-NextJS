import { RiDashboardFill } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { FaUsers, FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const dataSideBar = [
  {
    id: 1,
    link: "/dashboard",
    name: "Dashboard",
    icon: <RiDashboardFill size={30} />,
  },
  {
    id: 2,
    link: "/usuarios",
    name: "Usuarios",
    icon: <FaUsers size={30} />,
  },
  {
    id: 3,
    link: "/AddProducts",
    name: "Platillos",
    icon: <FaKitchenSet size={30} />,
  },
  {
    id: 4,
    link: "/tareas",
    name: "Tareas",
    icon: <FaTasks size={30} />,
  },
  {
    id: 5,
    link: "/perfil",
    name: "Perfil",
    icon: <CgProfile size={30} />,
  },
];
