import { diagnosticCenters } from "./data";
import { useState } from "react";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import CustomCrad from "../../components/Card/CustomCrad";
import NotFoud from "../../components/Card/NotFoud";
import diagnostic from "../../assets/013-diagnostic.png";
import { Thana } from "../../components/Static_Data/Thana";
const Diagnostic = () => {
  const [searchName, setSearchName] = useState("");
  const [searchThana, setSearchThana] = useState("");

  // Filter doctors based on name or specialty
  const filteredDiagnostic = diagnosticCenters.filter((diagnostic) => {
    return (
      (searchName
        ? diagnostic.name.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchThana
        ? diagnostic.thana.toLowerCase().includes(searchThana.toLowerCase())
        : true)
    );
  });

  return (
    <>
      <CustomHeading tittel={"ডায়াগনস্টিক তালিকা"} />
      {/* diagnostic Serching  */}
      <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <label className="relative w-[45%]">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" " /* placeholder ফাঁকা রাখুন */
              className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <span
              className={`absolute left-5 px-1 text-[#777777] bg-white transition-all duration-300 
    ${searchName ? "-top-3 scale-[0.9] left-2 text-[#3B9DF8]" : "top-3.5"}`}
            >
              নাম লিখুন
            </span>
          </label>

          {/* Thana Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <select
              id="thana"
              name="thana"
              value={searchThana}
              onChange={(e) => setSearchThana(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">থানা নির্বাচন করুন</option>
              {Thana.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Search Button */}
        </form>
      </div>
      {/* diagnostic List  */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Donor Card 1 */}
          {filteredDiagnostic.length > 0 ? (
            filteredDiagnostic.map((item) => {
              return (
                <CustomCrad
                  key={item.id}
                  image={item.image ? item.image : diagnostic}
                  name={item.name}
                  addressHeading={"ঠিকানা"}
                  address={item.address}
                  phoneHeading={"ফোন"}
                  phone={item.phone}
                  tittel1heading={"থানা"}
                  tittel1={item.thana}
                  tittel3heading={"ইমেইল"}
                  tittel3={item.email}
                />
              );
            })
          ) : (
            <NotFoud titel={"ডায়াগনস্টিক কেন্দ্র "} />
          )}
        </div>
      </div>
    </>
  );
};
export default Diagnostic;
