function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const convertedTemperatureSpan = document.getElementById("convertedTemperature");

    //From Celsius
    if (unitSelect === "celsius") {
        const celsius = parseFloat(temperatureInput);
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        convertedTemperatureSpan.textContent = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    } 

    //From Fahrenheit
    else if (unitSelect === "fahrenheit") {
        const fahrenheit = parseFloat(temperatureInput);
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = ((fahrenheit - 32) * 5/9) + 273.15;
        convertedTemperatureSpan.textContent = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    } 

    //From Kelvin
    else if (unitSelect === "kelvin") {
        const kelvin = parseFloat(temperatureInput);
        const celsius = kelvin - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        convertedTemperatureSpan.textContent = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }
}
