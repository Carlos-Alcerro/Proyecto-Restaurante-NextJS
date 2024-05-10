import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

const SlidesDesktop = ({ producto, title, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={className}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {producto.images &&
          producto.images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                width={1024}
                height={800}
                src={image.url}
                alt={title}
                className="rounded-lg object-fill h-screen"
                priority={true}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {producto.images &&
          producto.images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                width={300}
                height={300}
                src={image.url}
                alt={title}
                className="rounded-lg object-fill cursor-pointer h-56"
                priority={true}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SlidesDesktop;
