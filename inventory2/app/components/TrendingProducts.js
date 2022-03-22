/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {useState, useEffect} from 'react'
import Heading from '../primitives/Heading'
import HeroImage from "../primitives/HeroImage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const TrendingProducts = ({trending}) => {
  const [views, setViews] = useState(5);
  const [navigation, setNavigation] = useState(true);

  useEffect (() => {
    if(window) {
      onChange()
    }
  },[])
   
  useEffect(() => {
   const updateSize = () => {
      onChange()
   }

    window.addEventListener('resize', updateSize);
    () => window.removeEventListener('resize', updateSize)
  },[])

  const onChange = () => {
    if(window.innerWidth < 500) {
      setViews(2);
      setNavigation(false);
    }  else if(window.innerWidth < 950) {
      setViews(3);
    } else if(window.innerWidth < 1200) {
      setViews(4);
    } else {
      setViews(5)
    }  
  }

  
  return (
      <div>
        <Heading fontSize = '1.5rem' fontWeight = '500' css = {css`
        @media(max-width: 500px) {
          margin-left: 0.5rem;
        }
        `}>Trending Products</Heading>
        <div css = {css`
      width: 100%;
      background: white;
      border-radius: 5px;
      margin-top: 1rem;
      @media(max-width: 500px) {
        margin-top: 0.5rem;
      }
      `}>
        <Swiper
        id="main"
        navigation = {navigation}
        // pagination
        tag="section"
        wrapperTag="div"
        slidesPerView={views}
        spaceBetween={0}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
      {
          trending.map(trend => (
            <SwiperSlide key={trend.id} tag="div">
             <div css = {css`
             padding: 2rem 1rem;
             height: 200px;
             width: auto;
             display: flex;
             justify-content: center;
             align-items: center;
             cursor: pointer;
             &:hover img{
                transform: scale(1.1);
             }
             &:hover {
               border: 1px solid orange;
             }
             border: 1px solid #fff;
             @media(max-width: 500px) {
              //  height: 120px;
               padding: 1rem;
             }
             `}> 
             {trend.image ?<img src={trend.image.publicUrl} css = {css`
             height: 200px;
             width: auto;
             transition: all 0.5s ease;
             @media(max-width: 500px) {
              height: 120px;
            }
             `}/> : null}</div>
        </SwiperSlide>
          ))
      }
        </Swiper>
        </div>

      </div>
  )
}

export default TrendingProducts;