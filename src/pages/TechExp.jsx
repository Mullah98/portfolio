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
            <p>Worked in BT's billing and faults department where I provided expert advice and assistance to a wide range of customers.
            With my communication skills and strong ability to solve complex problems, I was able to ensure customer satisfaction</p>
          </div>
        </div>

        <div className='timeline-item right'>
          <div className='timeline-content'>
            <img src='https://cdnb.artstation.com/p/assets/images/images/013/951/611/large/hamid-ahbedin-capture4.jpg?1541792740' alt='Artstation' />
            <h2>Teacher</h2>
            <h3>September 2021 - February 2023</h3>
            <p>Taught a classroom of 15 pupils, organizing and delivering lessons covering various subjects. Paid a close attention to each 
            student to ensure their targets were being met and create a positive learning environment.</p>
          </div>
        </div>

        <div className='timeline-item left'>
          <div className='timeline-content'>
            <img src='https://www.dynamonortheast.co.uk/wp-content/uploads/2022/08/Northcoders-Primary-Logo-Red-4.jpg' alt='Northcoders Logo' />
            <h2>Junior Software Developer</h2>
            <h3>January 2024 - April 2024</h3>
            <p>Graduated from Northcoders, one of the UK's top leading bootcamps in the tech industry. During the 13 software development program,
            we were taught the fundamentals of JavaScript and acquired skills in the PERN stack. Daily paired-programming and hand-on experience
            through individual and group projects helped me gain understanding of coding principles, preparing me for real-world software 
            development environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechExp;
