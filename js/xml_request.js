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
    document.getElementById("result_city").innerHTML = "Something goin wrong plese try again in few minutes";
    set_style("#result_city {color: red; margin-top: 38px; transition: 1s;} input{ margin-top: 75px; transition: 1s;} .search_button { margin-top: 77px; transition: 1s;}");
  } else {
    var weather_obj = JSON.parse(xml.responseText);

    var body = document.getElementsByTagName("body")[0];
    var result_table = document.createElement("table");
    var tblBody = document.createElement("tbody");
    result_table.setAttribute("id", "tableStyle");
    var jsonElement = 0;
    for (var i = 0; i < 17; i++) {
      var row = document.createElement("tr");

      for (var j = 0; j < 6; j++) {
        var cell = document.createElement("td");
        var cell_text;
        if (i === 0) {
          cell.setAttribute("id", "heder");
        } else {
          cell.setAttribute("id", "cellStyle");
        }
        if ( i === 0) {
          cell_text = document.createTextNode(weather_obj.list[jsonElement].dt_txt.substring(0, weather_obj.list[jsonElement].dt_txt.length - 9)) ;
        } else if ( i !== 0 && i % 2 === 1) {
          cell_text = document.createTextNode(weather_obj.list[jsonElement].dt_txt.substring(11, weather_obj.list[jsonElement].dt_txt.length) + "\r\n" +
                      "Temperature " + Math.floor(weather_obj.list[jsonElement].main.temp_min - 270) + " °C" + "\r\n" +
                      weather_obj.list[jsonElement].weather[0].description);
        } else {
          cell_text = document.createElement("img");
          cell_text.setAttribute("src", "http://openweathermap.org/img/w/" + weather_obj.list[i].weather[0].icon + ".png");
        }
        cell.appendChild(cell_text);
        row.appendChild(cell);
        jsonElement++;
      }
      tblBody.appendChild(row);
    }
    result_table.appendChild(tblBody);
    body.appendChild(result_table);


    // document.getElementById("1 DayDate").innerHTML = weather_obj.list[0].dt_txt.substring(0, weather_obj.list[0].dt_txt.length - 9) ;
    // document.getElementById("1 record").innerHTML = weather_obj.list[0].dt_txt.substring(11, weather_obj.list[0].dt_txt.length) + "\r\n" +
    //                                                   "Temperature " + Math.floor(weather_obj.list[0].main.temp_min - 270) + " °C" + "\r\n" +
    //                                                   weather_obj.list[0].weather[0].description;
    // var img_link = "http://openweathermap.org/img/w/" + weather_obj.list[0].weather[0].icon + ".png";
    // document.getElementById("1 image").src = "http://openweathermap.org/img/w/" + weather_obj.list[0].weather[0].icon + ".png";
    //
    // if (weather_obj.list[0].dt_txt.substring(0, weather_obj.list[0].dt_txt.length - 9) === weather_obj.list[1].dt_txt.substring(0, weather_obj.list[1].dt_txt.length - 9)) {
    //
    // }
  }
}
