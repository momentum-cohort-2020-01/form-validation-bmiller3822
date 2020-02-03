//I seem to have broken things with this crazy class scheme I was trying for step 3, but I have a working step 2 down below (line 211)
//parseInt is something to look at for this assignment.  
//moment.js for date validation
//Check out examples repo for how Clinton did it.  

console.log('Add validation!');

let fields = document.querySelectorAll(".field")
let nameInput = document.querySelector("#name-input");
let carYear = document.querySelector("#car-year");
let carMake = document.querySelector("#car-make");
let carModel = document.querySelector("#car-model");
let startDate = document.querySelector("#start-date");
let days = document.querySelector("#days");
let creditCard = document.querySelector("#credit-card");
let cvv = document.querySelector("#cvv");
let expiration = document.querySelector("#expiration");
let letters = /^[A-z-]+$/; 
let lettersAndNumbers = /^[0-9a-zA-Z]+$/ ;
let numbers = new RegExp('^[0-9]+$');

let parkingForm = document.querySelector("#parking-form")
parkingForm.addEventListener("submit", function (e) {
    e.preventDefault()
    for (let input of fields) {
        console.log(input)
        if (input.value === "") {
            console.log("Nothing here!")
            if (input.parentElement.classList.contains("randomOne")) {  //"input-invalid"  and classList  if (input.parentElement.classList.contains(p))
            } else {
                input.parentElement.classList.remove("randomTwo")
                input.parentElement.classList.remove("randomThree")
                input.parentElement.classList.remove("randomFour")
                input.parentElement.classList.remove("randomFive")
                input.parentElement.classList.remove("randomSix")
                input.parentElement.classList.remove("randomSeven")
                input.parentElement.classList.remove("randomEight")
                input.parentElement.classList.remove("randomNine")
                input.parentElement.classList.remove("randomTen")
                input.parentElement.classList.remove("input-valid")
                input.parentElement.classList.add("randomOne")
                input.parentElement.classList.add("input-invalid")
                let noText = input.parentElement.querySelector("p")
                if (noText) {
                    input.parentElement.removeChild(noText)
                }
                let required = document.createElement("p")
                console.log(required)
                required.innerText = "*Required"
                required.classList.add("required")
                input.parentElement.appendChild(required)
            }
        } else if (!letters.test(nameInput.value)){
            if (nameInput.parentElement.classList.contains("randomTwo")){ //"input-invalid"
            } else {
            nameInput.parentElement.classList.remove("randomOne")
            nameInput.parentElement.classList.remove("input-valid")
            nameInput.parentElement.classList.add("randomTwo")
            nameInput.parentElement.classList.add("input-invalid")
            let wrongText = nameInput.parentElement.querySelector("p")
            if (wrongText) {
                nameInput.parentElement.removeChild(wrongText)
            }
            let required = document.createElement("p")
            console.log(required)
            required.innerText = "*Please enter Name using [A-Z]"
            required.classList.add("required")
            nameInput.parentElement.appendChild(required)
            }
        } else if (!numbers.test(carYear.value)){
                if (carYear.parentElement.classList.contains("randomThree")){ //"input-invalid"
                } else {
                carYear.parentElement.classList.add("randomThree")
                carYear.parentElement.classList.remove("randomOne")
                carYear.parentElement.classList.remove("input-valid")
                carYear.parentElement.classList.add("input-invalid")
                let wrongTextTwo = carYear.parentElement.querySelector("p")
                if (wrongTextTwo) {
                    carYear.parentElement.removeChild(wrongTextTwo)
                }
                let required = document.createElement("p")
                console.log(required)
                required.innerText = "*Please enter a 4 digit year"
                required.classList.add("required")
                carYear.parentElement.appendChild(required)
                }
        } else {
            console.log("Stuff in here!")
            input.parentElement.classList.remove("input-invalid")
            input.parentElement.classList.remove("randomOne")
            input.parentElement.classList.remove("randomTwo")
            input.parentElement.classList.add("input-valid")
            let required = input.parentElement.querySelector("p")
            if (required) {
                input.parentElement.removeChild(required)
            }
            let requiredTwo = nameInput.parentElement.querySelector("p")
            if (requiredTwo) {
                nameInput.parentElement.removeChild(requiredTwo)
            }
        }
    }
})

//Yeah I broke this.  This doesn't work the way I thought it would.  It gets caught up on Name and doesn't fully loop through.
// else if (!numbers.test(carYear.value)){
//     if (carYear.parentElement.classList.contains("randomThree")){ //"input-invalid"
//     } else {
//     carYear.parentElement.classList.add("randomThree")
//     carYear.parentElement.classList.remove("randomOne")
//     carYear.parentElement.classList.remove("input-valid")
//     carYear.parentElement.classList.add("input-invalid")
//     let wrongTextTwo = carYear.parentElement.querySelector("p")
//     if (wrongTextTwo) {
//         carYear.parentElement.removeChild(wrongTextTwo)
//     }
//     let required = document.createElement("p")
//     console.log(required)
//     required.innerText = "*Please enter a 4 digit year"
//     required.classList.add("required")
//     carYear.parentElement.appendChild(required)
//     }

//I'm about to break this: 
// let fields = document.querySelectorAll(".field")
// let nameInput = document.querySelector("#name-input");
// let carYear = document.querySelector("#car-year");
// let carMake = document.querySelector("#car-make");
// let carModel = document.querySelector("#car-model");
// let startDate = document.querySelector("#start-date");
// let days = document.querySelector("#days");
// let creditCard = document.querySelector("#credit-card");
// let cvv = document.querySelector("#cvv");
// let expiration = document.querySelector("#expiration");
// let letters = /^[A-z]+$/; 
// let lettersAndNumbers = /^[0-9a-zA-Z]+$/ ;

// let parkingForm = document.querySelector("#parking-form")
// parkingForm.addEventListener("submit", function (e) {
//     e.preventDefault()
//     for (let input of fields) {
//         console.log(input)
//         if (input.value === "") {
//             console.log("Nothing here!")
//             if (input.parentElement.contains(p)) {  //"input-invalid"  and classList  if (input.parentElement.classList.contains(p))
//             } else {
//                 input.parentElement.classList.remove("input-valid")
//                 input.parentElement.classList.add("input-invalid")
//                 let required = document.createElement("p")
//                 console.log(required)
//                 required.innerText = "*Required"
//                 required.classList.add("required")
//                 input.parentElement.appendChild(required)
//             }
//         } else if (!letters.test(nameInput.value)){
//             if (nameInput.parentElement.contains(p)){ //"input-invalid"
//             } else {
//             nameInput.parentElement.classList.remove("input-valid")
//             nameInput.parentElement.classList.add("input-invalid")
//             let required = document.createElement("p")
//             console.log(required)
//             required.innerText = "*Please enter Name using [A-z]"
//             required.classList.add("required")
//             nameInput.parentElement.appendChild(required)
//             }
//         // } else if (x>0){}
          
//         } else {
//             console.log("Stuff in here!")
//             input.parentElement.classList.remove("input-invalid")
//             input.parentElement.classList.add("input-valid")
//             let requiredTwo = input.parentElement.querySelector("p")
//             if (requiredTwo) {
//                 input.parentElement.removeChild(requiredTwo)
//             }
//         }
//     }
// })


//Noting this for when I inevitably break it:
// let nameInput = document.querySelector("#name-input");
// if(!letters.test(nameInput.value)){
//     nameInput.parentElement.classList.remove("input-valid")
//     nameInput.parentElement.classList.add("input-invalid")
//     let required = document.createElement("p")
//     console.log(required)
//     required.innerText = "*Please enter Name using [A-z]"
//     required.classList.add("required")
//     nameInput.parentElement.appendChild(required)
// }

// Failed attempt at reg ex
// if (document.querySelector("#name-input").value.match(letters)){
//     console.log("TADA!");
// }

//Need to do the 3 car fields as well.  
// Name = Text
// Car year = 4 Digits 
// Car make = Text
// Car model = Text
// Date parking = date 
// Number of days = any digits 
// Credit card = 16 digits 
// CVV = 3 digits 
// Expiration = month/year (2 digits/2 digits) 



//THIS WORKS!  END OF STEP 2. LET'S BREAK IT AGAIN FOR STEP 3 :) 
// let parkingForm = document.querySelector("#parking-form")
//     parkingForm.addEventListener("submit", function(e){
//         e.preventDefault()
//         for (let input of fields){
//         console.log(input)
//         if (input.value === ""){
//             console.log("Nothing here!")
//             if (input.parentElement.classList.contains("input-invalid")){
//             } else {
//             input.parentElement.classList.remove("input-valid")
//             input.parentElement.classList.add("input-invalid")
//             let required = document.createElement("p")
//             console.log(required)
//             required.innerText = "*Required"
//             required.classList.add("required")
//             input.parentElement.appendChild(required)
//         }
//         } else {
//             console.log("Stuff in here!")
//             input.parentElement.classList.remove("input-invalid")
//             input.parentElement.classList.add("input-valid")
//             let requiredTwo = input.parentElement.querySelector("p")
//             if (requiredTwo){
//                 input.parentElement.removeChild(requiredTwo)
//             }
//         }
//     }})


// Function to check letters and numbers
// function alphanumeric(inputtxt)
// {
//  var letterNumber = /^[0-9a-zA-Z]+$/;
//  if((inputtxt.value.match(letterNumber)) 
//   {
//    return true;
//   }
// else
//   { 
//    alert("message"); 
//    return false; 
//   }
//   }

// Function to check just for letters
// function allLetter(inputtxt)
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(inputtxt.value.match(letters))
//      {
//       return true;
//      }
//    else
//      {
//      alert("message");
//      return false;
//      }
//   }

    //pseudo code for Dane
    //grab all the html elements with that .field class
    //grab the entire parking form
    //add event listener
    //prevent default so it doesn't refresh
    //for of loop to loop through all of the input fields that have that .field class
    //if else statement, looking for if the field is blank
    //if there's nothing in the field that we're looping through, add the "input-invalid" class
    //the else statement is saying if there's ANYTHING in the field, add the "input-valid" class


    //Note:
    // if (node.parentNode) {
    //     // remove a node from the tree, unless 
    //     // it's not in the tree already
    //     node.parentNode.removeChild(node);
    //   }

//failed removal attempts
    // let reqP = node.parentNode;
    //         if (reqP.input.parentElement){
    //             reqP.input.parentElement.removeChild(reqP);
    //         }


    // This worked to remove required from Name!!!
    // let fields = document.querySelectorAll(".field")


    // let parkingForm = document.querySelector("#parking-form")
    // parkingForm.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     for (let input of fields){
    //     console.log(input);
    //     if (input.value === ""){
    //         console.log("Nothing here!")
    //         input.parentElement.classList.add("input-invalid")
    //         let required = document.createElement("p")
    //         console.log(required);
    //         required.innerText = "*Required"
    //         required.classList.add("required")
    //         input.parentElement.appendChild(required)
    //     } else {
    //         console.log("Stuff in there")
    //         input.parentElement.classList.add("input-valid")
    //         let required = input.parentElement.querySelector("p")
    //         if (required){
    //             input.parentElement.removeChild(required);
    //         }
    //     }
    // }})

    //Old version:
    // let parkingForm = document.querySelector("#parking-form")
    // parkingForm.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     for (let input of fields){
    //     console.log(input);
    //     if (input.value === ""){
    //         console.log("Nothing here!")
    //         input.parentElement.classList.add("input-invalid")
    //         let required = document.createElement("p")
    //         console.log(required);
    //         required.innerText = "*Required"
    //         required.classList.add("required")
    //         input.parentElement.appendChild(required)
    //     } else {
    //         console.log("Stuff in there")
    //         input.parentElement.classList.add("input-valid")
    //         let required = document.querySelector("p")
    //         if (document.querySelector(required).input.parentElement){
    //             input.parentElement.removeChild(required);
    //         }
    //     }
    // }})



    // Need to make cars red
    // Need to divide by the 3 car divs
    // Need to create a div and put the "required message" in there if it's incorrect.  Don't repeat.  Maybe remove the div on click or something. 
    // Step 3: 
    // Name must be a String
    // Car year must be a year
    // make and model as dropdowns?
    // Date parking is a date of course 
    // Number of days as a string/number?
    // Credit card?
    // CVV must be 3 numbers 
    // Expiration as month/year
    // Jebus, 4-6 I have no idea on. 




    //Woop this works!  Now I'm going to try and break it :)
    // let fields = document.querySelectorAll(".field")

    // let parkingForm = document.querySelector("#parking-form")
    // parkingForm.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     for (let input of fields){
    //     console.log(input);
    //     if (input.value === ""){
    //         console.log("Nothing here!")
    //         input.parentElement.classList.add("input-invalid")
    //     } else {
    //         console.log("Stuff in there")
    //         input.parentElement.classList.add("input-valid")
    //     }
    // }})


    // .field
//Failed attempt 1.5
// var arrayTwo = ["#name-field", "#car-field", "#start-date-field", "#days-field", "#credit-card-field", "#cvv-field", "#expiration-field"];
    // for (let div of arrayTwo){

//     Failed attempt:
//     document.body.input.parentElement.classList.add(".input-invalid")
// document.body.input.parentElement.classList.add(".input-valid");


// Failed attempt 2:
// let parkingForm = document.querySelector("#parking-form")
// parkingForm.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log(e);
//     console.log(event.target);
//     let nameInput = document.querySelector("#name-field")
//     if (nameInput.value == "" || nameInput.value == null){
//         nameInput.classList.add("input-invalid")
//     } else {
//     nameInput.classList.add("input-valid");
//     console.log(e);
//     console.log(event.target);
//     }});
