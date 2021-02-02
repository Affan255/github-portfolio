import React from "react";
import "./List.css";
const List = ({ items, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li>
            <strong>{item.label}:</strong>
            {item.value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
