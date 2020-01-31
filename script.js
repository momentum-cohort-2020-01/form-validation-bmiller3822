console.log('Add validation!');
 
    let fields = document.querySelectorAll(".field")
    var letters = /^[A-Za-z]+$/;
    var lettersAndNumbers = /^[0-9a-zA-Z]+$/;
    
  
    let parkingForm = document.querySelector("#parking-form")
    parkingForm.addEventListener("submit", function(e){
        e.preventDefault()
        for (let input of fields){
        console.log(input)
        if (input.value === ""){
            console.log("Nothing here!")
            if (input.parentElement.classList.contains("input-invalid")){
            } else {
            input.parentElement.classList.remove("input-valid")
            input.parentElement.classList.add("input-invalid")
            let required = document.createElement("p")
            console.log(required)
            required.innerText = "*Required"
            required.classList.add("required")
            input.parentElement.appendChild(required)
        }
        } else {
            console.log("Stuff in there")
            input.parentElement.classList.remove("input-invalid")
            input.parentElement.classList.add("input-valid")
            let requiredTwo = input.parentElement.querySelector("p")
            if (requiredTwo){
                input.parentElement.removeChild(requiredTwo)
            }
        }
    }})

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
