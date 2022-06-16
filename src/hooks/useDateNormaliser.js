// this hook calculates the Order lifecicle and returns its days and hours
// createdAt.$date.$numberLong
const useDateNormaliser = (dateString) => {
  let date = Date.parse(dateString);
  // console.log(new Date(dateString).getMinutes());
  let diff = new Date() - date;
  let days = Math.floor(diff / 86400000);
  let hours = Math.floor((diff - days * 86400000) / 3600000);
  let minutes = new Date(diff).getMinutes();

  return {
    days,
    hours,
    minutes,
    date: new Date(date).toLocaleDateString("ru"),
  };
};

export default useDateNormaliser;
