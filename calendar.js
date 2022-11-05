const monthSelect = document.getElementById("month")
const yearSelect = document.getElementById("year");
const daySelect = document.getElementById("day");

const dateValue = document.getElementById("enter")


const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

function populateMonth() {
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement("option");
        option.textContent = months[i];
        monthSelect.appendChild(option)
    }
}
populateMonth();

function populateYears() {
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for (let i = 0; i <= 100; i++) {
        let option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}
populateYears();

function populateDays() {
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    // getting first day of month
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    // getting last date of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    // // getting last day of month
    // let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    // // getting last date of previous month
    // let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let dayNum;
    let month = monthSelect.value;
    let year = yearSelect.value;
    // console.log(month)

    if (month === 'January' || month === 'March' ||
        month === 'May' || month === 'July' || month === 'August'
        || month === 'October' || month === 'December') {
        dayNum = 31;
    } else if (month === 'April' || month === 'June'
        || month === 'September' || month === 'November') {
        dayNum = 30;
    } else {
        //Check for a leap year
        if (new Date(year, 1, 29).getMonth() === 1) {
            dayNum = 29;
        } else {
            dayNum = 28;
        }
    }

    let toBeChange = document.getElementById("date").value;

    let cells = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        cells += "<div>" + "" + "</div>"
    }
    for (let i = 1; i <= dayNum; i++) {
        if (i == toBeChange) {
            cells += "<div class='highLight' id='color'>" + `${i}` + "</div>";
        } else {
            cells += "<div>" + `${i}` + "</div>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells
    
}

populateDays()

yearSelect.onchange = function () {
    populateDays(yearSelect.value)
}
monthSelect.onchange = function () {
    populateDays(monthSelect.value)
}

dateValue.onclick = function () {
    populateDays(date.value)
}




// let change = document.getElementById("enter").onclick = function () {

//     let date = document.getElementById("date").value;
//     console.log(date)

//     let changeColor = document.getElementById(`${date}`)

//     // console.log(color, date)

//     if (changeColor.style.background == "green") {
//         changeColor.style.background = "white"
//     }
//     else {
//         changeColor.style.background = "green"
//     }

// }