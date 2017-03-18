"use strict";


function search() {
  var city_name = document.querySelector("div.search input[name=city]").value;
  if (city_name === "") {
    document.getElementById("result_city").innerHTML = "Please enter city name";
    set_style("#result_city {color: red; margin-top: 38px; } input{ margin-top: 75px;} .search_button { margin-top: 77px;}");
  } else {
    document.getElementById("result_city").innerHTML = "Weather in city " + city_name;
    set_style("#result_city {color: white;margin-top: 5px; transition: 1s;} input{ margin-top: 5px;} .search_button { margin-top: 7px;}");
  }
};

function set_style(style) {
  var x = document.createElement("STYLE");
  var t = document.createTextNode(style);
  x.appendChild(t);
  document.head.appendChild(x);
};

// function request() {
//   var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ city_name +"&APPID=cb64092b9a1a76433cad8b70805f1d41";
//   var xml = new XMLHttpRequest();
//   xml.open("GET", apiUrl, false);
//   xml.send();
//
// }
