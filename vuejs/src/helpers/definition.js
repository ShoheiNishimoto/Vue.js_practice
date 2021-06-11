const today = new Date();
const thisYear = today.getFullYear();

///年月日の配列を初期化
const years = [];
const months = [];
const days = [];

function getOptions(start, end, list) {
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
}

getOptions(1900, thisYear,years);
getOptions(1, 12, months);
getOptions(1, 31, days);

export {years, months, days};
