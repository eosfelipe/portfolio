import React from 'react';

const ServiceItem = ({ img, title, description }) => {
  return (
    <div className="servicesBx" data-aos="fade-up">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
