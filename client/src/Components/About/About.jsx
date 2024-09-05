import React, { useEffect } from 'react'
import "./About.css"
import aboutimage from "../../Images/product/34566EFB-6FC1-4AF0-BA6E-5A7D4CCBAEB8.jpeg"

const About = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div className="aboutsection">
        <div className="aboutheading">
          <p>About VVISION GLOBEX INDIA PRIVATE LIMTED</p>
        </div>
        <div className="about">
          <div>
            <p className='abouttext'> VVISION GLOBEX INDIA PRIVATE LIMTED, founded in 2002 by our Director Mr. HARVINDER SINGH, have experience of alomost 20 years in wire and cable industry for more than 8 years we are serving 
              in wire and cable machinery industry providing dependable customer service because of our committed shoff we have ghown into a reputable company
              that has aged greatefully ad gained the trust of our client. <br />
              we belive in full service import for our clients that lead us being a good choice to be your machinery partner.</p>
           <p className='abouttext'>At VVISION GLOBEX INDIA PRIVATE LIMTED, we are pioneers in providing cutting-edge technology solutions that drive innovation and transformation across various industries. Our mission is to empower businesses and individuals with advanced, reliable, and scalable solutions that meet their unique needs and foster growth and efficiency.</p>
            <p className='abouttextheading'>Our Story</p>
            <p className='abouttext'>Founded in 2010, VVISION GLOBEX INDIA PRIVATE LIMTED started as a small tech startup with a vision to revolutionize the way businesses operate through technology. Over the years, we have grown into a global leader in the tech industry, delivering innovative products and services that have helped countless businesses achieve their goals. Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence.</p>
            <p className='abouttextheading'>Consulting and Support</p>
            <p className='abouttext'>Beyond providing state-of-the-art technology solutions, we offer expert consulting services to help businesses navigate the complexities of digital transformation. Our team of experienced consultants works closely with clients to understand their challenges, design effective strategies, and implement solutions that deliver real results. Additionally, our dedicated support team ensures that our clients receive ongoing assistance and maintenance, keeping their systems running smoothly.</p>
            <p className='abouttextheading'>Our Values</p>
            <p className='abouttext'>At VVISION GLOBEX INDIA PRIVATE LIMTED, our core values guide everything we do:</p>
            <p className='abouttext'>
              <ul>
                <li><strong>Innovation :</strong> We constantly seek new ideas and technologies to stay ahead in the ever-evolving tech landscape.</li>
                <li><strong>Integrity :</strong>We uphold the highest standards of honesty and transparency in all our dealings.</li>
                <li><strong>Excellence :</strong> We are committed to delivering top-quality products and services that exceed our clients' expectations.</li>
                <li><strong>Customer-Centricity :</strong> Our clients are at the heart of our business, and we strive to build lasting relationships based on trust and mutual success.</li>
                <li><strong>Collaboration :</strong> We believe in the power of teamwork and foster a collaborative environment where everyone can thrive.</li>
              </ul>
            </p>
            <p className='abouttextheading'>Our Team</p>
            <p className='abouttext'>
            Our success is driven by a talented and diverse team of professionals who bring a wealth of knowledge and expertise to the table. From visionary leaders and skilled developers to strategic consultants and dedicated support staff, every member of the VVISION GLOBEX INDIA PRIVATE LIMTED family plays a crucial role in our mission to deliver exceptional technology solutions.
            </p>
            <p className='abouttextheading'>Our Vision for the Future</p>
            <p className='abouttext'>As we look to the future, VVISION GLOBEX INDIA PRIVATE LIMTED remains committed to pushing the boundaries of what’s possible with technology. We envision a world where our innovations continue to make a positive impact on businesses, communities, and society at large. With a focus on sustainability, ethical practices, and continuous improvement, we are excited to lead the way in shaping the future of technology.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About