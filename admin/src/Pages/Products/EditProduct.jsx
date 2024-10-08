import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';

const EditProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { _id } = useParams();
    const editor = useRef(null);
    const [catedata, setCatedata] = useState([]);
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

    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.vvisionwiredrawing.com/api/category");
            setCatedata(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getProductData = async () => {
        try {
            let res = await axios.get("https://api.vvisionwiredrawing.com/api/product/" + _id);
            setData(res.data.data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

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

    const updateData = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append("categoryname", data.categoryname);
            formData.append("productname", data.productname);
            formData.append("details", data.details);
            formData.append("tableData", data.tableData);
            formData.append("image1", data.image1);
            formData.append("image2", data.image2);
            formData.append("image3", data.image3);
            formData.append("image4", data.image4);
            const res = await axios.put(`https://api.vvisionwiredrawing.com/api/product/${_id}`, formData);
            if (res.status === 200) {
                toast.success("Product updated successfully");
                navigate("/all-products");
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getApiData();
        getProductData();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Product</h4>
                </div>
                <div className="links">
                    <Link to="/all-products" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form onSubmit={updateData} className="mt-4">
                    <div className="row">
                        <div className="col-md-6 mb-2 mt-1">
                            <label htmlFor="category">Select Product Category</label>
                            <select name="categoryname" id="category" value={data.categoryname} onChange={getInputData} className="form-control">
                                <option disabled>Choose Category</option>
                                {
                                    catedata.map((item, index) =>
                                        <option key={index} value={item.categoryname}>{item.categoryname}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">Machine Type:</label>
                            <input type="text" id="name" name="productname" value={data.productname} onChange={getInputData} className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="">Product Details </label>
                            <textarea name="details" value={data.details} onChange={getInputData} id="" className='form-control'></textarea>
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
                    <button type="submit" className="btn btn-dark w-100" style={{ marginBottom: 100 }}>{isLoading ? "Please Wait..." : "Update Machine"}</button>
                </form>
            </div>
        </>
    );
}

export default EditProduct;
