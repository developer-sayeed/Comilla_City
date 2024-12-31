import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// eslint-disable-next-line react/prop-types
const Banner = ({ bannerImages, className }) => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-auto"
      >
        {bannerImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`Banner ${index + 1}`}
              className={`w-[100%] h-[150px] sm:h-[200px] md:h-[300px] object-fill  ${className}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// ✅ PropTypes Validation
Banner.propTypes = {
  bannerImages: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Banner;
