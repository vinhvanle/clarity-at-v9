export default {
  getRandomDate: function ({ year, month } = {}) {
    // If year is not provided, generate random year between 1970 and current year
    const currentYear = new Date().getFullYear();
    const actualYear =
      year || Math.floor(Math.random() * (currentYear - 1970 + 1)) + 1970;

    // If month is not provided, generate random month (0-11)
    const actualMonth =
      month !== undefined ? month - 1 : Math.floor(Math.random() * 12);

    const start = new Date(actualYear, actualMonth, 1);
    const end = new Date(actualYear, actualMonth + 1, 0); // Last day of the month

    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    const day = String(randomDate.getDate()).padStart(2, "0");
    const monthStr = String(randomDate.getMonth() + 1).padStart(2, "0");
    const yearStr = randomDate.getFullYear();

    return `${day}/${monthStr}/${yearStr}`;
  },

  getDateByCurrentDateWithOffset: function (offset) {
    const currentDate = new Date();
    const newDate = new Date(currentDate.getTime());
    newDate.setDate(currentDate.getDate() + offset);
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  },

  getDateByStringWithOffset: function (dateString, offset) {
    // Parse the input date string (assuming format is DD/MM/YYYY)
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    // Apply the offset
    date.setDate(date.getDate() + offset);

    // Format the new date as a string
    const newDay = String(date.getDate()).padStart(2, "0");
    const newMonth = String(date.getMonth() + 1).padStart(2, "0");
    const newYear = date.getFullYear();

    return `${newDay}/${newMonth}/${newYear}`;
  },
};
