import React from 'react';
import '../styles/TechExp.css';

const TechExp = () => {
  return (
    <div className='timeline-container'>
      <div className='timeline'>
        <div className='timeline-item left'>
          <div className='timeline-content'>
            <img src='https://img.cdndtl.co.uk/c964k834sz0v/e3c6fd06-e76e-442c-b914-547af16be7dc/387ee72ff140c2b6e08d340037ac9487/rsz_bt_logo_to_resize_for_msm.png?auto=format&s=72ea6c547992c8387ee09d68d512789chttps://static.dezeen.com/uploads/2019/06/bt-logo-redesign-hero-1-852x480.jpg' alt='BT Logo' />
            <h2>Call advisor</h2>
            <h3>July 2019 - August 2020</h3>
            <p>
            <ul>
              <li>Worked in the billing and faults department</li>
              <li>Provided assistance and advice to a wide range of customers</li>
              <li>Ensured customer satisfaction with my communication skills and strong ability to solve complex problems</li>
            </ul>
            </p>
          </div>
        </div>

        <div className='timeline-item right'>
          <div className='timeline-content'>
            <img src='https://cdnb.artstation.com/p/assets/images/images/013/951/611/large/hamid-ahbedin-capture4.jpg?1541792740' alt='Artstation' />
            <h2>Teacher</h2>
            <h3>September 2021 - February 2023</h3>
            <p>
              <ul>
                <li>Taught a classroom of 15 pupils</li>
                <li>Organised and delivered engaging lessons covering various subjects</li>
                <li>Ensured student's targets were being met</li>
                <li>Created a positive learning environment</li>
              </ul>
            </p>
          </div>
        </div>

        <div className='timeline-item left'>
          <div className='timeline-content'>
            <img src='https://www.dynamonortheast.co.uk/wp-content/uploads/2022/08/Northcoders-Primary-Logo-Red-4.jpg' alt='Northcoders Logo' />
            <h2>Junior Software Developer</h2>
            <h3>January 2024 - April 2024</h3>
            <p>
              <ul>
                <li>Graduated from Northcoders: One of the UK's top leading bootcamps in the tech industry</li>
                <li>Learned the fundamentals of JavaScript and acquired skills in the PERN stack</li>
                <li>Engaged in daily paired-programming sessions</li>
                <li>Gained hands-on experience through individual and group projects</li>
                <li>Studied Object-Orientated Programming (OOP), APIs and databases</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechExp;
