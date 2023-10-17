
const btn = document.getElementById("convert-btn")

btn.addEventListener("click", function () {

    const userInputField = document.getElementById("input-num")
    const meterPound = document.getElementById("meterPound")
    const literGallon = document.getElementById("liter-gallon")
    const kiloPound = document.getElementById("kiloPound")
    const userInput = parseInt(userInputField.value)
    
    
    const meterToFeet = (userInput * 3.281)
    const feetToMeter = (userInput * 0.3048)
    const literToGallon = (userInput * 0.264)
    const gallonToLiter = (userInput * 3.78541)
    const kilosToPound = (userInput * 2.204)
    const poundToKilo = (userInput * 0.453592)


    meterPound.textContent = `${userInput} meters = ${meterToFeet.toFixed(3)} feet  |  ${userInput} feet = ${feetToMeter.toFixed(3)} meters`


    literGallon.textContent = `${userInput} liters = ${literToGallon.toFixed(3)} gallons  |  ${userInput} gallons = ${gallonToLiter.toFixed(3)} liters`


    kiloPound.textContent = `${userInput} kilos = ${kilosToPound.toFixed(3)} pounds  |  ${userInput} pounds = ${poundToKilo.toFixed(3)} kilos`

    
})