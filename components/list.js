import React from "react";

const List = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={`renderListElement${index}`}>{item}</div>
      ))}
    </div>
  );
};

export default List;
