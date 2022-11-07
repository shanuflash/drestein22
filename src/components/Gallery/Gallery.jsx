import styled from "styled-components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, Variants } from "framer-motion";
import "./styles/Gallery.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

const Gallery = () => {
  const text = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };
  const Head = styled.div`
    font-size: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    /* margin: 4rem; */
    text-align: center;
    @media (max-width: 600px) {
      font-size: 10vw;
    }
  `;
  const GallerHeader = styled.div`
    height: 100%;
    width: 100vw;
  `;
  return (
    <GallerHeader>
      <Head
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        variants={text}
      >
        <div className="GalleryHeadTxt">Memories</div>
      </Head>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
      >
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/1.JPG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/2.JPG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/3.JPeG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/4.JPG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/5.JPG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/6.JPG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/7.JPeG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/8.JPeG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/9.JPeG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/10.JPeG" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="/GalleryAssets/11.JPeG" />
        </SwiperSlide>
      </Swiper>
    </GallerHeader>
  );
};

export default Gallery;
