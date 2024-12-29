import doctor from "../../assets/001-doctor.png";
import hospital from "../../assets/003-hospital-building.png";
import ambulance from "../../assets/ambulance.png";
import bus from "../../assets/004-bus-schedule.png";
import train from "../../assets/005-train-times.png";
import tourist from "../../assets/006-tourist.png";
import house from "../../assets/007-rent.png";
import shopping from "../../assets/008-shopping-bag.png";
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
import smartUP from "../../assets/up-service.png";
import passport from "../../assets/passport.png";
import wc from "../../assets/public-toilet.png";
import masjid from "../../assets/mosque.png";
import disabled from "../../assets/disabled-person.png";

export const navigation = [
  {
    name: "ডাক্তার",
    href: "/doctor",
    icon: doctor,
  },
  {
    name: "স্বাস্থ্য পরামর্শ",
    href: "/health-consultation",
    icon: consultation,
  },
  {
    name: "হাসপাতাল",
    href: "/hospital",
    icon: hospital,
  },
  {
    name: "ডায়াগনস্টিক",
    href: "/diagnostic",
    icon: diagnostic,
  },
  {
    name: "অ্যাম্বুলেন্স",
    href: "/ambulance",
    icon: ambulance,
  },
  {
    name: "রক্ত",
    href: "/blood",
    icon: blood,
  },
  {
    name: "বাসের সময়সূচি",
    href: "/bus-schedule",
    icon: bus,
  },
  {
    name: "ট্রেনের সময়সূচি",
    href: "/train-schedule",
    icon: train,
  },
  {
    name: "দর্শনীয় স্থান",
    href: "/tourist-spots",
    icon: tourist,
  },
  {
    name: "বাসা ভাড়া",
    href: "/house-rent",
    icon: house,
  },
  {
    name: "শপিং",
    href: "/shopping",
    icon: shopping,
  },
  {
    name: "ফায়ার সার্ভিস",
    href: "/fire-service",
    icon: fire,
  },
  {
    name: "কুরিয়ার সার্ভিস",
    href: "/courier-service",
    icon: courier,
  },
  {
    name: "থানা-পুলিশ",
    href: "/police-station",
    icon: police,
  },
  {
    name: "বিদ্যুৎ অফিস",
    href: "/electricity-office",
    icon: electricity,
  },
  {
    name: "স্মার্ট ইউপি",
    href: "https://comillalg.gov.bd/",
    icon: smartUP,
  },
  {
    name: "পাসপোর্ট",
    href: "https://www.epassport.gov.bd",
    icon: passport,
  },

  {
    name: "হোটেল",
    href: "/hotel",
    icon: hotel,
  },
  {
    name: "গাড়ি ভাড়া",
    href: "/car-rent",
    icon: carRent,
  },
  {
    name: "মিস্ত্রি",
    href: "/mechanic",
    icon: mechanic,
  },
  {
    name: "জরুরি সেবা",
    href: "/emergency-service",
    icon: emergency,
  },
  {
    name: "চাকরি",
    href: "/jobs",
    icon: jobs,
  },
  {
    name: "উদ্যোক্তা",
    href: "/entrepreneur",
    icon: entrepreneur,
  },
  {
    name: "শিক্ষক",
    href: "/teacher",
    icon: teacher,
  },
  {
    name: "মসজিদ",
    href: "/masjid",
    icon: masjid,
  },
  {
    name: "ব্যাংক",
    href: "/bank",
    icon: bank,
  },
  {
    name: "রেস্টুরেন্ট",
    href: "/restaurant",
    icon: restaurant,
  },
  {
    name: "ফ্ল্যাট ও জমি",
    href: "/flat-land",
    icon: flatland,
  },
  {
    name: "ভিডিও দেখুন",
    href: "/videos",
    icon: videos,
  },
  {
    name: "আজকের কুমিল্লা",
    href: "/today-cumilla",
    icon: news,
  },
  {
    name: "শিক্ষা প্রতিষ্ঠান",
    href: "/educational-institutions",
    icon: institutions,
  },
  {
    name: "নার্সারি",
    href: "/nursery",
    icon: nursery,
  },
  {
    name: "ইভেন্টস",
    href: "/events",
    icon: events,
  },
  {
    name: "আইটি সার্ভিস",
    href: "/it-services",
    icon: itservices,
  },
  {
    name: "ফ্রিল্যান্সার",
    href: "/freelancers",
    icon: freelancers,
  },
  {
    name: "ক্যাফে",
    href: "/cafes",
    icon: cafes,
  },
  {
    name: "ফার্মেসি",
    href: "/pharmacy",
    icon: pharmacy,
  },
  {
    name: "বিউটি পার্লার",
    href: "/beauty-parlour",
    icon: beauty,
  },
  {
    name: "জিম ও ফিটনেস",
    href: "/gym-fitness",
    icon: gym,
  },
  {
    name: "ইন্টারনেট সার্ভিস",
    href: "/internet-service",
    icon: internet,
  },
  {
    name: "টেলিকম সার্ভিস",
    href: "/telecom-service",
    icon: telecom,
  },
  {
    name: "নাগরিক সেবা",
    href: "/citizen-services",
    icon: citizen,
  },
  {
    name: "আইনি সহায়তা",
    href: "/legal-aid",
    icon: legal,
  },
  {
    name: "সামাজিক কল্যাণ",
    href: "/social-welfare",
    icon: social,
  },
  {
    name: "শিশু সুরক্ষা",
    href: "/child-protection",
    icon: child,
  },
  {
    name: "পশু সেবা",
    href: "/animal-services",
    icon: animal,
  },
  {
    name: "পাবলিক লাইব্রেরি",
    href: "/public-library",
    icon: library,
  },
  {
    name: "গ্যাস সরবরাহ",
    href: "/gas-supply",
    icon: gas,
  },
  {
    name: "পাবলিক টয়লেট",
    href: "/public-toilet",
    icon: wc,
  },
  {
    name: "প্রতিবন্ধী সেবা",
    href: "/disabled",
    icon: disabled,
  },
];
