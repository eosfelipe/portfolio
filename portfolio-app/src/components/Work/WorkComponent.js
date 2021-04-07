import React from 'react';
import './Work.css';
import WorkItem from './WorkItemComponent';

const Work = () => {
  const projects = [
    {
      img: require('../../assets/project01.jpg'),
      name: 'project 01',
    },
    {
      img: require('../../assets/project02.jpg'),
      name: 'project 02',
    },
    {
      img: require('../../assets/project03.jpg'),
      name: 'project 03',
    },
  ];
  return (
    <section className="work" id="work">
      <div className="title">
        <h2 data-aos="fade-up">Recent Work</h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima
          rerum laborum aliquid, eius voluptatem harum delectus facere. Sunt
          perferendis amet at odio blanditiis et distinctio quae sed laborum
          architecto.
        </p>
      </div>
      <div className="content">
        {projects.map((project, index) => (
          <WorkItem key={index} img={project.img.default} name={project.name} />
        ))}
      </div>
    </section>
  );
};

export default Work;
