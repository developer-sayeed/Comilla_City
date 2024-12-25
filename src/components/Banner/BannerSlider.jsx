import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
import banner3 from "../../assets/banner/banner-3.jpg";
import banner4 from "../../assets/banner/banner-4.jpg";
const BannerSlider = ({ banner }) => {
  const bannerImages = [
    {
      id: 1,
      image: banner1,
      title: "🌟 স্বাগতম কুমিল্লা সিটিতে!",
      subtitle: "আপনার সব সেবার তথ্য এক প্ল্যাটফর্মে।",
    },
    {
      id: 2,
      image: banner2,
      title: "📚 শিক্ষা ও স্বাস্থ্যসেবা",
      subtitle: "সকল দরকারি তথ্য এখন হাতের নাগালে।",
    },
    {
      id: 3,
      image: banner3,
      title: "🚑 জরুরি সেবাসমূহ",
      subtitle: "আপনার সুরক্ষা আমাদের অঙ্গীকার।",
    },
    {
      id: 4,
      image: banner4,
      title: "🚑 জরুরি সেবাসমূহ",
      subtitle: "আপনার সুরক্ষা আমাদের অঙ্গীকার।",
    },
  ];
  return (
    <div className="w-full h-auto overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        loop
        className="w-full h-auto"
      >
        {bannerImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-[150px] sm:h-[100px] md:h-[250px] object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
