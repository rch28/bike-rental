function extractDateTime(datetimeStr: string) {
  // Create a Date object from the provided string
  const dt = new Date(datetimeStr);

  // Format the date with the suffix
  const day = dt.getDate();
  const suffix = [11, 12, 13].includes(day)
    ? "th"
    : [1, 2, 3].includes(day % 10)
    ? ["st", "nd", "rd"][(day % 10) - 1]
    : "th";
  const date = `${day}${suffix} ${dt.toLocaleString("en", {
    month: "long",
  })} ${dt.getFullYear()}`;

  // Format the time
  const time = dt.toLocaleString("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return { date, time };
}
export default extractDateTime;
