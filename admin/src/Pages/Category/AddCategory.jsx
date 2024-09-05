import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
    const [isLoading, setIsloding] = useState(false)
    const [data, setData] = useState({
        categoryname: "",
        image: ""
    })
    const navigate = useNavigate()
    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getFileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }
    const postData = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("categoryname", data.categoryname)
        formData.append("image", data.image)
        setIsloding(true)
        try {
            let res = await axios.post("http://localhost:8000/api/category", formData)
            console.log(res)
            if (res.status === 200) {
                toast.success("Product Category is created")
                navigate("/all-category")
                setIsloding(false)
            }
        } catch (error) {
            setIsloding(false)
            console.log(error);
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Category</h4>
                </div>
                <div className="links">
                    <Link to="/all-category" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form onSubmit={postData}>
                    <div className="row">
                        <div className="mb-2 col-md-6">
                            <label htmlFor="productName" className="form-label">Machine Category Name</label>
                            <input type="text" name="categoryname" id="productName" className="form-control" onChange={getInputData} />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="productName" className="form-label">Machine Category Image</label>
                            <input type="file" name="image" id="productName" className="form-control" onChange={getFileData} />
                        </div>
                        <button type="submit" >{isLoading ? "Please Wait..." : "Add Category"}</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCategory;
