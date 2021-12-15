let percent = function (ati) {
  let obj = {};

  obj.needs = (ati * 1) / 2;
  obj.wants = (ati * 3) / 10;
  obj.savings = (ati * 1) / 5;
  return obj;
};
console.log(percent(10000));
console.log(percent(50000));
console.log(percent(134500));
