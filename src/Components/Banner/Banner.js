import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,  
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.jpg?s=1024x1024&w=is&k=20&c=nSnoptGFH4vdi2y11zl20M_MLgbcuuvSh0EQqlzuHjU=" alt="Slider Image 1" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1422269992/photo/high-rises-on-brickell-key-miami-florida.jpg?s=1024x1024&w=is&k=20&c=AdzDwd1PUNyxGUwnz_KQZV8wVzkU-RzjNBVnt5ARsj4=" alt="Slider Image 2" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1442014267/photo/north-berkeley-california-neighborhood.jpg?s=1024x1024&w=is&k=20&c=RQv7DV7_MZBAv3zAj69jcgNpTN0HBht7FAZCIRJ3eCY=" alt="Slider Image 3" />
      </div>
    </Slider>
  );
};

export default Banner;
