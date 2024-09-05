import React, { useEffect, useState } from 'react'
import "./Contact.css"
import callimage from '../../Images/product/coldcalling.jpg'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyname: "",
    message: ""
  })

  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postdata = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post("https://api.vvisionwiredrawing.com/api/contact", data)
      if(res.status===200){
        toast.success("Thank you! Your message has been sent successfully. We will get back to you shortly.");
        navigate('/thank-you'); 
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <>
      <div className="contact-section">
        <div className="contact-heading">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4293989483567!2d77.31718297375473!3d28.67679908207226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb75147352e7%3A0xd7626960718cd703!2sVvision%20Globex%20(Wire%20Drawing%20Machines)!5e0!3m2!1sen!2sin!4v1722329038283!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-container">
          <div className="contact-image">
            <img src={callimage} alt="Cold Calling" />
          </div>

          <div className="contact-form">
            <h3 className='text-capitalize'> For any inquiry, please send a message</h3>
            <form onSubmit={postdata}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" onChange={getInputData} className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="phone" onChange={getInputData} className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" onChange={getInputData} className="form-control" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" onChange={getInputData} className="form-control" />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" name="companyname" onChange={getInputData} className="form-control" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" onChange={getInputData} className="form-control"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn-submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
