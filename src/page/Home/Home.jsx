import BannerSlider from "../../components/Banner/BannerSlider";
import CustomNotice from "../../components/Card/CustomNotice";
import TableComponents from "../../components/TableComponents";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
import banner3 from "../../assets/banner/banner-3.jpg";
import banner4 from "../../assets/banner/banner-4.jpg";

const Home = () => {
  const bannerImages = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
  ];
  return (
    <>
      <BannerSlider bannerImages={bannerImages} />

      <CustomNotice
        className={"text-blue-800"}
        heading={"নোটিশ"}
        content={
          " আমাদের এই ওয়েবসাইটে যত তথ্য রয়েছে, সবগুলো সোর্স থেকে সংগ্রহ করা হয়েছে। কোন তথ্য ভুল হলে আমাদের জানাবেন, আমরা সেগুলি শীঘ্রই নতুন তথ্য দিয়ে আপডেট করব।"
        }
      />
      <TableComponents />
    </>
  );
};
export default Home;
