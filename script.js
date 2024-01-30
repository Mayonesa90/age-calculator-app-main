const btn = document.querySelector("#btn");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let parent = document.querySelector(".form");
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
let errorMsg = document.createElement("p");


day.addEventListener("input", () => {
    if (parseFloat(day.value) > 32) {
        
        parent.appendChild(errorMsg);
        errorMsg.innerHTML = "Pick a valid date";
        
        day.addEventListener("input", () => {
            if (parseFloat(day.value) < 32) {
                parent.removeChild(errorMsg);
            }
        })
    }

})

month.addEventListener("input", () => {
    if (parseFloat(month.value) > 12) {
        
        parent.appendChild(errorMsg);
        errorMsg.innerHTML = "Pick a valid month";
        
        month.addEventListener("input", () => {
            if (parseFloat(month.value) < 12) {
                parent.removeChild(errorMsg);
            }
        })
    }

})

year.addEventListener("input", () => {
    if (parseFloat(year.value) > currentYear || parseFloat(year.value) < 1900) {
        
        parent.appendChild(errorMsg);
        errorMsg.innerHTML = "Pick a valid year";
        
        year.addEventListener("input", () => {
            if (parseFloat(year.value) < currentYear) {
                parent.removeChild(errorMsg);
            }
        })
    }

})



// function checkValidNum(num) {
//     if (parseFloat(num) > 32) {
//         parent.appendChild(errorMsg);
//         errorMsg.innerHTML = "Pick a valid date";
        
//         this.addEventListener("input", () => {
//             if (parseFloat(num) < 32) {
//                 parent.removeChild(errorMsg);
//             }
//         })
//     }
// } 
  
// day.addEventListener("input", () => checkValidNum(day.value));
// month.addEventListener("input", () => checkValidNum(month.value));
// year.addEventListener("input", () => checkValidNum(year.value));

btn.addEventListener("click", calculateAge)


function calculateAge() {
    
    let newText = document.createElement("section");
    
    let numOfYears = currentYear - parseFloat(year.value);
    let numOfMonths = currentMonth - parseFloat(month.value);
    if (currentMonth < parseFloat(month.value)){
        numOfYears -= 1;
        numOfMonths += 12;
    }
    let numOfDays = currentDay - parseFloat(day.value);


    // if (parent.includes(newText)) {
    //     parent.replace(newText, newText);
    // } else {
    //     newText.setAttribute("class", "footer-section");
    //     parent.appendChild(newText);
    // }

    // if (parent.children.length > 4) {
    //     parent.children.replace(newText, newText)
    //     }

    // } else if (parent.children[4] == newText){
    //     parent.removeChild(newText);
    //     parent.appendChild(newText);
    // }

    newText.innerHTML = `<span class="--purple">${numOfYears}</span> years<br><span class="--purple">${numOfMonths}</span> months<br><span class="--purple">${numOfDays}</span> days`
    newText.setAttribute("class", "footer-section");

    
    //newText.setAttribute("class", "footer-section");
        console.log(parent.children.length)

    parent.appendChild(newText);


     

    console.log(numOfYears, numOfMonths, numOfDays)
}

