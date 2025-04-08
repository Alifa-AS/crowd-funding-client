import React from 'react';
import img from '../../assets/c1.png'
import img2 from '../../assets/c2.png'
import img3 from '../../assets/c3.jpg'


const HowTo = () => {
    return (
        <div className="my-20" data-aos="fade-up"data-aos-duration="2000">
        <h1 className='font-bold text-3xl text-center py-2'>How To Help</h1>
        <div className="hero bg-base-200 lg:py-10">
        <div className="hero-content text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card-1 */}
            <div className="card bg-base-100 shadow-xl" data-aos="flip-right">
            <figure>
                <img src={img} 
                className='w-full h-auto object-cover'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                Register First
                </h2>
                <p>Join us in spreading happy for people. Register now to donate or request for those help need!</p>
                <div className="card-actions justify-end">
                
                <div className="badge badge-outline">Donate</div>
                </div>
            </div>
            </div>
            {/* card-2 */}
            <div className="card bg-base-100 shadow-xl" data-aos="flip-right">
            <figure>
            <img src={img2} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                Donate Funding
                </h2>
                <p>Make a difference this winter by donating unused warm clothes to those who need them the most.</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Donate</div>
                </div>
            </div>
            </div>
            {/* card-3 */}
            <div className="card bg-base-100 shadow-xl" data-aos="flip-right">
            <figure>
            <img src={img3} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                Request Assistance
                </h2>
                <p>If you or someone you know needs winter clothes, register and request support easily through our platform.</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Donate</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
};

export default HowTo;