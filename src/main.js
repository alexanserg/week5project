import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $(".earthAge").submit(function(event) {
    event.preventDefault();
    mySpaceAge = new spaceAge();
    console.log(birthDate);
    age(todayNums, birthDate);
    $("#ageOnEarth").write(myAge);

  })
})
