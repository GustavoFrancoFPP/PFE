function converterTemperatura() {
let celsius = Number(document.getElementById("celsiusInput").value);

let kelvin = celsius + 273.15;
alert(`A temperatura em Kelvin é: ${kelvin}K`);
let fahrenheit = celsius * 1.8 + 32;
alert(`A temperatura em Fahrenheit é: ${fahrenheit}°F`);

if (fahrenheit > 80) {
    document.body.style.backgroundColor = "coral";
} else {
    document.body.style.backgroundColor = "lightskyblue";
}
}