// import { age } from "../src/spaceAge.js";
// import { todaysDate } from "../src/spaceAge.js";
// import { todayArr } from "../src/spaceAge.js";
// import { todayNums } from "../src/spaceAge.js";
// import { birthDate } from "../src/spaceAge.js";
import { SpaceAge } from "../src/spaceAge.js";


describe("SpaceAge", function() {
  let mySpaceAge = new SpaceAge([5,24,1981]);
  it('should test that age in earth years is returned correctly', function() {
    mySpaceAge.age();
    expect(mySpaceAge.earthYears).toEqual(38);
  });
  it('should convert earth age to age on mercury', function() {
    mySpaceAge.merAgeCalc();
    expect(mySpaceAge.merYears).toEqual(158.33333333333334);
  });
  it('should convert earth age to age on mars', function() {
    mySpaceAge.marAgeCalc();
    expect(mySpaceAge.marYears).toEqual(20.21276595744681);
  });
  it('should convert earth age to age on jupiter', function() {
    mySpaceAge.jupAgeCalc();
    expect(mySpaceAge.jupYears).toEqual(3.204047217537943);
  });
  it('should convert earth age to age on venus', function() {
    mySpaceAge.venAgeCalc();
    expect(mySpaceAge.venYears).toEqual(61.29032258064516);
  });
  it('should convert life expectency to years on mercury', function() {
    mySpaceAge.merExpCalc();
    expect(mySpaceAge.merExp).toEqual(141.66666666666669);
  });
  it('should convert life expectency to years on venus', function() {
    mySpaceAge.venExpCalc();
    expect(mySpaceAge.venExp).toEqual(54.83870967741935);
  });
  it('should convert life expectency to years on Jupiter', function() {
    mySpaceAge.jupExpCalc();
    expect(mySpaceAge.jupExp).toEqual(2.8667790893760543);
  });
  it('should convert life expectancy to years on mars', function() {
    mySpaceAge.marExpCalc();
    expect(mySpaceAge.marExp).toEqual(18.085106382978726);
  });
})
