

var FahrenheitElement = document.getElementById("Fahrenheit")
var CelsiusElement = document.getElementById("Celsius");
var KelvinElement = document.getElementById("Kelvin");

FahrenheitElement.addEventListener('input',function(){
    let f_Value = parseFloat(this.value);
    let c_Value = (((f_Value - 32)*5)/9);
    let k_value = (c_Value + 273.15);

    CelsiusElement.value = c_Value;
    KelvinElement.value = k_value;
})

CelsiusElement.addEventListener('input',function(){
    let c_Value = parseFloat(this.value);
    let f_Value = (((c_Value*9)/5)+32);
    let k_value = (c_Value + 273.15);

    FahrenheitElement.value = f_Value;
    KelvinElement.value = k_value;
})

KelvinElement.addEventListener('input',function(){
    let k_Value = parseFloat(this.value);
    let c_Value = (k_Value - 273.15);
    let f_value = (((c_Value*9)/5)+32);

    CelsiusElement.value = c_Value;
    FahrenheitElement.value = f_value;
})
