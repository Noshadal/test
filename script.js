
function printEvenNumbers() {
    const userInput = document.getElementById("numberInput").value;
    var outputeve = document.getElementById("outputeve")

    // Check if the input is a valid number
    if (!isNaN(userInput)) {
        let evenNumbers = [];
        // Iterate from 0 up to the input number
        for (let i = 0; i <= userInput; i++) {
            // Check if the current number is even
            if (i % 2 === 0) {
                evenNumbers.push(i); // Store the even number
            }
        }
        // Print the even numbers
        outputeve.innerHTML = "Even Numbers: " + evenNumbers.join(", ");
    } else {
        outputeve.innerHTML= "Invalid input. Please enter a valid number.";
    }
}

function findLongestWord() {
    // Get the input sentence from the input tag
    const sentence = document.getElementById("sentenceInput").value;

    // Check if the input is not empty
    if (sentence.trim() !== "") {
        // Split the sentence into an array of words
        const words = sentence.split(" ");

        // Initialize a variable to store the longest word
        let longestWord = "";

        // Iterate through each word in the array
        for (let i = 0; i < words.length; i++) {
            // Check if the current word is longer than the longest word found so far
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }

        // Display the longest word in the output div
        document.getElementById("outputsent").textContent = "Longest Word: " + longestWord;
    } else {
        // Display an error message if the input is empty
        document.getElementById("outputsent").textContent = "Invalid input. Please enter a sentence.";
    }
}
function getArrayLength() {
    // Define an example array
    const array = [1, 2, 3, 4, 5];

    // Get the length of the array
    const length = array.length;

    // Display the length of the array in the output div
    document.getElementById("outputarr").textContent = array +"Array length: " + length;
}




function isDivisibleByTen() {
    var din = document.getElementById("divide")
    
    if (din.value % 10 === 0) {
        document.getElementById("divd").textContent = "YOU ARE WRITE"
    }else{
        document.getElementById("divd").textContent = "YOU ARE WRONGE"
    }
    
}
var table = document.getElementById("table")
var output =document.getElementById("tableout")
function tablemi() {
    for (let i = 0; i < table.value; i++) {
        console.log();
        output.innerHTML += `${table.value} X  ${[i]}  =  ${table.value*i} <br>`
        
    }
    
}


// Example usage:
// console.log(); // Output: true
// console.log(); // Output: false


