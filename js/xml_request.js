"use strict";


function request() {

  var city = document.getElementsByName("city").value;
  if (city == "") {
    document.getElementById("error").innerHTML = "Please enter city name";
  } else {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://openweathermap.org.arg/',false);

    xhr.send();

    if (xhr.status != 200) {
      document.getElementById('error').innerHTML = xhr.status;
    }
    document.getElementById("error").innerHTML = "Error 404";
  }
};
