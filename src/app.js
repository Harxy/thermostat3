var thermostat = new Thermostat();
UpdateThermo();
getWeatherForCity($('#select').val());

$('#up_button').click(function() {
  thermostat.increaseTemperature();
  UpdateThermo();
});

$('#down_button').click(function() {
  thermostat.decreaseTemperature();
  UpdateThermo();
});

$('#reset').click(function() {
  thermostat.resetTemperature();
  UpdateThermo();
});

$('#myonoffswitch').click(function() {
  thermostat.changePowerSaveMode();
  UpdateThermo();
});

$('#select').change(function() {
  getWeatherForCity($( this ).val());
});

function changeColour() {
  if (thermostat.colour == 'green') {
    $('#current_temperature').removeClass().addClass('green');
    }
  if (thermostat.colour == 'yellow') {
    $('#current_temperature').removeClass().addClass('yellow');
    }
  if (thermostat.colour == 'red') {
    $('#current_temperature').removeClass().addClass('red');
  };
};

function UpdateThermo(){
  $('#current_temperature').html(thermostat.temperature + '°c');
  changeColour();
};

function getWeatherForCity(city){
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=a1151fe1a04efc268bb7ee2de474340a&units=metric';
        var response = $.get(url).done(function() {
          var data = response.responseJSON.main.temp;
          $("#weatherWidget").html(data);
        });
    };
