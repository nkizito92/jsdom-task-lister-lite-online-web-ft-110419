document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let display = document.querySelector("#tasks");
  let submit = document.querySelector("#submitted");
<<<<<<< HEAD
  let textField = document.querySelector("#new-task-description");
  submit.addEventListener("click", (e) => {
    if (textField.value === "") {
      alert("Please Fill out the text Field!");
      e.preventDefault();
    } else {
      display.innerHTML += `<li class="bull">${textField.value}</li>`;
      e.preventDefault();
    }
=======
  let textField = document.querySelector("#text");
    submit.addEventListener("click", (e) => { 
        if (textField === null) {
         display.innerHTML += `<li>${textField.value}</li>`;
          
        } else {
          
        }
>>>>>>> 5c6fde00c2bdb38bd0de28c1bc22152a1bc8f29f

  });
});
