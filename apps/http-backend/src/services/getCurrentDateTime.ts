export const getCurrentDateTime = () => {
  const now = new Date();

  // Get date components
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = now.getDate();

  // Get time components
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the output (optional, but common)
  const formattedDate = `${day < 10 ? "0" : ""}${day}-${month < 10 ? "0" : ""}${month}-${year}`;
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  console.log(`Today's Date: ${formattedDate}`);
  console.log(`Current Year: ${year}`);
  console.log(`Current Time: ${formattedTime}`);

  return {
    date: formattedDate,
    year: year,
    time: formattedTime,
  };
};
