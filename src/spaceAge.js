
// const todayNums = [parseInt(todayArr[0]),parseInt(todayArr[1]),parseInt(todayArr[2])];
// const birthDate = [5,24,1981];
// let lifeExp = 72 - this.age(birthDate,todayNums);
// won't compile if above is declared in class
export class spaceAge{
  const todaysDate = new Date().toLocaleDateString();
  const todayArr = todaysDate.split("/");
}
  constructor (birthDate, todayNums, lifeExp){
  this.birthDate=['mm','dd','yyyy'];
  this.todayNums= [parseInt(todayArr[0]),parseInt(todayArr[1]),parseInt(todayArr[2])];
  this.lifeExp = 72 - age();
}
  age (birthDate,todayNums) {
    if (this.todayNums[0] - this.birthDate[0] > 0) {
      return this.todayNums[2]-this.birthDate[2];
    } else if ((this.todayNums[0]-this.birthDate[0]===0) && (todayNums[1]-birthDate[1]>=0)) {
      return this.todayNums[2]-this.birthDate[2];
    } else {
      return  this.todayNums[2]-this.birthDate[2]-1;
    }
  }
  merAgeCalc(age()) {
    this.age() / .24;
  }
  merExpCalc(age()){
    this.lifeExp / .24;
  }
  venAgeCalc(age()) {
    this.age() / .62;
  }
  vanExpCalc(age()) {
    this.lifeExp / .62;
  }
  marAgeCalc(age()) {
    this.age() / 1.88;
  }
  marExpCalc(age()) {
    this.lifeExp / 1.88;
  }
  jupAgeCalc(ag(e) {
    this.age() / 11.86;
  }
  jupExpCalc(age()) {
    this.lifeExp / 11.86;
  }
}
