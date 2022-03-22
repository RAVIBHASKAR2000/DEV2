/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import HeroWrap from '../primitives/Hero'
import HeroImage from "../primitives/HeroImage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = ({offers}) => {
    console.log(offers);

    return (
        <div css = {{paddingTop: '0rem'}}>
        <Swiper
        id="main"
        navigation
        pagination={{ clickable: true }}
        loop
        speed = {1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
      }}
        tag="section"
        wrapperTag="div"
        slidesPerView={1}
        spaceBetween={0}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
       {offers.map(offer => (
           <SwiperSlide key={offer.id} tag="div">
               <HeroImage>
                {offer.image ? <img src={offer.image.publicUrl} /> : null}
               </HeroImage>
           </SwiperSlide> 
       ))}
      </Swiper>
      </div>
    )
  }
  
  export default Hero;