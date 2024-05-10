"use client";
import Modal from "@/components/Modal/Modal";
import TableProducts from "./ui/TableProducts";
import { RiFunctionAddLine } from "react-icons/ri";
import FormProducts from "./ui/FormProducts";
import { useState } from "react";

const AddProducts = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);
  return (
    <div>
      <Modal Visible={ShowModal} Close={() => setShowModal(false)}>
        <div className="flex justify-center">
          <p className="text-sky-700 text-2xl font-bold">Agregar Producto</p>
        </div>
        <FormProducts setCheck={setCheck} check={check} />
      </Modal>
      <div className="flex justify-center mb-5">
        <p className="text-sky-800 text-lg md:text-2xl font-bold">Productos</p>
      </div>
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setShowModal(true)}
          className="bg-sky-700 hover:bg-sky-800 text-white font-semibold p-3 rounded-md shadow-sm flex gap-4 items-center"
        >
          Agregar <RiFunctionAddLine size={20} color="white" />
        </button>
      </div>

      <TableProducts check={check} />
    </div>
  );
};

export default AddProducts;
