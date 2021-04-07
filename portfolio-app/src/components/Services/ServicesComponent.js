import React from 'react';
import './Services.css';
import ServiceItem from './ServicesItemComponent';

const Services = () => {
  const services = [
    {
      img: require('../../assets/webcomponents-dot-org.svg'),
      title: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque vitae impedit nisi ipsam perspiciatis similique pariatur consectetur rem dolores quidem possimus magnam excepturi aspernatur, debitis illum vero recusandae maiores?',
    },
    {
      img: require('../../assets/react.svg'),
      title: 'Web Developer',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque vitae impedit nisi ipsam perspiciatis similique pariatur consectetur rem dolores quidem possimus magnam excepturi aspernatur, debitis illum vero recusandae maiores?',
    },
    {
      img: require('../../assets/netlify.svg'),
      title: 'CI/CD',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque vitae impedit nisi ipsam perspiciatis similique pariatur consectetur rem dolores quidem possimus magnam excepturi aspernatur, debitis illum vero recusandae maiores?',
    },
    {
      img: require('../../assets/github.svg'),
      title: 'Deployment',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque vitae impedit nisi ipsam perspiciatis similique pariatur consectetur rem dolores quidem possimus magnam excepturi aspernatur, debitis illum vero recusandae maiores?',
    },
  ];
  return (
    <section className="services" id="services">
      <div className="title">
        <h2 data-aos="fade-up">Our Services</h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          animi odio. Rerum molestias, unde cumque, atque iste officiis quae,
          nisi veritatis quo sit assumenda! Corporis quae et ullam debitis
          repellat!
        </p>
      </div>
      <div className="content">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            img={service.img.default}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
