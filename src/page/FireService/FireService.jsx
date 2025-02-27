import CustomCrad from "../../components/Card/CustomCrad";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import comillaFireStations from "./data";
import fire from "../../assets/fire-station.png";

const FireService = () => {
  return (
    <>
      <CustomHeading tittel={"পুলিশ সুপার, কুমিল্লা"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {comillaFireStations.map((item) => {
          return (
            <CustomCrad
              key={item.id}
              className={"flex pl-2 pt-2"}
              name={item.name}
              phoneHeading={"ফোন"}
              phone={item.phone}
              addressHeading={"ঠিকানা"}
              address={item.address}
              tittel1heading={"ইমেইল"}
              tittel1={item.email}
              tittel2heading={"থানা"}
              tittel2={item.thana}
              image={fire}
            />
          );
        })}
      </div>
    </>
  );
};
export default FireService;
