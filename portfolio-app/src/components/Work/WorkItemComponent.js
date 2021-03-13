import React from "react";

const WorkItem = ({ img, name }) => {
  return (
    <div className="workBx">
      <div className="imgBx">
        <img src={img} alt={name} />
      </div>
      <div className="textBx">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default WorkItem;
