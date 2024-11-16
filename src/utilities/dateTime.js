// Current date in desired format by new Intl.DateTimeFormat()
export const dateFormatByInt = (givenDate) => {
  const date = new Date(givenDate);
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate; // Example: "Aug 25 2022"
};

// Current date in desired format Manually
export const dateFormat = (givenDate) => {
  const date = new Date(givenDate);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${month} ${day} ${year}`;
  return formattedDate; // Example: "Aug 25 2022"
};
