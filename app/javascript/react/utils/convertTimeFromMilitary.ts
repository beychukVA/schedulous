// Given a military time number (e.g. 1300), convert it to a string with minutes (e.g. 1:00 PM)

export const convertTimeFromMilitary = (time: number): string => {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${minutesStr} ${ampm}`;
};

export default convertTimeFromMilitary;
