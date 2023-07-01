import { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    // Function to handle file selection
    const handleFileSelect = (acceptedFiles) => {
        setSelectedFiles(acceptedFiles);
    };

    // Function to handle file upload
    const handleFileUpload = () => {
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('files', file);
            });
console.log("got file")
            axios
                .post('http://localhost:5000/api/upload', formData)
                .then((response) => {
                    console.log('Files uploaded successfully:', response.data);
                    // Handle the successful upload
                })
                .catch((error) => {
                    console.error('Error uploading files:', error);
                    // Handle the error
                });
        }
    };

    // Use the `useDropzone` hook to enable file drop functionality
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: '.pdf',
        multiple: true,
        onDrop: handleFileSelect,
    });

    return (
        <div>
            <div {...getRootProps()} className="dropzone border rounded-md p-3 my-3">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the PDF files here...</p>
                ) : (
                    <p style={{ color: 'blue', cursor: 'pointer' }}>
                        Upload
                    </p>
                )}
            </div>
            {selectedFiles.length > 0 && (
                <div className='container'>
                    <p>Selected files:</p>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <button onClick={handleFileUpload}>Upload</button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
