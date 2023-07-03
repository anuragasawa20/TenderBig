import { useState } from 'react';

const Director = () => {
    const [directorsName, setDirectorsName] = useState(['']);
    const [directorsAadhar, setDirectorsAadhar] = useState(['']);
    const [directorsPAN, setDirectorsPAN] = useState(['']);
    const [directorsDOB, setDirectorsDOB] = useState(['']);
    const [directorsFatherName, setDirectorsFatherName] = useState(['']);


    const handleDirectorNameChange = (index, value) => {
        const updatedDirectorsName = [...directorsName];
        updatedDirectorsName[index] = value;
        setDirectorsName(updatedDirectorsName);
    };

    const handleDirectorAadharChange = (index, value) => {
        const updatedDirectorsAadhar = [...directorsAadhar];
        updatedDirectorsAadhar[index] = value;
        setDirectorsAadhar(updatedDirectorsAadhar);
    };

    const handleDirectorPANChange = (index, value) => {
        const updatedDirectorsPAN = [...directorsPAN];
        updatedDirectorsPAN[index] = value;
        setDirectorsPAN(updatedDirectorsPAN);
    };

    const handleDirectorDOBChange = (index, value) => {
        const updatedDirectorsDOB = [...directorsDOB];
        updatedDirectorsDOB[index] = value;
        setDirectorsDOB(updatedDirectorsDOB);
    };

    const handleDirectorFatherNameChange = (index, value) => {
        const updatedDirectorsFatherName = [...directorsFatherName];
        updatedDirectorsFatherName[index] = value;
        setDirectorsFatherName(updatedDirectorsFatherName);
    };


    const addDirectorInput = () => {
        setDirectorsName([...directorsName, '']);
        setDirectorsAadhar([...directorsAadhar, '']);
        setDirectorsPAN([...directorsPAN, '']);
        setDirectorsDOB([...directorsDOB, '']);
        setDirectorsFatherName([...directorsFatherName, '']);
    };

    return (
        <div>
            <label>Director Name</label>
            {directorsName.map((director, index) => (
                <div key={index}>
                    <input
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="text"
                        value={director}
                        onChange={(e) => handleDirectorNameChange(index, e.target.value)}
                    />
                </div>
            ))}

            <label>Director 16-digit Aadhar</label>
            {directorsAadhar.map((aadhar, index) => (
                <div key={index}>
                    <input
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="text"
                        value={aadhar}
                        onChange={(e) => handleDirectorAadharChange(index, e.target.value)}
                    />
                </div>
            ))}

            <label>Director PAN</label>
            {directorsPAN.map((pan, index) => (
                <div key={index}>
                    <input
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="text"
                        value={pan}
                        onChange={(e) => handleDirectorPANChange(index, e.target.value)}
                    />
                </div>
            ))}

            <label>Director Date of Birth</label>
            {directorsDOB.map((dob, index) => (
                <div key={index}>
                    <input
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="date"
                        value={dob}
                        onChange={(e) => handleDirectorDOBChange(index, e.target.value)}
                    />
                </div>
            ))}

            <label>Director Father Name</label>
            {directorsFatherName.map((fatherName, index) => (
                <div key={index}>
                    <input
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="text"
                        value={fatherName}
                        onChange={(e) => handleDirectorFatherNameChange(index, e.target.value)}
                    />
                </div>
            ))}


            <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700 my-1"
                onClick={addDirectorInput}
            >
                Add
            </button>
        </div>
    );
};

export default Director;
