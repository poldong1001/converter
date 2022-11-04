let inputOne  = document.querySelector("#inputOne");
let inputTwo  = document.querySelector("#inputTwo");
let inputTypeOne = document.querySelector("#inputTypeOne");
let inputTypeTwo = document.querySelector("#inputTypeTwo");
let inputTypeValue,resultTypeValue;

inputOne.addEventListener("keyup",myResult);
inputTwo.addEventListener("keyup",myResult);
inputTypeOne.addEventListener("change",myResult);
inputTypeTwo.addEventListener("change",myResult);


inputTypeValue = inputTypeOne.value;
resultTypeValue =inputTypeTwo.value;


function myResult(){

   inputTypeValue = inputTypeOne.value;
   resultTypeValue =inputTypeTwo.value;


// *******************************KILOMETRE******************************************


if(inputTypeValue === "kilometre" && resultTypeValue === "meter"){

   inputTwo.value =  (inputOne.value) * 1000;
   
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 100000;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 1e+6;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 1e+9;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 1e+12;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 0.621371;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 1093.61;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 3280.84;
}
else if(inputTypeValue === "kilometre" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 39370.1;
}
else if (inputTypeValue === "kilometre" && resultTypeValue === "kilometre"){
   inputTwo.value =  inputOne.value
    
    
}

// *******************************METER******************************************

if(inputTypeValue === "meter" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 0.001;
   
}
else if(inputTypeValue === "meter" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value)* 100;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 1000;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 1e+6;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 1e+9;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 0.000621371;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 1.09361;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 3.28084;
}
else if(inputTypeValue === "meter" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 39.3701;
}
else if (inputTypeValue === "meter" && resultTypeValue === "meter"){
   inputTwo.value =  inputOne.value
    
    
}
// *******************************CENTIMETRE******************************************

if(inputTypeValue === "centimetre" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 1e-5;
   
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 0.01;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 10;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 10000;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value)* 1e+7;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 6.2137e-6;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 0.0109361;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 0.0328084;
}
else if(inputTypeValue === "centimetre" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 0.393701;
}
else if (inputTypeValue === "centimetre" && resultTypeValue === "centimetre"){
   inputTwo.value =  inputOne.value
    
    
}
// *******************************MILIMETRE******************************************

if(inputTypeValue === "milimetre" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 1e-6;
   
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 0.001;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 0.1;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 1000;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 1e+6;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 6.2137e-7;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 0.00109361;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 0.00328084;
}
else if(inputTypeValue === "milimetre" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 0.0393701;
}
else if (inputTypeValue === "milimetre" && resultTypeValue === "milimetre"){
   inputTwo.value =  inputOne.value
    
    
}
// *******************************MICROMETRE******************************************
if(inputTypeValue === "micrometre" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 1e-9;
   
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 1e-6;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 1e-4;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 0.001;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 1000;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 6.2137e-10;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 1.0936e-6;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 3.2808e-6;
}
else if(inputTypeValue === "micrometre" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 3.937e-5;
}
else if (inputTypeValue === "micrometre" && resultTypeValue === "micrometre"){
   inputTwo.value =  inputOne.value
    
    
}
// *******************************MILE******************************************
if(inputTypeValue === "mile" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 1.60934;
   
}
else if(inputTypeValue === "mile" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 1609.34;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 160934;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 1.609e+9;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 6.2137e-13;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 1.609e+12;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 1760;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 5280;
}
else if(inputTypeValue === "mile" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 63360;
}
else if (inputTypeValue === "mile" && resultTypeValue === "mile"){
   inputTwo.value =  inputOne.value
    
    
}
// *******************************NANOMETRE******************************************
if(inputTypeValue === "nanometre" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 1e-12;
   
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 1e-9;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 1e-7;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 1e-6;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 0.001;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 6.2137e-13;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 1.0936e-9;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 3.2808e-9;
}
else if(inputTypeValue === "nanometre" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 3.937e-8;
}
else if (inputTypeValue === "nanometre" && resultTypeValue === "nanometre"){
   inputTwo.value =  inputOne.value
    
    
}
// *******************************************YARD*************************************
if(inputTypeValue === "yard" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 0.0009144;
   
}
else if(inputTypeValue === "yard" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 0.9144;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 91.44;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 914.4;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 914400;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 0.000568182;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 9.144e+8;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 3;
}
else if(inputTypeValue === "yard" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 36;
}
else if (inputTypeValue === "yard" && resultTypeValue === "yard"){
   inputTwo.value =  inputOne.value   
}
// *******************************************FOOT*************************************
if(inputTypeValue === "foot" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 0.0003048;
   
}
else if(inputTypeValue === "foot" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 0.3048;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 30.48;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 304.8;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 304800;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 0.000189394;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 3.048e+8;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 0.333333;
}
else if(inputTypeValue === "foot" && resultTypeValue ==="inch"){

   inputTwo.value =  (inputOne.value) * 12;
}
else if (inputTypeValue === "foot" && resultTypeValue === "foot"){
   inputTwo.value =  inputOne.value   
}
// *******************************************INCH*************************************
if(inputTypeValue === "inch" && resultTypeValue === "kilometre"){

   inputTwo.value =  (inputOne.value) * 2.54e-5;
   
}
else if(inputTypeValue === "inch" && resultTypeValue ==="meter"){

   inputTwo.value =  (inputOne.value) * 0.0254;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="centimetre"){

   inputTwo.value =  (inputOne.value) * 2.54;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="milimetre"){

   inputTwo.value =  (inputOne.value) * 25.4;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="micrometre"){

   inputTwo.value =  (inputOne.value) * 25400;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="mile"){

   inputTwo.value =  (inputOne.value) * 1.5783e-5;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="nanometre"){

   inputTwo.value =  (inputOne.value) * 2.54e+7;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="yard"){

   inputTwo.value =  (inputOne.value) * 0.0277778;
}
else if(inputTypeValue === "inch" && resultTypeValue ==="foot"){

   inputTwo.value =  (inputOne.value) * 0.0833333;
}
else if (inputTypeValue === "inch" && resultTypeValue === "inch"){
   inputTwo.value =  inputOne.value   
}
}




