console.log('Add validation!');
 
    let fields = document.querySelectorAll(".field")
  
    let parkingForm = document.querySelector("#parking-form")
    parkingForm.addEventListener("submit", function(e){
        e.preventDefault();
        for (let input of fields){
        console.log(input);
        if (input.value === ""){
            console.log("Nothing here!")
            input.parentElement.classList.add("input-invalid")
        } else {
            console.log("Stuff in there")
            input.parentElement.classList.add("input-valid")
        }
    }})




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
