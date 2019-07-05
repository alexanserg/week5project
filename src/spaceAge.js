const todaysDate = new Date().toLocaleDateString()
const todayArr = todaysDate.split("/");
const todayNums = [parseInt(todayArr[0]),parseInt(todayArr[1]),parseInt(todayArr[2])];
const birthDate = [5,24,1981]

export function age (birthDate,todayNums) {
  if (todayNums[0] - birthDate[0] > 0) {
    return todayNums[2]-birthDate[2];
  } else if ((todayNums[0]-birthDate[0]===0) && (todayNums[1]-birthDate[1]>=0)) {
    return todayNums[2]-birthDate[2];
  } else {
    return  todayNums[2]-birthDate[2]-1;
  }
}

let lifeExp = 72 - age(birthDate,todayNums);

class spaceAge {
  constructor(merYears, merExp, venYears, venExp, marYears, marExp, jupYears, jupExp) {
    this.merYears = age(birthDate,todayNums) / .24;
    this.merExp = lifeExp / .24;
    this.venYears = age(birthDate,todayNums) / .62;
    this.venExp = lifeExp / .62;
    this.marYears = age(birthDate,todayNums) / 1.88;
    this.marExp = lifeExp / 1.88;
    this.jupYears = age(birthDate,todayNums) / 11.86;
    this.jupExp = lifeExp / 11.86;
  }
}
let mySpaceAge = new spaceAge;
