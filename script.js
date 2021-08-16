var billAmountTag = document.getElementById("bill-amount-input");
var cashGivenTag = document.getElementById("cash-given-input");

var button = document.getElementById("calculateBtn");

var billAmount = 0;
var cashGiven = 0;
function checkAndUpdateNote(value,note){

    var noOfNotes = Math.floor(value / note);
    if(noOfNotes > 0){
        document.getElementById(`${note}notes`).innerHTML = noOfNotes;
    } else{
        document.getElementById(`${note}notes`).innerHTML = "-";
    }
    return value - note*noOfNotes;
}

function calculateDenominations(){
    // console.log(typeof cashGiven );
    // if(=== "number");
    //     console.log(cashGiven,billAmount);
    if(isNaN(billAmount) || billAmount < 1){
        alert("enter valid bill amount");
        return;
    }else if(isNaN(cashGiven) || cashGiven < 1){
        alert("enter valid cash given");
        return;
    }

    cashGiven = parseInt(cashGiven);
    billAmount = parseInt(billAmount);

    if(cashGiven < billAmount){
        console.log(cashGiven,billAmount);
        alert("cash given cannot be less than bill amount");
        return;
    }
    
    var value = cashGiven - billAmount;
    document.getElementById("tableHeading").innerHTML = `Change to be Returned: ${value}`;
    console.log(cashGiven,billAmount,value);
    var arr = [2000,500,100,50,20,10,5,2,1];
    arr.forEach((note)=>{
        value = checkAndUpdateNote(value,note)
    })
;
    
}

billAmountTag.addEventListener('input',(event) => billAmount = event.target.value) ;
cashGivenTag.addEventListener('input',(event) => cashGiven = event.target.value );
button.addEventListener("click",calculateDenominations)
