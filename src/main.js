
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { spaceAge } from "./spaceAge.js"
import './styles.css';

$(document).ready(function(){
  let mySpaceAge = new spaceAge();
  console.log(mySpaceAge.todaysDate);
})
