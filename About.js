import React from 'react'
import about_img from './about.jpg'

const About = () => {
    
    return (
        <div className="container" id="about">
            <div className='row pt-5'>
                <div className='row'>
                  
                        <h1 className='text-center'>About <span className='text-danger'>HIT</span></h1>
                  
                    <div className=' col-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 p-5'>
                        <h3>Welcome to <span className='text-danger'>Hyderabad IT Trainings</span></h3>
                        <p>Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classroom and online trainings in India, USA and UK, Australia. We are Providing high quality training is our core value. We offer both classroom and online training on niche technologies which are in high demand. All our trainers are IT professionals with rich experience.</p>
                        <p>Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry experts with more than 9+ years of experience in leading MNC Companies. We are wellknown for our practical approach towards training that enables students to gain realtime exposure.</p>
                        <p>Hyderabad <strong>IT Trainings is a one-stop shop for IT courses, Web Development services & Recruitment services.</strong> Hyderabad IT Trainings concentrates on its vision of building up strong client and business partnerships. To this end, Hyderabad IT Trainings offers Real-time and placement focuses training services.</p>
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 d-flex  p-5 justify-content-center align-items-center'>
                        <img src={about_img} width="600" height="400" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );

};
export default About


