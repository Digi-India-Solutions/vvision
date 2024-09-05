import React, { useEffect, useState } from 'react';
import "./ProductDetails.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});

  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.vvisionwiredrawing.com/api/product/" + _id);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="product-details-container">
      <h1 className="product-title">{data.productname}</h1>
      <div className="product-images">
        <img src={data.image1} alt="Product Image 1" className="product-image"/>
        <img src={data.image2} alt="Product Image 2" className="product-image"/>
        <img src={data.image3} alt="Product Image 3" className="product-image"/>
        <img src={data.image4} alt="Product Image 4" className="product-image"/>
      </div>
      <p className="product-details">{data.details}</p>
      <div className="product-table" dangerouslySetInnerHTML={{ __html: data.tableData }}></div>
    </div>
  );
};

export default ProductDetails;
