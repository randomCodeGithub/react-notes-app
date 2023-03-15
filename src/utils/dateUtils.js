export const getFormatedDate = () => {
  const currentDate = new Date();
  const day = formatTime(currentDate.getDate());
  const month = formatTime(currentDate.getMonth() + 1);
  const year = currentDate.getFullYear();
  const hours = formatTime(currentDate.getHours());
  const mins = formatTime(currentDate.getMinutes());
  return `${day}.${month}.${year} ${hours}:${mins}`;
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
