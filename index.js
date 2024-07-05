let output = document.querySelector(".output");
let start = document.querySelector(".start-btn");
let output2 = document.querySelector(".timer-section p");

console.log(output2);

let count = 0;
let startbtn = false;

start.addEventListener("click", () => {
    
    let interval = setInterval(() => {
        count++;
        if (count === 10) {
            count = 0;
            clearInterval(interval);
            start.disabled = false;
            output2.innerHTML = "Hello World";
        } else {
            start.disabled = true;
            output2.innerHTML = "";
        }
        output.innerHTML = count;
    }, 1000);

});


