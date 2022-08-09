import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };

  return (
    <><Carousel {...settings}>
      <Wrap>
        <img src='photo-1.jpg' />
      </Wrap>
      <Wrap>
        <img src='photo-2.jpg' />
      </Wrap>
      <Wrap>
        <img src='photo-3.jpg' />
      </Wrap>
      <Wrap>
        <img src='photo-4.jpg' />
      </Wrap>
    </Carousel><div>

      </div></>
  )
}

export default ImageSlider;

const Carousel =styled(Slider)`

ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}

li.slick-active button::before{
    color:white;
}
}
`
const Wrap = styled.div`
    cursor:pointer;
    img{
        transition-duration:300ms;
        border:4px solid transparent;
        width:100%;
        height:450px;
        border-radius:6px;
        box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        &:hover{
          border:4px solid rgba(249 , 249 , 249 , 0.8);
        }
    }
`
