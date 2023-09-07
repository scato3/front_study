export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  let mm = _date.getMonth() + 1;
  if (_date.getMonth() + 1 < 10) {
    mm = "0" + mm;
  }
  let dd = _date.getDate();
  if (_date.getDate() + 1 < 10) {
    dd = "0" + dd;
  }
  return `${yyyy}-${mm}-${dd}`;
};
