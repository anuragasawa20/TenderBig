<<<<<<< HEAD
import { useEffect, useState } from 'react';
import UserCards from './UserCards';


const UserDetails = () => {
    const [forms, setFormData] = useState(null);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        let userData1 = localStorage.getItem("user");
        let userDataObject = JSON.parse(userData1);
        setUserData(userDataObject);
        console.log(userDataObject);
        let id;
        id = userData.userId;
        console.log(userData.userId)
        fetch(`http://localhost:5000/apiTender/userdetails/DetailsbyId/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [])



    return (
        <div className='flex justify-center m-10'>
            <div className="card-container mx-5">
                <UserCards className='my-5' description="Numbers and Counts" title="Career & Manpower" />
                <UserCards className='my-5' description="Numbers and Counts" title="Registrations" />
                <UserCards className='my-5' description="Numbers and Counts" title="Certifications" />
            </div>
            <div className='card-container mx-5'>
                <UserCards className='my-5' description="Numbers and Counts" title="Licenses" />
                <UserCards className='my-5' description="Numbers and Counts" title="Auction Materials" />
                <UserCards className='my-5' description="Numbers and Counts" title="Joint Venture" />
            </div>
            <div className="card-container mx-5">
                <UserCards className='my-5' description="Numbers and Counts" title="Online Tender Filling" />
                <UserCards className='my-5' description="Numbers and Counts" title="Offline Tender Filling" />
                <UserCards className='my-5' description="Numbers and Counts" title="Gem Registration" />
            </div>
        </div>
    );
};

export default UserDetails;
=======
import UserCards from './UserCards';

const UserDetails = () => {
  return (
    <div className='flex justify-center m-10'>
      <div className="card-container mx-5">
        <UserCards className='my-5' description="Numbers and Counts" title="Career & Manpower" />
        <UserCards className='my-5' description="Numbers and Counts" title="Registrations" />
        <UserCards className='my-5' description="Numbers and Counts" title="Certifications" />
      </div>
      <div className='card-container mx-5'>
        <UserCards className='my-5' description="Numbers and Counts" title="Licenses" />
        <UserCards className='my-5' description="Numbers and Counts" title="Auction Materials" />
        <UserCards className='my-5' description="Numbers and Counts" title="Joint Venture" />
      </div>
      <div className="card-container mx-5">
        <UserCards className='my-5' description="Numbers and Counts" title="Online Tender Filling" />
        <UserCards className='my-5' description="Numbers and Counts" title="Offline Tender Filling" />
        <UserCards className='my-5' description="Numbers and Counts" title="Gem Registration" />
      </div>
    </div>
  );
};

export default UserDetails;

>>>>>>> 0bb8a751ba34c7e2720fff21e7b79d36a721aa7e
