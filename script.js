const btn = document.querySelector("#btn");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let parent = document.querySelector(".form");
let inputParent = document.querySelectorAll(".form-section");
//let inputParent = document.getElementsByClassName("form-section");
let dayParent = document.querySelector(".day");
let monthParent = document.querySelector(".month");
let yearParent = document.querySelector(".year");
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
// let errorMsg = document.createElement("p");
// errorMsg.setAttribute("class", "error-msg");

let errorMsgDay = document.createElement("p");
errorMsgDay.setAttribute("class", "error-msg");

let errorMsgMonth = document.createElement("p");
errorMsgMonth.setAttribute("class", "error-msg");

let errorMsgYear = document.createElement("p");
errorMsgYear.setAttribute("class", "error-msg");

let text = document.querySelector(".footer-section");
let title = document.querySelectorAll(".title");

console.log(dayParent.childNodes)


btn.addEventListener("click", checkNumbers)


function checkNumbers() {

    let numOfYears = "";
    let numOfMonths = "";
    let numOfDays = "";

    title.forEach((item) => item.style.color = "var(--smokey-grey)") //Återställer färg på rubrik

    if (dayParent.childNodes.length > 5) {
        inputParent[0].removeChild(errorMsgDay);
    }

    if (monthParent.childNodes.length > 5) {
        inputParent[1].removeChild(errorMsgMonth);
    }

    if (yearParent.childNodes.length > 5) {
        inputParent[2].removeChild(errorMsgYear);
    }

    if (parseFloat(day.value) > 32 || parseFloat(day.value) <= 0) {
        inputParent[0].appendChild(errorMsgDay);
        errorMsgDay.innerHTML = "Must be a valid day";
        title[0].style.color = "var(--lightRed)";
        numOfDays = "--";
    } else if (day.value == "" || day.value == null) {
        inputParent[0].appendChild(errorMsgDay);
        errorMsgDay.innerHTML = "This field is required";
        title[0].style.color = "var(--lightRed)";
        numOfDays = "--";
    }  else {
        numOfDays = currentDay - parseFloat(day.value);
    }
   
 
    if ((parseFloat(month.value) > 12) || (parseFloat(month.value) <= 0)) {
        inputParent[1].appendChild(errorMsgMonth);
        errorMsgMonth.innerHTML = "Must be a valid month";
        title[1].style.color = "var(--lightRed)";
        numOfMonths = "--";
    } else if (month.value == "" || month.value == null) {
        inputParent[1].appendChild(errorMsgMonth);
        errorMsg.innerHTML = "This field is required";
        title[1].style.color = "var(--lightRed)";
        numOfMonths = "--";
    } else {
        numOfMonths = currentMonth - parseFloat(month.value);
        if (currentMonth < parseFloat(month.value)){
            numOfYears -= 1;
            numOfMonths += 12;
        }
    }


    if (parseFloat(year.value) > currentYear) {
        inputParent[2].appendChild(errorMsgYear);           
        errorMsgYear.innerHTML = "Must be in the past";
        title[2].style.color = "var(--lightRed)";
        numOfYears = "--";
        console.log("year to high")
    } else if (year.value == "" || year.value == null) {
        inputParent[2].appendChild(errorMsgYear);
        errorMsgYear.innerHTML = "This field is required";
        title[2].style.color = "var(--lightRed)";
        numOfYears = "--";
        console.log("year not valid")
    } else {
        numOfYears = currentYear - parseFloat(year.value);
        console.log("year valid")
    }


            
    let newText = document.createElement("section"); 
    text.innerHTML = `<span class="--purple">${numOfYears}</span> years<br><span class="--purple">${numOfMonths}</span> months<br><span class="--purple">${numOfDays}</span> days`
    console.log(dayParent.childNodes)
    console.log(dayParent)
}


// function calculateAge() {
    
//     let newText = document.createElement("section");
    
//     // let numOfYears = currentYear - parseFloat(year.value);
//     // let numOfMonths = currentMonth - parseFloat(month.value);
//     // if (currentMonth < parseFloat(month.value)){
//     //     numOfYears -= 1;
//     //     numOfMonths += 12;
//     // }
//     // let numOfDays = currentDay - parseFloat(day.value);

//     text.innerHTML = `<span class="--purple">${numOfYears}</span> years<br><span class="--purple">${numOfMonths}</span> months<br><span class="--purple">${numOfDays}</span> days`

    
//     console.log(numOfYears, numOfMonths, numOfDays)
// }

