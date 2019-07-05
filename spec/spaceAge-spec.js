import { spaceAge } from "../src/spaceAge.js"
import { age } from "../src/spaceAge.js"
// import { todaysDate } from "../src/spaceAge.js"
// import { todayArr } from "../src/spaceAge.js"
// import { todayNums } from "../src/spaceAge.js"
// import { birthDate } from "../src/spaceAge.js"


describe('age', function () {
  it('should test that age in earth years is returned correctly', function() {
    expect(age(birthDate,todayNums)).toEqual(38);
  });
})
