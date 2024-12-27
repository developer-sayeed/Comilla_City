import CustomCrad from "../../components/Card/CustomCrad";
import police from "../../assets/policeman.png";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { policeStations, superintendentOffice } from "./data";

const PoliceStation = () => {
  return (
    <>
      <CustomHeading tittel={"পুলিশ সুপার, কুমিল্লা"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {superintendentOffice.map((item) => {
          return (
            <CustomCrad
              key={item.id}
              image={police}
              className={"flex pl-2 pt-2"}
              name={item.name}
              phoneHeading={"ফোন"}
              phone={item.phone}
              addressHeading={"ঠিকানা"}
              address={item.address}
              tittel1heading={"ইমেইল"}
              tittel1={item.email}
            />
          );
        })}
      </div>
      <CustomHeading tittel={"পুলিশ স্টেশন তালিকা"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {policeStations.map((item) => {
          return (
            <CustomCrad
              key={item.id}
              image={police}
              className={"flex pl-2 pt-2"}
              name={item.name}
              phoneHeading={"ফোন"}
              phone={item.phone}
              addressHeading={"ঠিকানা"}
              address={item.address}
              tittel1heading={"উপজেলা"}
              tittel1={item.upazila}
            />
          );
        })}
      </div>
    </>
  );
};
export default PoliceStation;
