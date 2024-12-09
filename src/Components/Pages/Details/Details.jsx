import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Details = () => {

    const {_id, name, email, title, type, amount, deadline, image, description} = useLoaderData();
    

    const handleDonate = () =>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Donation successful!",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    return (
        <div className="py-20">
             <div className="py-10 px-4 lg:px-20">
            <h1 className="font-bold text-3xl text-center mb-10">Campaign Details</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src={image} alt={title} className="w-full rounded-lg shadow-md" />
                <div>
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600 mb-2">
                        <span className="font-bold">Type:</span> {type}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <span className="font-bold">Target Amount:</span> ${amount}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <span className="font-bold">Deadline:</span> {deadline}
                    </p>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <button
                        onClick={handleDonate}
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Donate
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Details;