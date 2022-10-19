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

    font-size: 7vw;
    font-weight: bold;
    margin: 4rem;
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
        <div className="GalleryHeadTxt">Gallery</div>
      </Head>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
      </Swiper>
    </GallerHeader>
  );
};

export default Gallery;
