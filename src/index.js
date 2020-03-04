document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let display = document.querySelector("#tasks");
  let submit = document.querySelector("#submitted");
  let textField = document.querySelector("#text");
    submit.addEventListener("click", (e) => { 
        if (textField === null) {
         display.innerHTML += `<li>${textField.value}</li>`;
          
        } else {
          
        }

  });
});
