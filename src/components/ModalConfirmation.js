import React from "react";

const ModalConfirmation = ({ changeModalState }) => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="flex flex-col justify-center p-6 bg-white rounded shadow-lg">
        <h1 className="mb-4 text-xl font-bold">¡Operación Exitosa!</h1>
        <button
          className="bg-[#5579EC] px-4 py-2 rounded-md text-white"
          onClick={changeModalState}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmation;
