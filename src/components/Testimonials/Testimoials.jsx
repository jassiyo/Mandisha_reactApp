import React from 'react';
import user_1 from '../../assets/user_1.jpg';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe 1',
      location: 'Mandisha, India',
      image: user_1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, optio placeat.'
    },
    {
      name: 'Jane Smith 2',
      location: 'Pune, India',
      image: user_1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, optio placeat.'
    },
    {
      name: 'John Doe 3',
      location: 'Delhi, India',
      image: user_1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, optio placeat.'
    },
    {
      name: 'Jane Smith 4',
      location: 'Goa, India',
      image: user_1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, optio placeat.'
    }
  ];

  return (
    <div className='testimonials'>
      <div className='testimonials-grid'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial-card'>
            <div className='user-info'>
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.location}</span>
              </div>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
