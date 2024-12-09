import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyCampaign = () => {
    const { user } = useContext(AuthContext)
    useEffect(()=>{
       if(user?.email){
        fetch(`http://localhost:5000/myCampaign/${user?.email}`)
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
        })
        .catch((error)=>{
            console.log('error facing', error)
        })
       }
    },[user?.email])

    return (
        <div>
            My Campaign
        </div>
    );
};

export default MyCampaign;