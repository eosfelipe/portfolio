import React from 'react';

const WorkItem = ({ img, name }) => {
  return (
    <div className="workBx" data-aos="fade-up" data-aos-delay="400">
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
