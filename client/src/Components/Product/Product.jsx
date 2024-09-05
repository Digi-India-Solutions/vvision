import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

const Product = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [data, setData] = useState([]);

  const getApidata = async () => {
    try {
      const res = await axios.get("https://api.vvisionwiredrawing.com/api/product");
      if (res.status === 200) {
        setData(res.data.data.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  useEffect(() => {
    getApidata();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <>
      <div className="productsection">
        <div className="productmain">
          <p className='productsmallheading'>Our products</p>
          <p className='productheading'>Outstanding Products</p>
          <div className="productdiv">
            {data.map((item, index) => (
              <div className="product" key={index}>
                <div className="img" onClick={() => handleShow(item.image1)}>
                  <img src={item.image1} alt={`Product ${item._id}`} />
                </div>
                <div className="detail">
                  <p className='text-uppercase'>{item.productname}</p>
                  <button><Link to={`/product/details/${item._id}`}>See Details</Link></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Product" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Product;
