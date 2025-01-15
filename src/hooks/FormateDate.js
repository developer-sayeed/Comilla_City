export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate(); // Day of the month (1-31)
  const month = date.getMonth(); // Month (0-11)
  const year = date.getFullYear(); // Full year (e.g., 2025)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDay = day < 10 ? `0${day}` : day;

  return `${months[month]} ${formattedDay}, ${year}`; // Example: January 01, 2025
};
