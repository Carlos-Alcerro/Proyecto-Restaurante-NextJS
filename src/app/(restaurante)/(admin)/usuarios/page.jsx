"use client";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import TableUsers from "./ui/TableUsers";
import { IoPersonAddOutline } from "react-icons/io5";
import FormUsers from "./ui/FormUsers";

const Usuarios = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});

  console.log("USUARIO DESDE PADRE", user);

  return (
    <div>
      <Modal Visible={ShowModal} Close={() => setShowModal(false)}>
        <div className="flex justify-center">
          <p className="text-sky-700 text-2xl font-bold">Agregar Usuario</p>
        </div>
        <FormUsers />
      </Modal>
      <div className="flex justify-center mb-5">
        <p className="text-sky-800 text-lg md:text-2xl font-bold">Usuarios</p>
      </div>
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setShowModal(true)}
          className="bg-sky-700 hover:bg-sky-800 text-white font-semibold p-3 rounded-md shadow-sm flex gap-4 items-center"
        >
          Agregar <IoPersonAddOutline size={20} color="white" />
        </button>
      </div>
      <TableUsers setUser={setUser} />
    </div>
  );
};

export default Usuarios;
