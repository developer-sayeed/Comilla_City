import Ambulance from "../page/Ambulance/Ambulance";
import AnimalServices from "../page/AnimalServices/AnimalServices";
import Bank from "../page/Bank/Bank";
import BeautyParlour from "../page/BeautyParlour/BeautyParlour";
import Blood from "../page/Blood/Blood";
import BusSchedule from "../page/BusSchedule/BusSchedule";
import Cafes from "../page/Cafes/Cafes";
import CarRent from "../page/CarRent/CarRent";
import ChildProtection from "../page/ChildProtection/ChildProtection";
import CitizenServices from "../page/CitizenServices/CitizenServices";
import CourierService from "../page/CourierService/CourierService";
import Diagnostic from "../page/Dagnostic/Diagnostic";
import Disabled from "../page/disabled/Disabled";
import DocotrList from "../page/Docotors/DocotrList";
import EducationalInstitutions from "../page/EducationalInstitutions/EducationalInstitutions";
import ElectricityOffice from "../page/ElectricityOffice/ElectricityOffice";
import EmergencyService from "../page/EmergencyService/EmergencyService";
import Entrepreneur from "../page/Entrepreneur/Entrepreneur";
import Events from "../page/Events/Events";
import FireService from "../page/FireService/FireService";
import FlatLand from "../page/FlatLand/FlatLand";
import Freelancers from "../page/Freelancers/Freelancers";
import GasSupply from "../page/GasSupply/GasSupply";
import GymFitness from "../page/GymFitness/GymFitness";
import HealthConsultation from "../page/Health-consultation/HealthConsultation";
import Home from "../page/Home/Home";
import Hospital from "../page/Hospital/Hospital";
import Hotel from "../page/Hotel/Hotel";
import HouseRent from "../page/HouseRent/HouseRent";
import InternetService from "../page/InternetService/InternetService";
import ITServices from "../page/ITServices/ITServices";
import Jobs from "../page/Jobs/Jobs";
import LegalAid from "../page/LegalAid/LegalAid";
import Masjid from "../page/Masjid/Masjid";
import Mechanic from "../page/Mechanic/Mechanic";
import Nursery from "../page/Nursery/Nursery";
import Pagelout from "../page/Pagelout";
import Pharmacy from "../page/Pharmacy/Pharmacy";
import PoliceStation from "../page/PoliceStation/PoliceStation";
import PublicLibrary from "../page/PublicLibrary/PublicLibrary";
import PublicToilet from "../page/PublicToilet/PublicToilet";
import Restaurant from "../page/Restaurant/Restaurant";
import Shopping from "../page/Shopping/Shopping";
import SocialWelfare from "../page/SocialWelfare/SocialWelfare";
import Teacher from "../page/Teacher/Teacher";
import TelecomService from "../page/TelecomService/TelecomService";
import TodayCumilla from "../page/TodayCumilla/TodayCumilla";
import TouristSpots from "../page/Tourist-spots/TouristSpots";
import TrainSchedule from "../page/train-schedule/TrainSchedule";
import Videos from "../page/Videos/Videos";

// create public router
const publicRouter = [
  {
    element: <Pagelout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <DocotrList />,
        path: "/doctor",
      },
      {
        element: <Hospital />,
        path: "/hospital",
      },
      {
        element: <Ambulance />,
        path: "/ambulance",
      },
      {
        element: <Diagnostic />,
        path: "/diagnostic",
      },
      {
        element: <HealthConsultation />,
        path: "/health-consultation",
      },
      {
        element: <Blood />,
        path: "/blood",
      },
      {
        element: <BusSchedule />,
        path: "/bus-schedule",
      },
      {
        element: <TrainSchedule />,
        path: "/train-schedule",
      },
      {
        element: <TouristSpots />,
        path: "/tourist-spots",
      },
      {
        element: <HouseRent />,
        path: "/house-rent",
      },
      {
        element: <Shopping />,
        path: "/shopping",
      },
      {
        element: <FireService />,
        path: "/fire-service",
      },
      {
        element: <CourierService />,
        path: "/courier-service",
      },
      {
        element: <PoliceStation />,
        path: "/police-station",
      },
      {
        element: <ElectricityOffice />,
        path: "/electricity-office",
      },

      {
        element: <Hotel />,
        path: "/hotel",
      },
      {
        element: <CarRent />,
        path: "/car-rent",
      },
      {
        element: <Mechanic />,
        path: "/mechanic",
      },
      {
        element: <EmergencyService />,
        path: "/emergency-service",
      },
      {
        element: <Jobs />,
        path: "/jobs",
      },
      {
        element: <Entrepreneur />,
        path: "/entrepreneur",
      },
      {
        element: <Teacher />,
        path: "/teacher",
      },
      {
        element: <Masjid />,
        path: "/masjid",
      },
      {
        element: <Bank />,
        path: "/bank",
      },
      {
        element: <Restaurant />,
        path: "/restaurant",
      },
      {
        element: <FlatLand />,
        path: "/flat-land",
      },
      {
        element: <Videos />,
        path: "/videos",
      },
      {
        element: <TodayCumilla />,
        path: "/today-cumilla",
      },
      {
        element: <EducationalInstitutions />,
        path: "/educational-institutions",
      },
      {
        element: <Nursery />,
        path: "/nursery",
      },
      {
        element: <Events />,
        path: "/events",
      },
      {
        element: <ITServices />,
        path: "/it-services",
      },
      {
        element: <Freelancers />,
        path: "/freelancers",
      },
      {
        element: <Cafes />,
        path: "/cafes",
      },
      {
        element: <Pharmacy />,
        path: "/pharmacy",
      },
      {
        element: <BeautyParlour />,
        path: "/beauty-parlour",
      },
      {
        element: <GymFitness />,
        path: "/gym-fitness",
      },
      {
        element: <InternetService />,
        path: "/internet-service",
      },
      {
        element: <TelecomService />,
        path: "/telecom-service",
      },
      {
        element: <CitizenServices />,
        path: "/citizen-services",
      },
      {
        element: <LegalAid />,
        path: "/legal-aid",
      },
      {
        element: <SocialWelfare />,
        path: "/social-welfare",
      },
      {
        element: <ChildProtection />,
        path: "/child-protection",
      },
      {
        element: <AnimalServices />,
        path: "/animal-services",
      },
      {
        element: <PublicLibrary />,
        path: "/public-library",
      },
      {
        element: <GasSupply />,
        path: "/gas-supply",
      },
      {
        element: <PublicToilet />,
        path: "/public-toilet",
      },
      {
        element: <Disabled />,
        path: "/disabled",
      },
    ],
  },
];

// export router
export default publicRouter;
