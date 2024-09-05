import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import image1 from '../../Images/product/bananre.jpeg';
import image2 from '../../Images/product/banare3.jpeg';
import image3 from '../../Images/product/banare4.jpeg';
import image5 from '../../Images/product/banare5.jpeg';
import image4 from '../../Images/product/BAC0FA0C-59AF-458D-9BBC-27C34E1D6E0C.jpeg';
import iconi from '../../Images/product/3218617.png';
import iconi1 from '../../Images/product/gaur-removebg-preview.png';
import iconi2 from '../../Images/product/24-removebg-preview.png';
import iconi3 from '../../Images/product/award-removebg-preview.png';
import iconi4 from '../../Images/product/best_quality.webp';
import iconi5 from '../../Images/product/guarantee-icon.webp';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Testimonial from '../Testimonial/Testimonial';
import Client from '../Clients/Client';
import Contact from '../Contact/Contact';

const Home = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const sectionRef = useRef(null);

  const callCount = (setter, target) => {
    const interval = setInterval(() => {
      setter(prevCount => {
        if (prevCount === target) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 1)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callCount(setCount, 10);
            callCount(setCount1, 100);
            callCount(setCount2, 150);
            callCount(setCount3, 10);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <section>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="..." style={{ height: 500 }} />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="..." style={{ height: 500 }} />
            </div>
            <div className="carousel-item">
              <img src={image5} className="d-block w-100" alt="..." style={{ height: 500 }} />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="..." style={{ height: 500 }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section>
        <div className="conent">
          <div className="contentmain">
            <div>
              <img src={iconi} alt="" />
              <p>Affordable Price</p>
            </div>
            <div>
              <img src={iconi1} alt="" />
              <p>100% Gurantee</p>
            </div>
            <div>
              <img src={iconi2} alt="" />
              <p>24/7 Availabilty</p>
            </div>
            <div>
              <img src={iconi3} alt="" />
              <p>Award winning</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="homeabout">
          <div className="homeaboutimage">
            <img src={image4} alt="" />
          </div>
          <div className="homeabouttext">
            {/* <p className="abouthomesmallheading">ABOUT VVISION GLOBEX INDIA PRIVATE LIMTED</p> */}
            <p className="abouthomeheading">ABOUT VVISION GLOBEX INDIA PRIVATE LIMTED</p>
            <p className="abouthometext">
              VVISION GLOBEX INDIA PRIVATE LIMTED, founded in 2002 by our Director Mr. HARVINDER SINGH, have experience of alomost 20 years in wire and cable industry for more than 8 years we are serving 
              in wire and cable machinery industry providing dependable customer service because of our committed shoff we have ghown into a reputable company
              that has aged greatefully ad gained the trust of our client. <br />
              we belive in full service import for our clients that lead us being a good choice to be your machinery partner.
            </p>
            <div className="abouthomeicon">
              <div className="abouthomeiconsmall">
                <div className="homeabouticon">
                  <img src={iconi4} alt="" />
                </div>
                <p>Best Quality</p>
              </div>
              <div className="abouthomeiconsmall">
                <div className="homeabouticon">
                  <img src={iconi5} alt="" />
                </div>
                <p>100% Warranty</p>
              </div>
            </div>
            <div className="homeaboutbutton">
              <button>
                <Link to="/about">Know More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Product />
      </section>

      <section className="sectionincrement" ref={sectionRef}>
        <div className="incrementor">
          <div className="incrementdiv">
            <p className="counting">{count} +</p>
            <p className="countingtext">YEAR OF EXPERIENCE</p>
          </div>
          <div className="incrementdiv">
            <p className="counting">{count1} +</p>
            <p className="countingtext">PRODUCTS</p>
          </div>
          <div className="incrementdiv">
            <p className="counting">{count2} +</p>
            <p className="countingtext">VVISION DISTRIBUTORS</p>
          </div>
          <div className="incrementdiv">
            <p className="counting">{count3} +</p>
            <p className="countingtext">SERVICE OVER COUNTRIES</p>
          </div>
        </div>
      </section>
      <section>
        <Client />
      </section>

      <section>
        <Testimonial />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Home;
