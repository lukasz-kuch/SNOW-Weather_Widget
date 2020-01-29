(function() {

    if (input) {
        if (input.action == "getCity") {
            try {
                var r = new sn_ws.RESTMessageV2('Weather API', 'Default GET');
                r.setStringParameterNoEscape('city', input.city);
                var response = r.execute();
                var responseBody = response.getBody();
                var httpStatus = response.getStatusCode();
                var obj = JSON.parse(responseBody);
								data.location = obj.name;
                var ico = obj.weather[0].icon;
                //retrive all details from JSON file
                data.icon = "https://openweathermap.org/img/wn/" + ico + "@2x.png";
                data.description = obj.weather[0].description;

                data.temp = obj.main.temp;
                data.temp_feel = obj.main.feels_like;
                data.wind = obj.wind.speed;
                data.pressure = obj.main.pressure;
                data.hum = obj.main.humidity;

                /*
                var sset = obj.sys.sunset;
                var sunset = new GlideDateTime();
                sunset.setNumericValue(sset);
                data.sunset = sunset.getDisplayValue();
                data.sunrise = obj.sys.snrise;
                */

            } catch (ex) {
                var message = ex.message;
            }
        }
    }


})();