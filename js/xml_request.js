"use strict";


function search() {
  var city_name = document.querySelector("div.search input[name=city]").value;
  if (city_name === "") {
    document.getElementById("result_city").innerHTML = "Please enter city name";
    set_style("#result_city {color: red;}");
  } else {
    document.getElementById("result_city").innerHTML = "Weather in city " + city_name;
    set_style("#result_city {color: white;}");
  }
};

function set_style(style) {
  var x = document.createElement("STYLE");
  var t = document.createTextNode(style);
  x.appendChild(t);
  document.head.appendChild(x);
};
