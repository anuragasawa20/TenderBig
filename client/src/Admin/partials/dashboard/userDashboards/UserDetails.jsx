import { useEffect, useState } from 'react';
import UserCards from './UserCards';


const UserDetails = () => {
    const [forms, setFormData] = useState([]);
    const [userData, setUserData] = useState([]);
    let forms1 = [];
    let userData1 = localStorage.getItem("user");
    let userDataObject = JSON.parse(userData1);
    let id1 = userDataObject.userId;
    useEffect(() => {
        // Fetch data from the API
        let userData1 = localStorage.getItem("user");
        let userDataObject = JSON.parse(userData1);
        setUserData(userDataObject);
        console.log(userDataObject);
        let id;
        id = userDataObject.userId;
        console.log(userDataObject.userId)
        fetch(`http://localhost:5000/apiTender/userdetails/DetailsbyId/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // forms1.push(data)
                setFormData(data);
                console.log(forms);
            }
            )
            .catch((error) => console.log(error));
    }, [id1, forms])

    let careerCount = forms[2].number + forms[1].number

    return (
        <div className="flex justify-center m-5">
            <div className="card-container mx-5">
                <UserCards className="my-5" description={`Counts : ${careerCount}`} title="Career & Manpower" />
                <UserCards className="my-5" description={`Counts : ${forms[6].number}`} title="Registrations" />
                <UserCards className="my-5" description={`Counts : ${forms[5].number}`} title="Company Certifications" />
            </div>
            <div className="card-container mx-5">
                <UserCards className="my-5" description={`Counts : ${forms[1].number}`} title="Licenses" />
                <UserCards className="my-5" description={`Counts : ${forms[4].number}`} title="Individual Certifications" />
                <UserCards className="my-5" description={`Counts : ${forms[0].number}`} title="Auction Materials" />
            </div>
            <div className="card-container mx-5">
                <UserCards className="my-5" description={`Counts : ${forms[8].number}`} title="Offline Tender Filling" />
                <UserCards className="my-5" description={`Counts : ${forms[10].number}`} title="Gem Registration" />
            </div>
            <div className='card-container mx-5'>
                <UserCards className="my-5" description={`Counts : ${forms[7].number}`} title="Joint Venture" />
                <UserCards className="my-5" description={`Counts : ${forms[9].number}`} title="Online Tender Filling" />
            </div>
        </div>
    );
};

export default UserDetails;
