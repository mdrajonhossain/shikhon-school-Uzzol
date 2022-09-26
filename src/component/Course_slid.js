
import '../App.css';

import React, { Component } from "react";
import Slider from "react-slick";

export default class Course_slid extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,      
      cssEase: "linear"
    };
    return (
      <div>        
        <Slider {...settings}>
          <div>
           <img width="300" height="200" src='https://www.solodev.com/core/fileparse.php/131/urlt/webcorpco-slider1.jpg' />
          </div>
          <div>
		  <img width="300" height="200" src='https://www.solodev.com/core/fileparse.php/131/urlt/webcorpco-slider1.jpg' />
          </div>
          <div>
		  <img width="300" height="200" src='https://www.solodev.com/core/fileparse.php/131/urlt/webcorpco-slider1.jpg' />
          </div>
          <div>
		  <img width="300" height="200" src='https://www.solodev.com/core/fileparse.php/131/urlt/webcorpco-slider1.jpg' />
          </div>
          <div>
		  <img width="300" height="200" src='https://www.solodev.com/core/fileparse.php/131/urlt/webcorpco-slider1.jpg' />
          </div>
          <div>
		  <img width="300" height="200" src='https://www.solodev.com/core/fileparse.php/131/urlt/webcorpco-slider1.jpg' />
          </div>
        </Slider>
      </div>
    );
  }
}