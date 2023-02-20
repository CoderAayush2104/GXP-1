import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../Card.css";
import Cardlist from "../Cardlist";
import Data from '../Data2.json';
import "../Home.css";

function Home  ()  {
  return (
    <div className='Home'>
        <div class="carousel-wrapper" style={{ marginTop: 5 }}>
        <Carousel
          infiniteLoop
          autoPlay
          interval={2000}
          width={window.innerWidth - 20}
          dynamicHeight={true}
          showThumbs={false}
          showArrows={true}
        >
          <div className="img1">
            <img
              src={require("../img/Slide1.JPG")} alt=''
              style={{ height: 590, width: window.innerWidth - 30 }}
            />
          </div>
          <div className="img1">
            <img
              src={require("../img/Slide2.JPG")} alt=''
              style={{ height: 590, width: window.innerWidth - 50 }}
            />
          </div>
          <div className="img1">
            <img
              src={require("../img/Slide3.JPG")} alt=''
              style={{ height: 590, width: window.innerWidth - 50 }}
            />

          </div>
          <div className="img1">
            <img
              src={require("../img/Slide4.JPG")} alt=''
              style={{ height: 590, width: window.innerWidth - 50 }}
            />

          </div>
          <div className="img1">
            <img
              src={require("../img/Slide5.JPG")} alt=''
              style={{ height: 590, width: window.innerWidth - 50 }}
            />
            
          </div>
          <div className="img1">
            <img
              src={require("../img/Slide6.JPG")} alt=''
              style={{ height: 590, width: window.innerWidth - 50 }}
            />
            
          </div>
        </Carousel>
        <Cardlist />
      </div>
        <h1 className='Contents'>Who are We?</h1>
      <div className='Contents'>
        <div className='Home'>
          <br/>
        <p>{Data.data2.Home.para1}</p>
        <br/>
        <p>{Data.data2.Home.para2}</p>
        <br/>
        <ul className='dottes-list'>
          <li>{Data.data2.Home.Content1}</li>
          <li>{Data.data2.Home.Content2}</li>
          <li>{Data.data2.Home.Content3}</li>
        </ul>
        <br/>
        <p>{Data.data2.Home.para3}</p>
        </div>
      </div>

    
    </div>
    
  )
}

export default Home