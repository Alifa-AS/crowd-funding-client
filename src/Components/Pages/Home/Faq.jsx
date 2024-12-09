import React from 'react';

const Faq = () => {
    return (
        <>
        <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-center py-10'>Frequently Asked</h1>
          </section>
        <div className='mb-20'>

            <div className="collapse collapse-plus bg-base-200 my-5">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">What is crowdfunding, and how does it work?</div>
            <div className="collapse-content">
                <p>Crowdfunding is a way to raise funds for a project or idea by collecting small contributions from a large number of people, usually online. Creators share their projects, and backers contribute funds to help bring them to life.</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-5">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">What kinds of projects can be funded?</div>
            <div className="collapse-content">
                <p>Our platform supports a variety of projects, including creative works, innovative products, community initiatives, and social causes. As long as your idea is legal and aligns with our guidelines, you can start a campaign!</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-5">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">What happens if a project doesn’t reach its funding goal?</div>
            <div className="collapse-content">
                <p>If a project doesn’t meet its funding goal, contributions may be refunded to the backers, depending on the funding model. We encourage creators to be transparent about their plans, even in this case.</p>
            </div>
           </div>
        </div>

        </>
    );
};

export default Faq;