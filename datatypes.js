var name1 = "Balakrishna";
var age = 30;
var flag = true;
var fruits = ['apple', 'banana'];
var DAY;
(function (DAY) {
    DAY[DAY["SUN"] = 0] = "SUN";
    DAY[DAY["MON"] = 1] = "MON";
    DAY[DAY["TUE"] = 2] = "TUE";
    DAY[DAY["WED"] = 3] = "WED";
})(DAY || (DAY = {}));
var today = DAY;
console.log(DAY);
console.log(DAY[0]);
console.log(DAY['SUN']);
console.log(DAY.SUN);
