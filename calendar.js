// let cells = "";

// for(let i=1; i<=30; i++){
//     cells += "<div>" + i + "</div>";
// }

// document.getElementsByClassName("days")[0].innerHTML = cells



let change = document.getElementById("enter").onclick = function () {
    
    let date = document.getElementById("date").value;

    let changeColor = document.getElementById(`${date}`)

    // console.log(color, date)
    
    if (changeColor.style.background == "green") {
        changeColor.style.background = "white"
    }
    else{
        changeColor.style.background = "green"
    }

}


