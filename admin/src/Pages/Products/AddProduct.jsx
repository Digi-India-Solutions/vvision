import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';

const AddProduct = () => {
    const [isLoading, setIsloding] = useState(false)
    const navigate = useNavigate();
    const editor = useRef(null);
    const [catedata, setCatedata] = useState([]);

    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/category");
            console.log(res);
            setCatedata(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [data, setData] = useState({
        categoryname: '',
        productname: '',
        details: "",
        tableData: "",
        image1: '',
        image2: '',
        image3: '',
        image4: ''
    });

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getInputfile = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const handleEditorChange = (content) => {
        setData({ ...data, tableData: content });
    };

    const postData = async (e) => {
        e.preventDefault();
        try {
            setIsloding(true)
            console.log(data)
            const formData = new FormData();
            formData.append("categoryname", data.categoryname)
            formData.append("productname", data.productname)
            formData.append("details", data.details)
            formData.append("tableData", data.tableData)
            formData.append("image1", data.image1);
            formData.append("image2", data.image2);
            formData.append("image3", data.image3);
            formData.append("image4", data.image4);
            const res = await axios.post("http://localhost:8000/api/product", formData);
            console.log(res);
            if (res.status === 200) {
                toast.success("New Product created");
                navigate("/all-products");
                setIsloding(false)
            }
        } catch (error) {
            setIsloding(false)
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Product</h4>
                </div>
                <div className="links">
                    <Link to="/all-products" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form onSubmit={postData} className="mt-4">
                    <div className="row">
                        <div className="col-md-6 mb-2 mt-1">
                            <label htmlFor="category">Select Product Category</label>
                            <select name="categoryname" id="category" onChange={getInputData} className="form-control">
                                <option disabled selected>Choose Category</option>
                                {
                                    catedata.map((item, index) =>
                                        <option key={index} value={item.categoryname}>{item.categoryname}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">Machine Name</label>
                            <input type="text" id="name" name="productname" onChange={getInputData} className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="">Product Detals </label>
                            <textarea name="details" onChange={getInputData} id="" className='form-control'></textarea>
                        </div>
                    </div>
                    <div className=''>
                        <label>Product details: <sup className='text-danger'>*</sup></label>
                        <JoditEditor
                            ref={editor}
                            value={data.tableData}
                            onChange={handleEditorChange}
                            placeholder="Enter product details here..."
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="pic1" className="form-label">Image<sup className='text-danger'>*</sup></label>
                            <input type="file" name="image1" onChange={getInputfile} className="form-control" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="pic2" className="form-label">Image<sup className='text-danger'>*</sup></label>
                            <input type="file" name="image2" onChange={getInputfile} className="form-control" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="pic3" className="form-label">Image<sup className='text-danger'>*</sup></label>
                            <input type="file" name="image3" onChange={getInputfile} className="form-control" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="pic4" className="form-label">Image<sup className='text-danger'>*</sup></label>
                            <input type="file" name="image4" onChange={getInputfile} className="form-control" />
                        </div>
                    </div>
                    <button type="submit"  style={{ marginBottom: 100 }}>{isLoading?"Please Wait..." : "Add Machine"}</button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;
