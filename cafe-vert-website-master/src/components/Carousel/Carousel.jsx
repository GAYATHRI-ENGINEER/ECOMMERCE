import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import iPhonePic from "./images/iphone_03.png";
import slidesData from './comments'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: respensiveArray
  };

  return (
    <div className="mCarousel-bg" name="comments">
      <Slider {...settings}>
        {slidesData.map( (comments , i) => (
          <Slide key={i} comments={comments} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

function Slide({ comments }) {
  return (
    <div>
      <div className="mCarousel-item">
        <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
        <div className="mCarousel-item-coms">
          {comments.map( (comment,i) => (
            <Comment key={i} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Comment({ profileName, profilePic, comText, comTime }) {
  return (
    <div className="comment-container">
      
      <div className="comment-avatar">
        <img src={profilePic} alt="avatar" />
      </div>

      <div className="comment-text">
        <b>{profileName}</b>
        <p>{comText}</p>
        <i>{comTime}</i>
      </div>

    </div>
  );
}

const respensiveArray = [
  {
    breakpoint: 1186,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 888,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 642,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
];
