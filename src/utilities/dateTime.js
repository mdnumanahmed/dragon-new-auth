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

export const formatDate = (userDate, format) => {
  const date = new Date(userDate);
  const monthNames = [
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
  const shortMonthNames = monthNames.map((name) => name.slice(0, 3));

  const options = {
    yyyy: date.getFullYear(),
    yy: String(date.getFullYear()).slice(-2),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: date.getMonth() + 1,
    MMM: shortMonthNames[date.getMonth()],
    MMMM: monthNames[date.getMonth()],
    dd: String(date.getDate()).padStart(2, "0"),
    d: date.getDate(),
    HH: String(date.getHours()).padStart(2, "0"),
    H: date.getHours(),
    mm: String(date.getMinutes()).padStart(2, "0"),
    m: date.getMinutes(),
    ss: String(date.getSeconds()).padStart(2, "0"),
    s: date.getSeconds(),
  };

  return format.replace(
    /yyyy|yy|MMMM|MMM|MM|M|dd|d|HH|H|mm|m|ss|s/g,
    (match) => options[match]
  );
};

// Usage examples
// const userDate = new Date("2024-11-16T15:35:00");

// console.log(formatDate(userDate, "yyyy-MM-dd"));          // Output: "2024-11-16"
// console.log(formatDate(userDate, "dd MMM yyyy"));         // Output: "16 Nov 2024"
// console.log(formatDate(userDate, "MMMM dd, yyyy"));       // Output: "November 16, 2024"
// console.log(formatDate(userDate, "HH:mm:ss on MMMM d"));  // Output: "15:35:00 on November 16"
