import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image, Box } from "@chakra-ui/react";

const Swip = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>Slide 1 </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4 </SwiperSlide>
    </Swiper>
  );
};
export default Swip;

//  error typscript can not module swiper?
