//Como declarar o array ? a id a ser consultada para innerHTML é declarationOfArrays
var fruits = ["Maçã", "Laranja", "Manga"];
console.log(fruits);
document.getElementById("declarationOfArrays").innerHTML = fruits;

//Como buscar o primeiro elemento do array ? a id a ser consultada para innerHTML é accessFirstElement
var firstFruit = fruits[0];
console.log(firstFruit);
document.getElementById("accessFirstElement").innerHTML = firstFruit;

//Como buscar o segundo elemento do array ? a id a ser consultada para innerHTML é accessSecondElement
var secondFruit = fruits[1];
console.log(secondFruit);
document.getElementById("accessSecondElement").innerHTML = secondFruit;

//Como buscar o terceiro elemento do array ? a id a ser consultado para innerHTML é accessThirdElement
var thirdFruit = fruits[2];
console.log(thirdFruit);
document.getElementById("accessThirdElement").innerHTML = thirdFruit;

//Como obter o comprimento do array ? a id a ser consultada para innerHTML é displayLengthOfArray
var lengthOfTheArray = fruits.length;
console.log(lengthOfTheArray);
document.getElementById("displayLengthOfArray").innerHTML = lengthOfTheArray;

//Como colocar o array em loop ? a id a ser consultada para innerHTML é loopTheArray
var arrayValue = "";

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  arrayValue = arrayValue + fruits[i] + "<br>";
}

document.getElementById("loopTheArray").innerHTML = arrayValue;

//adicionando o elemento ao final do array com o método push
//Como adicionar o elemento ao final do array ? a id a ser consultada para innerHTML é addElementAtTheEndOfArray
fruits.push("Limão");
console.log(fruits);
document.getElementById("addElementAtTheEndOfArray").innerHTML = fruits;

//Como adicionar mais elementos ao final do array ? a id a ser consultada para innerHTML é addMoreElementAtTheEndOfArray
fruits.push("cereja");
console.log(fruits);
document.getElementById("addMoreElementAtTheEndOfArray").innerHTML = fruits;

//Como declarar um array com o alfabeto ? a id a ser consultada para innerHTML é displayAlphabetsArray
var alphabets = ["l", "a", "e", "j", "b", "g", "f", "h", "c", "d", "i", "k"];
console.log(alphabets);
document.getElementById("displayAlphabetsArray").innerHTML = alphabets;

//Como organizar o array com alfabeto ? a id a ser consultada para innerHTML é displaySortedAlphabetsArray
alphabets.sort();
console.log(alphabets);
document.getElementById("displaySortedAlphabetsArray").innerHTML = alphabets;

//Como inverter o array ? a id a ser consultada para innerHTML é displayReverseArray
alphabets.reverse();
console.log(alphabets);
document.getElementById("displayReverseArray").innerHTML = alphabets;

//Como declarar o array com números ? a id a ser consultada para innerHTML é displayNumberArray
var numbers = [45, 4, 9, 16, 25];
console.log(numbers);
document.getElementById("displayNumberArray").innerHTML = numbers;

//Como encontrar o número máximo do array com números ? a id a ser consultada para innerHTML é displayMaximumNumber
var maximumNumber = Math.max.apply(Math, numbers);
console.log(maximumNumber);
document.getElementById("displayMaximumNumber").innerHTML = maximumNumber;

//Como encontrar o número mínimo do array com números ? a id a ser consultada para innerHTML é displayMinimumNumber
var minimumNumber = Math.min.apply(Math, numbers);
console.log(minimumNumber);
document.getElementById("displayMinimumNumber").innerHTML = minimumNumber;

console.log("ATIVIDADE ADICIONAL");

//adicionando elementos ao início do array com o método unshift
//Utilize o método unshift para adicionar elementos ao início do array . a id a ser consultada para innerHTML é addElementAtTheStartOfArray
fruits.unshift("melancia");
console.log(fruits);
document.getElementById("addElementAtTheStartOfArray").innerHTML = fruits;

//Utilize o método unshift para adicionar mais elementos ao início do array . a id a ser consultada para innerHTML é addMoreElementAtTheStartOfArray
fruits.unshift("morango");
console.log(fruits);
document.getElementById("addMoreElementAtTheStartOfArray").innerHTML = fruits;

//Utilize o método shift para remover os elementos do início do array . a id a ser consultada para innerHTML é removeElementFromStartOfArray
fruits.shift();
console.log(fruits);
document.getElementById("removeElementFromStartOfArray").innerHTML = fruits;

//Utilize o método pop para remover os elementos do final do array . a id a ser consultada para innerHTML é removeElementFromEndOfArray
fruits.pop();
console.log(fruits);
document.getElementById("removeElementFromEndOfArray").innerHTML = fruits;

//Como declarar um array com paises desenvolvidos ?
var firstWorldCountries = ["EUA", "CANADÁ", "JAPÃO"];

//Como declarar um array com países em desenvolvimento ?
var secondWorldCountries = ["CHINA", "RUSSIA", "ROMÊNIA"];

//utilize o método concat para unir os dois arrays . a id a ser consultada para innerHTML é mergeTwoArrays
var allCountries = firstWorldCountries.concat(secondWorldCountries);
console.log(allCountries);
document.getElementById("mergeTwoArrays").innerHTML = allCountries;
