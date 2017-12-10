const DaysCalculator = {};

DaysCalculator.months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

DaysCalculator.getMonthDays = function getMonthDays(month, year) {
  return new Date(year, month + 1, 0).getDate();
};

DaysCalculator.getMonthAbleDays = function getMonthAbleDays(month, year) {
  const _monthInit = 1
  const _monthFinish = this.getMonthDays(month, year)
  const _date = new Date(year, month, _monthInit, 0, 0, 0, 0)

  return this.getAbleDays(_date, _monthInit, _monthFinish, [])
};

DaysCalculator.getAbleDays = function getAbleDays(
  firstDayDate, monthInit, monthFinish, notValidDays) {
  let auxcount = null;
  const ableDays = [];
  for (let i = monthInit - 1; i < monthFinish; i += 1) {
    if (auxcount === null) {
      auxcount = 5 - firstDayDate.getDay();
    } else {
      auxcount -= 1;
    }
    if (auxcount === -3) { auxcount = 4; }
    if (auxcount >= 0 && auxcount !== 5 && !notValidDays.includes(`${i + 1}`)) {
      ableDays.push(i + 1);
    }
  }

  return ableDays;
};

export default DaysCalculator;
