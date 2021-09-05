function getNumberOfDaysInMonth(year, month) {
  let previousMonth = month - 1;
  let date1 = new Date(year, previousMonth, previousMonth);
  let date2 = new Date(year, month, previousMonth);
  let result = {
    numberDays: Math.round((date2 - date1) / 1000 / 3600 / 24),
    firstDayofMonth: new Date(year, month - 1, 1).getDay(),
    year,
    month,
  };

  return result;
}

function getCurrentlyMonth(year, month) {
  let currentlyMonth = getNumberOfDaysInMonth(year, month);
  if (currentlyMonth.firstDayofMonth === 0) currentlyMonth.firstDayofMonth = 7;
  let dayOfPreviousMonth = currentlyMonth.firstDayofMonth - 1;
  let prevMonth = getNumberOfDaysInMonth(year, month - 1);
  let arrPrevious = [];
  for (
    let i = prevMonth.numberDays;
    i > prevMonth.numberDays - dayOfPreviousMonth;
    i--
  ) {
    arrPrevious.push(i);
  }
  arrPrevious = arrPrevious.reverse();
  let dayOfNextMonth = 35 - (dayOfPreviousMonth + currentlyMonth.numberDays);
  let arrNext = [];
  for (let i = 1; i <= dayOfNextMonth; i++) {
    arrNext.push(i);
  }
  let result = [];
  for (let i = 1; i <= currentlyMonth.numberDays; i++) {
    result.push(i);
  }
  result = result.concat(arrNext);
  result = arrPrevious.concat(result);
  if (result.length === 35) return result;
  let count = 42 - result.length;
  for (let i = 1; i <= count; i++) {
    result.push(i);
  }
  return result;
}

export function createMonth(year, month) {
  let numberMonth = getCurrentlyMonth(year, month);
  let result = [];
  for (let i = 0; i < numberMonth.length; i++) {
    let obj = {
      id: Math.random().toString(36).substr(2, 9),
      day: numberMonth[i],
      deal: null,
      month,
    };
    result.push(obj);
  }
  return result;
}

export function getNameofMounth(month) {
  let mounthName = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь",
  };
  for (const key in mounthName) {
    if (Object.hasOwnProperty.call(mounthName, key)) {
      if (+key === month) {
        const element = mounthName[key];
        return element;
      }
    }
  }
}

export function getDayOfWeek() {
  return {
    0: "Понедельник, ",
    1: "Вторник, ",
    2: "Среда, ",
    3: "Четверг, ",
    4: "Пятница, ",
    5: "Суббота, ",
    6: "Воскресенье, ",
  };
}
