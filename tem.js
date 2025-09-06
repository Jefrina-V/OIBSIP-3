function convertTemperature() {
  let temp = parseFloat(document.getElementById('temperatureInput').value);
  let type = document.getElementById('conversionType').value;
  let result = '';

  if (isNaN(temp)) {
    result = "Please enter a valid number.";
  } 
  else if (type === "fToC") {
// Fahrenheit to Celsius: (F − 32) × 5⁄9
    let celsius = ((temp - 32) * 5) / 9;
    result = `${temp}°F = ${celsius.toFixed(2)}°C`;
  } 
  else if (type === "cToF") {
    // Celsius to Fahrenheit: (C × 9⁄5) + 32
    let fahrenheit = ((temp * 9) / 5) + 32;
    result = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
  }
  document.getElementById('result').textContent = result;
}
