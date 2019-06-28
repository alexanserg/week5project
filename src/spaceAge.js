export class spaceAge {
  constructor(birthDate, todaysDate, earthYears, expect, merYears, venYears, marYears, jupYears) {
    this.birthDate = [$("#birthMonth").val(),$("#birthDay").val(),$("#birthYear").val()];
    this.todaysDate =  new Date().toLocaleDateString().split("/");
    this.earthYears = 0;
    this.expect = averageLife - this.earthYears;
    this.merYears = earthAge * .24;
    this.venYears = earthage * .62;
    this.marYears = earthAge * 1.88;
    this.jupYears = earthAge * 11.86;
  }
  let age = function(todayNums, this.birthDate) {
    let  todayNums = [parseInt(todaysDate[0]),parseInt(todaysDate[1]),parseInt(todaysDate[2])];
    if (todayNums[0] - this.birthDate[0] > 0) {
      this.earthYears = todayNums[2]-this.birthDate[2];
    } else if ((todayNums[0]this.-this.birthDate[0]===0) && (todayNums[1]-this.birthDate[1]>=0)) {
      this.earthYears = todayNums[2]-this.birthDate[2];
    } else {
      this.earthYears = todayNums[2]-this.birthDate[2]-1;
    }
}
}
