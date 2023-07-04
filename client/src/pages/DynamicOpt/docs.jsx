import { useState } from 'react';
import PropTypes from 'prop-types';

const Docs = ({ onDocumentSubmit }) => {
    const [documents, setDocuments] = useState([]);
    const [options, setOptions] = useState([]);

    const handleDocumentUpload = (index, file) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index] = file;
        setDocuments(updatedDocuments);
    };

    const addDocuments = () => {
        setDocuments([...documents, null]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Combine all the document data into a single object
        const documentsData = {
            documents,
        };

        // Pass the documentsData to the parent component
        onDocumentSubmit(documentsData);

        // Log the data to the console
        console.log(documentsData);
    };

    const handleFileChange = (index, e) => {
        const file = e.target.files[0];
        handleDocumentUpload(index, file);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {documents.map((document, index) => (
                    <div key={index}>
                        <input
                            type="file"
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            onChange={(e) => handleFileChange(index, e)}
                            required
                        />
                    </div>
                ))}

                <button
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700 my-1 mx-1"
                    type="button"
                    onClick={addDocuments}
                >
                    Add
                </button>

                {/* <button
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700 my-1 mx-1"
                    type="submit"
                >
                    Submit
                </button> */}
            </form>
        </div>
    );
};

Docs.propTypes = {
    onDocumentSubmit: PropTypes.func.isRequired,
};

export default Docs;
