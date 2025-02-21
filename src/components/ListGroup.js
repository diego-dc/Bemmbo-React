import React from "react";
import ListElement from "./ListElement";

const ListGroup = ({ title, items, onSelectItem, selectedItem }) => {
  return (
    <div className="w-full p-2 py-4 text-center">
      <h1 className="mb-4 text-xl font-medium">{title}</h1>
      <ul>
        {items.length === 0 && <li>No items available</li>}
        {items.map((item, index) => (
          <ListElement
            key={item.id}
            index={index}
            amount={item.amount}
            currency={item.currency}
            organization_id={item.organization_id}
            type={item.type}
            selectedItem={selectedItem?.id === item.id} // Ahora compara correctamente
            onClick={() => onSelectItem(item)} // Pasa el evento correctamente
          />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
