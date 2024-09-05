import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBanner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { _id } = useParams()

    const getApiData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/banner/" + _id)
            console.log(res)
            if (res.status === 200) {
                setImage(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApiData()
    }, [_id])

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
            const response = await axios.put('http://localhost:8000/api/banner/' + _id, formData, {
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
                    <h4>Edit Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="bannerImage" className="form-label">Banner Image</label>
                        <input type="file" name='image' className="form-control" id="bannerImage" onChange={getfiledata} />
                    </div>
                    <div className="col-md-6">
                        {
                            image !== null ? <img src={image.image} alt="" style={{ width: "100%" }} /> :
                                <img src="" alt="" style={{ width: "100%" }} />
                        }
                    </div>
                    <div className="col-md-12 mt-5 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Update Banner"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditBanner;
