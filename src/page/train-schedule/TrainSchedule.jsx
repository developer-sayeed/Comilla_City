import Banner from "../../components/Banner/BannerSlider";
import CustomNotice from "../../components/Card/CustomNotice";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import banner1 from "../../assets/banner/ralaway.jpg";

const TrainSchedule = () => {
  const bannerImages = [
    {
      image: banner1,
    },
  ];
  return (
    <>
      <Banner bannerImages={bannerImages} />
      <CustomNotice
        heading={"Notice"}
        content={
          "কুমিল্লা স্টেশন ট্রেনের সময়সূচী সকল ডাটা সংগ্রহ করা হচ্ছে amartrain ওয়েবসাইট থেকে"
        }
      />
      <CustomHeading tittel={"Comilla Train Schedule"} />
      {/* Train schedule */}
      <div className="container mx-auto px-4 py-8">
        {/* Comilla to Dhaka */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Comilla To Dhaka Train Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left text-xs sm:text-sm">
                  Train Name
                </th>
                <th className="px-4 py-2 text-left text-xs sm:text-sm">
                  Off Day
                </th>
                <th className="px-4 py-2 text-left text-xs sm:text-sm">
                  Departure
                </th>
                <th className="px-4 py-2 text-left text-xs sm:text-sm">
                  Arrival
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-xs sm:text-sm">
                  Mohanagar Godhuli (703)
                </td>
                <td className="px-4 py-2 text-xs sm:text-sm">No</td>
                <td className="px-4 py-2 text-xs sm:text-sm">17:29</td>
                <td className="px-4 py-2 text-xs sm:text-sm">20:55</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-xs sm:text-sm">
                  Upakul Express (711)
                </td>
                <td className="px-4 py-2 text-xs sm:text-sm">Wednesday</td>
                <td className="px-4 py-2 text-xs sm:text-sm">07:54</td>
                <td className="px-4 py-2 text-xs sm:text-sm">11:20</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-xs sm:text-sm">
                  Mohanagar Express (721)
                </td>
                <td className="px-4 py-2 text-xs sm:text-sm">Sunday</td>
                <td className="px-4 py-2 text-xs sm:text-sm">15:07</td>
                <td className="px-4 py-2 text-xs sm:text-sm">18:40</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-xs sm:text-sm">Turna (741)</td>
                <td className="px-4 py-2 text-xs sm:text-sm">No</td>
                <td className="px-4 py-2 text-xs sm:text-sm">13:57</td>
                <td className="px-4 py-2 text-xs sm:text-sm">05:15</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-xs sm:text-sm">
                  Chattala Express (801)
                </td>
                <td className="px-4 py-2 text-xs sm:text-sm">Friday</td>
                <td className="px-4 py-2 text-xs sm:text-sm">08:41</td>
                <td className="px-4 py-2 text-xs sm:text-sm">00:10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comilla to Chittagong Train Schedule */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 mt-3">
          Comilla to Dhaka
        </h2>
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Train Name</th>
                <th className="px-4 py-2 text-left">Off Day</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Mahanagor Provati (704)</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">10:53</td>
                <td className="px-4 py-2">13:35</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Paharika Express (720)</td>
                <td className="px-4 py-2">Saturday</td>
                <td className="px-4 py-2">16:15</td>
                <td className="px-4 py-2">18:55</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Mahanagor Express (722)</td>
                <td className="px-4 py-2">Sunday</td>
                <td className="px-4 py-2">00:48</td>
                <td className="px-4 py-2">03:30</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Udayan Express (724)</td>
                <td className="px-4 py-2">Sunday</td>
                <td className="px-4 py-2">03:15</td>
                <td className="px-4 py-2">05:50</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Turna (742)</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">02:35</td>
                <td className="px-4 py-2">05:15</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Bijoy Express (786)</td>
                <td className="px-4 py-2">Tuesday</td>
                <td className="px-4 py-2">02:15</td>
                <td className="px-4 py-2">05:00</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Chattala Express (802)</td>
                <td className="px-4 py-2">Friday</td>
                <td className="px-4 py-2">17:22</td>
                <td className="px-4 py-2">20:10</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Comilla To Noakhali Train Schedule*/}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 mt-3">
          Comilla To Noakhali Train Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Train Name</th>
                <th className="px-4 py-2 text-left">Off Day</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Upakul Express (712)</td>
                <td className="px-4 py-2">Tuesday</td>
                <td className="px-4 py-2">18:40</td>
                <td className="px-4 py-2">20:40</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Comilla To Sylhet Train Schedule*/}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 mt-3">
          Comilla To Sylhet Train Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Train Name</th>
                <th className="px-4 py-2 text-left">Off Day</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Paharika Express (719)</td>
                <td className="px-4 py-2">Monday</td>
                <td className="px-4 py-2">10:28</td>
                <td className="px-4 py-2">16:30</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Udayan Express (723)</td>
                <td className="px-4 py-2">Wednesday</td>
                <td className="px-4 py-2">00:12</td>
                <td className="px-4 py-2">05:45</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Comilla To Mymensingh Train Schedule
         */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 mt-3">
          Comilla To Mymensingh Train Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Train Name</th>
                <th className="px-4 py-2 text-left">Off Day</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Bijoy Express (785)</td>
                <td className="px-4 py-2">Tuesday</td>
                <td className="px-4 py-2">11:44</td>
                <td className="px-4 py-2">16:25</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Comilla To Laksam Train Schedule

         */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 mt-3">
          Comilla To Laksam Train Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Train Name</th>
                <th className="px-4 py-2 text-left">Off Day</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Mohanagar Godhuli (704)</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">10:53</td>
                <td className="px-4 py-2">11:15</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Upakul Express (712)</td>
                <td className="px-4 py-2">Tuesday</td>
                <td className="px-4 py-2">18:40</td>
                <td className="px-4 py-2">19:03</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Paharika Express (720)</td>
                <td className="px-4 py-2">Wednesday</td>
                <td className="px-4 py-2">16:15</td>
                <td className="px-4 py-2">16:38</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Mahanagar Express (722)</td>
                <td className="px-4 py-2">Sunday</td>
                <td className="px-4 py-2">00:48</td>
                <td className="px-4 py-2">01:10</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Udayan Express (724)</td>
                <td className="px-4 py-2">Sunday</td>
                <td className="px-4 py-2">03:15</td>
                <td className="px-4 py-2">03:37</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Turna Express (742)</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">02:35</td>
                <td className="px-4 py-2">02:57</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Bijoy Express (786)</td>
                <td className="px-4 py-2">Tuesday</td>
                <td className="px-4 py-2">02:15</td>
                <td className="px-4 py-2">02:37</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Chattala Express (802)</td>
                <td className="px-4 py-2">Friday</td>
                <td className="px-4 py-2">17:22</td>
                <td className="px-4 py-2">17:45</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*Comilla To Akhaura Train Schedule


         */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 mt-3">
          Comilla To Akhaura Train Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Train Name</th>
                <th className="px-4 py-2 text-left">Off Day</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Mohanagar Godhuli (703)</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">17:29</td>
                <td className="px-4 py-2">18:20</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Upakul Express (711)</td>
                <td className="px-4 py-2">Wednesday</td>
                <td className="px-4 py-2">07:54</td>
                <td className="px-4 py-2">08:50</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Paharika Express (719)</td>
                <td className="px-4 py-2">Monday</td>
                <td className="px-4 py-2">10:28</td>
                <td className="px-4 py-2">11:30</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Mahanagar Express (721)</td>
                <td className="px-4 py-2">Sunday</td>
                <td className="px-4 py-2">15:07</td>
                <td className="px-4 py-2">16:05</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Udayan Express (723)</td>
                <td className="px-4 py-2">Wednesday</td>
                <td className="px-4 py-2">00:12</td>
                <td className="px-4 py-2">01:05</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Turna Express (741)</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">01:57</td>
                <td className="px-4 py-2">02:47</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Bijoy Express (785)</td>
                <td className="px-4 py-2">Tuesday</td>
                <td className="px-4 py-2">11:44</td>
                <td className="px-4 py-2">12:35</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Chattala Express (801)</td>
                <td className="px-4 py-2">Friday</td>
                <td className="px-4 py-2">08:41</td>
                <td className="px-4 py-2">09:35</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TrainSchedule;
