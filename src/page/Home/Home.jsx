import { Link } from "react-router";
import BannerSlider from "../../components/Banner/BannerSlider";
import CustomNotice from "../../components/Card/CustomNotice";
import TableComponents from "../../components/TableComponents";
import FooterMenu from "../../components/FooterMenu";

const Home = () => {
  return (
    <>
      <BannerSlider />

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
