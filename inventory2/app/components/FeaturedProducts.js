/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {useState, useEffect} from 'react'
import Heading from "../primitives/Heading";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const FeaturedProducts = ({ featured }) => {
  const [views, setViews] = useState(5);
  const [navigation, setNavigation] = useState(true);
  const [sliceText, setSliceText] = useState(25);

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
      setSliceText(15)
    }  else if(window.innerWidth < 950) {
      setViews(3);
    } else if(window.innerWidth < 1200) {
      setViews(4);
    } else {
      setViews(5)
    }
    
  }

  return (
    <div css={{ marginBottom: "3rem" }}>
      <Heading fontSize="1.5rem" fontWeight="500" css = {css`
        @media(max-width: 500px) {
          margin-left: 0.5rem;
        }
        `}>
        Featured Products
      </Heading>
      <div
        css={css`
          width: 100%;
          background: white;
          border-radius: 5px;
          margin-top: 1rem;
          @media(max-width: 500px) {
            margin-top: 0.5rem;
          }
        `}
      >
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
          {featured.map(feature => (
           
            <SwiperSlide key={feature.id} tag="div">
               <Link
            href={`/product/[slug]?slug=${feature.slug}`}
            as={`/product/${feature.slug}`}
            passHref
          >
            <a>
              <div
                css={css`
                  padding: 2rem 1rem;
                  padding-bottom: 1rem;
                  width: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  cursor: pointer;
                  &:hover img {
                    transform: scale(1.1);
                  }
                  &:hover {
                    border: 1px solid orange;
                  }
                  border: 1px solid #fff;
                  @media(max-width: 500px) {
                    padding: 1rem;
                  }
                `}
              >
                {feature.image ? (
                  <img
                    src={feature.image.publicUrl}
                    css={css`
                      height: 200px;
                      width: auto;
                      transition: all 0.5s ease;
                      @media(max-width: 500px) {
                        height: 120px;
                      }
                    `}
                  />
                ) : null}
                <div
                  css={css`
                    margin-top: 1rem;
                  `}
                >
                  <Heading
                    color="gray"
                    fontSize="0.9rem"
                    >
                    {feature.title.slice(0, sliceText) + '...'}
                  </Heading>
                  <div
                    css={css`
                      display: flex;
                      @media(max-width: 1200px) {
                        flex-direction: column;
                      }
                    `}
                  >
                    <div css = {css`display: flex;`}>
                    <Heading fontSize="1rem">
                      ₹ {feature.price_after_discount}
                    </Heading>
                    <Heading
                      fontSize="1rem"
                      css={css`
                        margin: 0 0.8rem;
                        text-decoration: line-through;
                        color: gray;
                        @media(max-width: 1200px) {
                          margin: 0;
                          margin-left: 0.8rem;
                        }
                      `}
                    >
                      ₹ {feature.price}
                    </Heading>
                    </div>
                    <Heading color="orange">{feature.discount}% off</Heading>
                  </div>
                </div>
              </div>
              </a>
          </Link>
            </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
