import CustomCrad from "../../components/Card/CustomCrad";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import comillaAmbulanceServices from "./Data";
import ambulance from "../../assets/ambulance.png";
const Ambulance = () => {
  return (
    <>
      <CustomHeading tittel={"এম্বুলেন্স সার্ভিস, কুমিল্লা"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {comillaAmbulanceServices.map((item) => {
          return (
            <CustomCrad
              key={item.id}
              className={"flex pl-2 pt-2"}
              name={item.name}
              phoneHeading={"ফোন"}
              phone={item.phone}
              addressHeading={"ঠিকানা"}
              address={item.address}
              tittel1heading={"হাসপাতাল"}
              tittel1={item.hospital}
              tittel2heading={"থানা"}
              tittel2={item.thana}
              image={ambulance}
            />
          );
        })}
      </div>
    </>
  );
};
export default Ambulance;
