// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          class="block w-full"
          src="/images/home page image/China.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img class="block w-full" src="/images/home page image/UK.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          class="block w-full"
          src="/images/home page image/America.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          class="block w-full"
          src="/images/home page image/Africa.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
