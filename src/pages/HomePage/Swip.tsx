import SwiperCore, { Pagination } from 'swiper/core'
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

// install Swiper modules
SwiperCore.use([Pagination])

const w = window.innerWidth

export default function Swiper () {
  return (
      <ReactSwiper
          navigation
          slidesPerView={w < 481 ? 1.2 : w < 768 ? 1.2 : w < 992 ? 1.6 : w < 1280 ? 2 : 3}
          spaceBetween={30}
          className={"mySwiper"}>
            <SwiperSlide>
              test
            </SwiperSlide>
            <SwiperSlide>
              test
            </SwiperSlide>
            <SwiperSlide>
              test
            </SwiperSlide>
      </ReactSwiper>
  )
}
