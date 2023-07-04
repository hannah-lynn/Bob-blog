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
        <a href="https://hsqlfs-3000.csb.app/blog/articles/Asia/">
          <img
            class="block w-full"
            src="/images/home page image/China.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://hsqlfs-3000.csb.app/blog/articles/Europe/">
          <img
            class="block w-full"
            src="/images/home page image/UK.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://hsqlfs-3000.csb.app/blog/articles/America/">
          <img
            class="block w-full"
            src="/images/home page image/America.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://hsqlfs-3000.csb.app/blog/articles/Africa/">
          <img
            class="block w-full"
            src="/images/home page image/Africa.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://hsqlfs-3000.csb.app/blog/articles/Asia/">
          <img
            class="block w-full"
            src="/images/home page image/Thailand.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
