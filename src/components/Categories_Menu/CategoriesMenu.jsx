// Assets (Icons)
import doctor from "../../assets/001-doctor.png";
import hospitalIcon from "../../assets/003-hospital-building.png";
import ambulance from "../../assets/ambulance.png";
import bus from "../../assets/004-bus-schedule.png";
import train from "../../assets/005-train-times.png";
import tourist from "../../assets/006-tourist.png";
import house from "../../assets/007-rent.png";
import shoppingIcon from "../../assets/008-shopping-bag.png";
import fire from "../../assets/009-fire-fighter.png";
import courier from "../../assets/010-food-delivery.png";
import police from "../../assets/011-police-station.png";
import electricity from "../../assets/012-idea.png";
import diagnostic from "../../assets/013-diagnostic.png";
import blood from "../../assets/002-blood.png";
import hotel from "../../assets/015-5-stars.png";
import carRent from "../../assets/016-vehicle.png";
import mechanic from "../../assets/017-mechanic.png";
import emergency from "../../assets/emergency-call.png";
import jobs from "../../assets/019-job-search.png";
import entrepreneur from "../../assets/020-financer.png";
import teacher from "../../assets/021-teacher.png";
import bank from "../../assets/022-bank.png";
import restaurant from "../../assets/026-restaurant.png";
import flatland from "../../assets/027-building.png";
import videos from "../../assets/videos.png";
import news from "../../assets/028-newspaper.png";
import institutions from "../../assets/023-university.png";
import nursery from "../../assets/024-plant-nursery.png";
import events from "../../assets/029-banner.png";
import itservices from "../../assets/030-technical-support.png";
import freelancers from "../../assets/031-freelancer.png";
import cafes from "../../assets/032-cafe.png";
import pharmacy from "../../assets/033-pharmacy.png";
import beauty from "../../assets/034-makeup-pouch.png";
import gym from "../../assets/035-dumbbell.png";
import internet from "../../assets/036-isp.png";
import telecom from "../../assets/037-cell-tower.png";
import citizen from "../../assets/040-responsibility.png";
import legal from "../../assets/039-aid.png";
import social from "../../assets/038-activity.png";
import child from "../../assets/041-child.png";
import animal from "../../assets/animal.png";
import library from "../../assets/043-public-library.png";
import gas from "../../assets/044-fuel.png";
import consultation from "../../assets/045-online-doctor.png";
import wc from "../../assets/public-toilet.png";
import disabled from "../../assets/disabled-person.png";
import pasport from "../../assets/passport.png";
import university from "../../assets/university.png";
import college from "../../assets/college.png";
import high_school from "../../assets/school.png";
import Primary_school from "../../assets/primary.png";
import madrasa from "../../assets/madrasha.png";
import money from "../../assets/moneyexchanging.png";
import coaching from "../../assets/Coaching.png";
import orphanage from "../../assets/orphanage.png";

// components
import HealthConsultation from "../../page/Health-consultation/HealthConsultation";
import Ambulance from "../../page/Ambulance/Ambulance";
import Hospital from "../../page/Hospital/Hospital";
import Diagnostic from "../../page/Dagnostic/Diagnostic";
import Blood from "../../page/Blood/Blood";
import BusSchedule from "../../page/BusSchedule/BusSchedule";
import TrainSchedule from "../../page/train-schedule/TrainSchedule";
import TouristSpots from "../../page/Tourist-spots/TouristSpots";
import HouseRent from "../../page/HouseRent/HouseRent";
import Shopping from "../../page/Shopping/Shopping";
import FireService from "../../page/FireService/FireService";
import CourierService from "../../page/CourierService/CourierService";
import PoliceStation from "../../page/PoliceStation/PoliceStation";
import ElectricityOffice from "../../page/ElectricityOffice/ElectricityOffice";
import Hotel from "../../page/Hotel/Hotel";
import CarRent from "../../page/CarRent/CarRent";
import Mechanic from "../../page/Mechanic/Mechanic";
import EmergencyService from "../../page/EmergencyService/EmergencyService";
import Jobs from "../../page/Jobs/Jobs";
import Entrepreneur from "../../page/Entrepreneur/Entrepreneur";
import Teacher from "../../page/EducationalInstitutions/Teacher/Teacher";
import Bank from "../../page/Bank/Bank";
import Restaurant from "../../page/Restaurant/Restaurant";
import FlatLand from "../../page/FlatLand/FlatLand";
import Videos from "../../page/Videos/Videos";
import TodayCumilla from "../../page/TodayCumilla/TodayCumilla";
import EducationalInstitutions from "../../page/EducationalInstitutions/EducationalInstitutions";
import Nursery from "../../page/Nursery/Nursery";
import Events from "../../page/Events/Events";
import ITServices from "../../page/ITServices/ITServices";
import Freelancers from "../../page/Freelancers/Freelancers";
import Cafes from "../../page/Cafes/Cafes";
import Pharmacy from "../../page/Pharmacy/Pharmacy";
import BeautyParlour from "../../page/BeautyParlour/BeautyParlour";
import GymFitness from "../../page/GymFitness/GymFitness";
import InternetService from "../../page/InternetService/InternetService";
import TelecomService from "../../page/TelecomService/TelecomService";
import CitizenServices from "../../page/CitizenServices/CitizenServices";
import LegalAid from "../../page/LegalAid/LegalAid";
import SocialWelfare from "../../page/SocialWelfare/SocialWelfare";
import ChildProtection from "../../page/ChildProtection/ChildProtection";
import PublicLibrary from "../../page/PublicLibrary/PublicLibrary";
import GasSupply from "../../page/GasSupply/GasSupply";
import PublicToilet from "../../page/PublicToilet/PublicToilet";
import Disabled from "../../page/disabled/Disabled";
import AnimalServices from "../../page/AnimalServices/AnimalServices";
import DoctrList from "../../page/Docotors/DoctrList";
import ShoppingCrad from "../../page/Shopping/ShoppingCrad";
import ProfilePage from "../../page/Auth/Profile";
import MoneyExchange from "../../page/MoneyExchange/MoneyExchange";
import PrimarySchool from "../../page/EducationalInstitutions/Primary_school/PrimarySchool";
import University from "../../page/EducationalInstitutions/University/University";
import College from "../../page/EducationalInstitutions/College/College";
import HighSchool from "../../page/EducationalInstitutions/High_school/HighSchool";
import Madrasa from "../../page/EducationalInstitutions/Madrasa/Madrasa";

// Router configuration
export const categoriesMenu = [
  {
    name: "ডাক্তার",
    href: "/doctor",
    icon: doctor,
    component: <DoctrList />,
  },
  {
    name: "স্বাস্থ্য পরামর্শ",
    href: "/health-consultation",
    icon: consultation,
    component: <HealthConsultation />,
  },
  {
    name: "হাসপাতাল",
    href: "/hospital",
    icon: hospitalIcon,
    component: <Hospital />,
  },
  {
    name: "ডায়াগনস্টিক",
    href: "/diagnostic",
    icon: diagnostic,
    component: <Diagnostic />,
  },
  {
    name: "অ্যাম্বুলেন্স",
    href: "/ambulance",
    icon: ambulance,
    component: <Ambulance />,
  },
  {
    name: "রক্ত",
    href: "/blood",
    icon: blood,
    component: <Blood />,
  },
  {
    name: "বাসের সময়সূচি",
    href: "/bus-schedule",
    icon: bus,
    component: <BusSchedule />,
  },
  {
    name: "ট্রেনের সময়সূচি",
    href: "/train-schedule",
    icon: train,
    component: <TrainSchedule />,
  },
  {
    name: "দর্শনীয় স্থান",
    href: "/tourist-spots",
    icon: tourist,
    component: <TouristSpots />,
  },
  {
    name: "মানি এক্সচেঞ্জ",
    href: "/money-exchange",
    icon: money,
    component: <MoneyExchange />,
  },
  {
    name: "বাসা ভাড়া",
    href: "/house-rent",
    icon: house,
    component: <HouseRent />,
  },
  {
    name: "শপিং",
    href: "/shopping",
    icon: shoppingIcon,
    component: <Shopping />,
    children: [
      {
        href: "/shopping/:id",
        component: <ShoppingCrad />,
      },
    ],
  },
  {
    name: "শিক্ষা প্রতিষ্ঠান",
    href: "/educational-institutions",
    icon: institutions,
    component: <EducationalInstitutions />,
    children: [
      {
        name: "প্রাথমিক বিদ্যালয়",
        href: "/educational-institutions/primary_school",
        icon: Primary_school,
        component: <PrimarySchool />,
      },
      {
        name: "উচ্চ বিদ্যালয়",
        href: "/educational-institutions/high_school",
        icon: high_school,
        component: <HighSchool />,
      },
      {
        name: "কলেজ",
        href: "/educational-institutions/college",
        icon: college,
        component: <College />,
      },
      {
        name: "বিশ্ববিদ্যালয়",
        href: "/educational-institutions/university",
        icon: university,
        component: <University />,
      },
      {
        name: "মাদ্রাসা",
        href: "/educational-institutions/madrasa",
        icon: madrasa,
        component: <Madrasa />,
      },
      {
        name: "কোচিং সেন্টার",
        href: "/educational-institutions/coaching-centre",
        icon: coaching,
        component: <PrimarySchool />,
      },
      {
        name: "প্রাইভেট শিক্ষক",
        href: "/educational-institutions/teacher",
        icon: teacher,
        component: <Teacher />,
      },
      {
        name: "এতিমখানা",
        href: "/educational-institutions/orphanage",
        icon: orphanage,
        component: <Teacher />,
      },
    ],
  },
  {
    name: "পাসপোর্ট",
    href: "https://www.epassport.gov.bd/landing",
    icon: pasport,
    component: "",
  },

  {
    name: "ফায়ার সার্ভিস",
    href: "/fire-service",
    icon: fire,
    component: <FireService />,
  },
  {
    name: "কুরিয়ার সার্ভিস",
    href: "/courier-service",
    icon: courier,
    component: <CourierService />,
  },
  {
    name: "থানা-পুলিশ",
    href: "/police-station",
    icon: police,
    component: <PoliceStation />,
  },
  {
    name: "বিদ্যুৎ অফিস",
    href: "/electricity-office",
    icon: electricity,
    component: <ElectricityOffice />,
  },
  {
    name: "হোটেল",
    href: "/hotel",
    icon: hotel,
    component: <Hotel />,
  },
  {
    name: "গাড়ি ভাড়া",
    href: "/car-rent",
    icon: carRent,
    component: <CarRent />,
  },
  {
    name: "মিস্ত্রি",
    href: "/mechanic",
    icon: mechanic,
    component: <Mechanic />,
  },
  {
    name: "জরুরি সেবা",
    href: "/emergency-service",
    icon: emergency,
    component: <EmergencyService />,
  },

  {
    name: "চাকরি",
    href: "/jobs",
    icon: jobs,
    component: <Jobs />,
  },
  {
    name: "উদ্যোক্তা",
    href: "/entrepreneur",
    icon: entrepreneur,
    component: <Entrepreneur />,
  },
  {
    name: "ব্যাংক",
    href: "/bank",
    icon: bank,
    component: <Bank />,
  },
  {
    name: "রেস্টুরেন্ট",
    href: "/restaurant",
    icon: restaurant,
    component: <Restaurant />,
  },
  {
    name: "ফ্ল্যাট ও জমি",
    href: "/flat-land",
    icon: flatland,
    component: <FlatLand />,
  },
  {
    name: "ভিডিও দেখুন",
    href: "/videos",
    icon: videos,
    component: <Videos />,
  },
  {
    name: "আজকের কুমিল্লা",
    href: "/today-cumilla",
    icon: news,
    component: <TodayCumilla />,
  },

  {
    name: "নার্সারি",
    href: "/nursery",
    icon: nursery,
    component: <Nursery />,
  },
  {
    name: "ইভেন্টস",
    href: "/events",
    icon: events,
    component: <Events />,
  },
  {
    name: "আইটি সার্ভিস",
    href: "/it-services",
    icon: itservices,
    component: <ITServices />,
  },
  {
    name: "ফ্রিল্যান্সার",
    href: "/freelancers",
    icon: freelancers,
    component: <Freelancers />,
  },
  {
    name: "ক্যাফে",
    href: "/cafes",
    icon: cafes,
    component: <Cafes />,
  },
  {
    name: "ফার্মেসি",
    href: "/pharmacy",
    icon: pharmacy,
    component: <Pharmacy />,
  },
  {
    name: "বিউটি পার্লার",
    href: "/beauty-parlour",
    icon: beauty,
    component: <BeautyParlour />,
  },
  {
    name: "জিম ও ফিটনেস",
    href: "/gym-fitness",
    icon: gym,
    component: <GymFitness />,
  },
  {
    name: "ইন্টারনেট সার্ভিস",
    href: "/internet-service",
    icon: internet,
    component: <InternetService />,
  },
  {
    name: "টেলিকম সার্ভিস",
    href: "/telecom-service",
    icon: telecom,
    component: <TelecomService />,
  },
  {
    name: "নাগরিক সেবা",
    href: "/citizen-services",
    icon: citizen,
    component: <CitizenServices />,
  },
  {
    name: "আইনি সহায়তা",
    href: "/legal-aid",
    icon: legal,
    component: <LegalAid />,
  },
  {
    name: "সামাজিক কল্যাণ",
    href: "/social-welfare",
    icon: social,
    component: <SocialWelfare />,
  },
  {
    name: "শিশু সুরক্ষা",
    href: "/child-protection",
    icon: child,
    component: <ChildProtection />,
  },
  {
    name: "পশু সেবা",
    href: "/animal-services",
    icon: animal,
    component: <AnimalServices />,
  },
  {
    name: "পাবলিক লাইব্রেরি",
    href: "/public-library",
    icon: library,
    component: <PublicLibrary />,
  },
  {
    name: "গ্যাস সরবরাহ",
    href: "/gas-supply",
    icon: gas,
    component: <GasSupply />,
  },
  {
    name: "পাবলিক টয়লেট",
    href: "/public-toilet",
    icon: wc,
    component: <PublicToilet />,
  },
  {
    name: "প্রতিবন্ধী সেবা",
    href: "/disabled",
    icon: disabled,
    component: <Disabled />,
  },
];
