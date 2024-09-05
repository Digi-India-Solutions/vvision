import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCategory = () => {
    const [btnLoading, setBtnLoading] = useState(false);

    const [data, setData] = useState({
        categoryname: "",
        image: ""
    })
    const navigate = useNavigate()
    const { _id } = useParams()
    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getFileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }
    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/category/" + _id)
            console.log(res);
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const postData = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("categoryname", data.categoryname)
        formData.append("description", data.description)
        formData.append("image", data.image)
        setBtnLoading(true)
        try {
            let res = await axios.put("http://localhost:8000/api/category/" + _id, formData)
            if (res.status === 200) {
                toast.success("Category Updated Successfully")
                navigate("/all-category")
                setBtnLoading(true)
            }
        } catch (error) {
            setBtnLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Category</h4>
                </div>
                <div className="links">
                    <Link to="/all-category" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form onSubmit={postData}>
                    <div className="row">
                        <div className="mb-2 col-md-6">
                            <label htmlFor="productName" className="form-label">Category Name</label>
                            <input type="text" name="categoryname" value={data.categoryname} id="productName" className="form-control" onChange={getInputData} />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="productName" className="form-label">Category Image</label>
                            <input type="file" name="image" id="productName" className="form-control" onChange={getFileData} />
                        </div>
                    </div>
                    <button type="submit" className="">{btnLoading ? "Please Wait..." : "Update Category"}</button>
                </form>
            </div>
        </>
    );
};

export default EditCategory;
