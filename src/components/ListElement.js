import React from "react";

const ListElement = ({
  index,
  amount,
  currency,
  organization_id,
  type,
  selectedItem,
  onClick,
}) => {
  return (
    <>
      <li
        className={`p-2 cursor-pointer grid grid-cols-3 gap-16 rounded text-sm w-full ${
          selectedItem ? "bg-slate-100" : "bg-white"
        }`}
        onClick={onClick}
      >
        <div>
          inv_{index} ({organization_id})
        </div>
        <div>
          {amount} ({currency})
        </div>
        <div>{type}</div>
      </li>
      <hr />
    </>
  );
};

export default ListElement;
