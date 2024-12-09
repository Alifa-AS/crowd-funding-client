import React from 'react';
import img from '../../../assets/c2.jpg'

const About = () => {
    return (
        <div>
             <div className='my-20'>
            <div className="hero bg-base-200 p-8 lg:p-20">
            <div className="hero-content flex-col lg:flex-row lg:gap-10" data-aos="flip-left">
                <img
                src={img}
                className="w-full rounded-lg shadow-2xl max-w-[250px] sm:max-w-[250px] md:max-w-sm lg:max-w-md" />
                <div className='text-center lg:text-left'>
                <h1 className="text-3xl lg:text-4xl font-bold">About Us</h1>
                <p className="py-4 lg:py-6 text-sm sm:text-base">
                At <span className='font-semibold'>Crowd Cube</span>, we believe in the power of people coming together to make dreams a reality. Our platform connects creators, innovators, and changemakers with supporters who want to bring meaningful projects to life.

                From groundbreaking ideas to heartfelt causes, we provide a space where every contribution helps build a brighter future. Together, we can create, inspire, and make a lasting impact—one 
                project at a time.
                </p>
                <button className="btn bg-[#4157eb] mt-4 text-white">Get Started</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;