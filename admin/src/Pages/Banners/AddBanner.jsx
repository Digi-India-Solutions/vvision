import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBanner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const getfiledata = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please select an image!");
            return;
        }
        const formData = new FormData();
        formData.append('image', image);
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:8000/api/banner', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response)
            if (response.data.success) {
                toast.success("Banner added successfully!");
                navigate('/all-banners');
            } else {
                toast.error("Failed to add banner.");
            }
        } catch (error) {
            console.error("Error uploading banner:", error);
            toast.error("An error occurred while adding the banner.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="bannerImage" className="form-label">Banner Image</label>
                        <input type="file" className="form-control" id="bannerImage" name='image' onChange={getfiledata} />
                    </div>
                    <div className="col-md-6 mt-5 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Banner"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBanner;
