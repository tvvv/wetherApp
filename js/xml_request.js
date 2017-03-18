"use strict";


function search() {
  var city_name = document.querySelector("div.search input[name=city]").value;
  if (city_name === "") {
    document.getElementById("result_city").innerHTML = "Please enter city name";
    set_style("#result_city {color: red; margin-top: 38px; transition: 1s;} input{ margin-top: 75px; transition: 1s;} .search_button { margin-top: 77px; transition: 1s;}");
  } else {
    document.getElementById("result_city").innerHTML = "Weather in city " + city_name;
    set_style("#result_city {color: white;margin-top: 5px; transition: 1s;} input{ margin-top: 5px;} .search_button { margin-top: 7px;}");
    request();
  }
};

function set_style(style) {
  var x = document.createElement("STYLE");
  var t = document.createTextNode(style);
  x.appendChild(t);
  document.head.appendChild(x);
};

function request() {
  var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=cb64092b9a1a76433cad8b70805f1d41";
  var xml = new XMLHttpRequest();
  xml.open("GET", apiUrl, false);
  xml.send();
  if (xml.status != 200) {
    document.getElementById("result_city").innerHTML = "Somethung goin wrong plese try again in few minutes";
    set_style("#result_city {color: red; margin-top: 38px; transition: 1s;} input{ margin-top: 75px; transition: 1s;} .search_button { margin-top: 77px; transition: 1s;}");
  } else {
    var weather_obj = JSON.parse(xml.responseText);
    document.getElementById("firstDayDate").innerHTML = weather_obj.list[0].dt_txt.substring(0, weather_obj.list[1].dt_txt.length - 9) ;
    document.getElementById("Ftime").innerHTML = weather_obj.list[0].dt_txt.substring(11, weather_obj.list[1].dt_txt.length);
    document.getElementById("FTmin").innerHTML = weather_obj.list[0].main.temp_min - 270;
    document.getElementById("FTmax").innerHTML = weather_obj.list[0].main.temp_max - 270;
    document.getElementById("Currrent_state").innerHTML = weather_obj.list[0].weather[0].main;
    document.getElementById("description").innerHTML = weather_obj.list[0].weather[0].description;
  }
}
