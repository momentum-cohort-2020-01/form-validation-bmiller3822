console.log('Add validation!');
 
    let fields = document.querySelectorAll(".field")
    
  
    let parkingForm = document.querySelector("#parking-form")
    parkingForm.addEventListener("submit", function(e){
        e.preventDefault();
        for (let input of fields){
        console.log(input);
        if (input.value === ""){
            console.log("Nothing here!")
            if (input.parentElement.classList.contains("input-invalid")){
            } else {
            input.parentElement.classList.add("input-invalid")
            let required = document.createElement("p")
            console.log(required);
            required.innerText = "*Required"
            required.classList.add("required")
            input.parentElement.appendChild(required)
        }
        } else {
            console.log("Stuff in there")
            input.parentElement.classList.add("input-valid")
            let required = input.parentElement.querySelector("p")
            if (required){
                input.parentElement.removeChild(required);
            }
        }
    }})

    //Second event listener if needed
    // parkingForm.addEventListener("submit", function(e){
    //     e.preventDefault();

    // });

    // if (node.parentNode) {
    //     // remove a node from the tree, unless 
    //     // it's not in the tree already
    //     node.parentNode.removeChild(node);
    //   }

//failed removal attemps
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
