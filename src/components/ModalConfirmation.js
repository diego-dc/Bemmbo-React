import React from "react";
import { Icon } from "@iconify/react";

const ModalConfirmation = ({ changeModalState }) => {
  return (
    <div className="fixed inset-0 top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col justify-center gap-2 p-6 bg-white rounded shadow-lg">
        <div className="flex justify-center">
          <Icon
            icon="icon-park-solid:check-one"
            className="text-5xl text-blue-500"
          />
        </div>
        <h1 className="mb-4 text-xl font-bold">
          ¡Nota de crédito asignada correctamente!
        </h1>
        <button
          className="bg-[#5579EC] px-4 py-2 rounded-md text-white"
          onClick={changeModalState}
        >
          Seguir Asignando
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmation;
