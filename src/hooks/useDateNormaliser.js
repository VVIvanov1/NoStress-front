// this hook calculates the Order lifecicle and returns its days and hours
// createdAt.$date.$numberLong
const useDateNormaliser = (dateString) => {
  let date = new Date(Number(dateString));
  let diff = new Date() - date;
  let days = Math.floor(diff / 86400000);
  let hours = Math.floor((diff - days * 86400000) / 3600000);

  return { days, hours, date: date.toLocaleDateString("ru") };
};

export default useDateNormaliser;
