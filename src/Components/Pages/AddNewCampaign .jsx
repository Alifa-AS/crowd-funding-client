import React from 'react';

const AddNewCampaign  = () => {

    const handleAddCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const type  = form.type.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const image = form.image.value;

        const newCampaign = {name, email, title, type, amount, deadline, image}
        console.log(newCampaign);
    }


    return (
        <div className='my-20'>
           <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add Campaign</h2>
            <form onSubmit={handleAddCampaign}>
                {/* form row 1*/}
               <div className='md:flex mb-8'>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input type="text" name="name" placeholder="name" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" name="email" placeholder="Email" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
                {/* form row 2*/}
               <div className='md:flex mb-8'>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Title</span>
                    </div>
                    <input type="text" name="title" placeholder="title" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Type</span>
                    </div>
                    <input type="text" name="type" placeholder="type" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
                {/* form row 3*/}
               <div className='md:flex mb-8'>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Donation Amount</span>
                    </div>
                    <input type="text" name="amount" placeholder="Donation Amount" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Deadline</span>
                    </div>
                    <input type="text" name="deadline" placeholder="deadline" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
                {/* image row 3*/}
               <div className='ml-4 mb-8'>
               <div className='w-full'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Image URL</span>
                    </div>
                    <input type="text" name="image" placeholder="Image URL" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
               <input type="submit" value="Add Campaign" className='btn btn-block bg-[#4157eb] text-white font-bold' />
            </form>
        </div>
        </div>
    );
};

export default AddNewCampaign ;