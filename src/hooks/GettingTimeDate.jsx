import { useState, useEffect } from "react";

function GreetingWithTime() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreetingWithTime = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      let greeting;
      let timeOfDay;

      if (currentHour < 12) {
        greeting = "Good Night 😴😴";
      } else if (currentHour < 6) {
        greeting = "Good morning 🌹🌹";
      } else if (currentHour < 18) {
        greeting = "Good afternoon 🥰🥰";
      } else {
        greeting = "Good evening 😍😍";
      }

      // Format the time to display in 12-hour format with leading zeros
      const currentMinutes = currentTime
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const currentSeconds = currentTime
        .getSeconds()
        .toString()
        .padStart(2, "0");
      const amPm = currentHour < 12 ? "AM" : "PM";
      const twelveHourFormat = currentHour % 12 || 12;

      timeOfDay = `${twelveHourFormat}:${currentMinutes}:${currentSeconds} ${amPm}`;

      setGreeting(`${greeting}, ${timeOfDay}`);
    };

    // Call the getGreetingWithTime initially
    getGreetingWithTime();

    // Update the greeting every 1 seconds (1000 milliseconds)
    const interval = setInterval(getGreetingWithTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <div>{greeting}</div>;
}

export default GreetingWithTime;
