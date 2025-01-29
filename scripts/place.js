
function calculateWindChillF(tempF, speed) {
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
}

function calculateWindChillC(tempC, speed) {
    return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16));
}

let tempC = 26;
let speed = 5;
if (tempC <= 26 && speed > 4.8) {
    document.getElementById("wcf").innerHTML = `${calculateWindChillC(tempC, speed).toFixed(1)} °C`;
} else {
    document.getElementById("wcf").innerHTML = "N/A";
}