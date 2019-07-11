
export class SpaceAge {
  constructor(birthDate) {
    this.birthDate= birthDate;
    this.todaysDate = new Date().toLocaleDateString();
    this.todayArr = this.todaysDate.split("/");
    this.todayNums= [parseInt(this.todayArr[0]),parseInt(this.todayArr[1]),parseInt(this.todayArr[2])];
    this.earthYears= this.age();
    this.lifeExp = this.lifeExpCalc();

  }
  age() {
    if (this.todayNums[0] - this.birthDate[0] > 0) {
      return this.todayNums[2]-this.birthDate[2];
    } else if ((this.todayNums[0]-this.birthDate[0]===0) && (this.todayNums[1]-   this.birthDate[1]>=0)) {
      return this.todayNums[2]-this.birthDate[2];
    } else {
      return this.todayNums[2]-this.birthDate[2]-1;
    }
  }

  lifeExpCalc(){
    return 72-this.age();
  }

  merAgeCalc() {
    this.merYears = this.earthYears / .24;
  }
  merExpCalc(){
    this.merExp = this.lifeExp / .24;
  }
  venAgeCalc(){
    this.venYears = this.earthYears / .62;
  }
  venExpCalc() {
    this.venExp = this.lifeExp / .62;
  }
  marAgeCalc() {
    this.marYears = this.earthYears / 1.88;
  }
  marExpCalc() {
    this.marExp = this.lifeExp / 1.88;
  }
  jupAgeCalc() {
    this.jupYears = this.earthYears / 11.86;
  }
  jupExpCalc() {
    this.jupExp = this.lifeExp / 11.86;
  }
}
