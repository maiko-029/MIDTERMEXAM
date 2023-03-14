
var svebtn = document.getElementById("btnsave");
var clrallbtn = document.getElementById("btnclear");
var clrbtn = document.getElementById("btnClear");
var inputs = document.querySelectorAll("input");
var tblRecords = document.getElementById("tblrecords");
var noRecords = document.getElementById("status");
var headrow = document.createElement("tr");
var results = [];
var editingIndex = -1;

for (let i = 0; i < inputs.length + 1; i++) {
    let headtbl = document.createElement("th");
    headtbl.style.padding = "5px 15px";
    headtbl.style.borderTop = "1px solid black";
    headtbl.style.borderBottom = "1px solid black";
    if (i > 0) {
        headtbl.style.borderLeft = "1px solid black";
    }
    if (i < 7) {
        headtbl.style.borderRight = "1px solid black";
    }
    if (i == 0) {
        headtbl.innerText = "First Name";
    } else if (i == 1) {
        headtbl.innerText = "Middle Name";
    } else if (i == 2) {
        headtbl.innerText = "Last Name";
    } else if (i == 3) {
        headtbl.innerText = "Web Tech";
    } else if (i == 4){
        headtbl.innerText = "OOP";
    }else if (i == 5){
        headtbl.innerText = "Networking 2";
    }else if (i == 6){
        headtbl.innerText = "HCI 1";
    }else if (i == 7){
        headtbl.innerText = "HCI 2";
    }else {
        headtbl.innerText = "Average";
    }
    headrow.appendChild(headtbl);
}


svebtn.addEventListener("click", (e) => {
    let fname, mname, lname, webtech,oop,networking2,hci1,hci2;

    if (results.length === 0) {
       tblRecords.appendChild(headrow);
    }

    for (let i = 0; i < inputs.length; i++) {
        switch (inputs[i].name) {
            case "Fname": {
                fname = inputs[i].value;
                break;
            }
            case "Mname": {
                mname = inputs[i].value;
                break;
            }
            case "Lname": {
                lname = inputs[i].value;
                break;
            }
            case "Webtech": {
                webtech = Number.parseInt(inputs[i].value);
                break;
            }
            case "Oop": {
                oop = Number.parseInt(inputs[i].value);
                break;
            }
            case "Networking2": {
                networking2 = Number.parseInt(inputs[i].value);
                break;
            }
            case "Hci1": {
                hci1 = Number.parseInt(inputs[i].value);
                break;
            }
            case "Hci2": {
                hci2 = Number.parseInt(inputs[i].value);
                break;
            }
            
        }
    }

    if (editingIndex < 0) {
        
        let row = document.createElement("tr");
        let cols = [];
        
        
 
        for (let i = 0; i < 9; i++) {
            cols[i] = document.createElement("td");
            cols[i].style.padding = "5px 15px";
            cols[i].style.borderTop = "1px solid black";
            cols[i].style.borderBottom = "1px solid black";
            if (i > 0) {
                cols[i].style.borderLeft = "1px solid black";
            }
            if (i < 8) {
                cols[i].style.borderRight = "1px solid black";
            }
            
        }
        cols[0].innerText = fname;
        cols[1].innerText = mname;
        cols[2].innerText = lname;
        cols[3].innerText = webtech;
        cols[4].innerText = oop;
        cols[5].innerText = networking2;
        cols[6].innerText = hci1;
        cols[7].innerText = hci2;
        
        
        row.appendChild(cols[0]);
        row.appendChild(cols[1]);
        row.appendChild(cols[2]);
        row.appendChild(cols[3]);
        row.appendChild(cols[4]);
        row.appendChild(cols[5]);
        row.appendChild(cols[6]);
        row.appendChild(cols[7]);

        

        let values = [webtech,oop,networking2,hci1,hci2].map(function(value){
            return Number.parseInt(value);
        });
        let sum = 0 ;
        for(let i = 0; i < values.length; i++){
            sum += values[i];
        }

        let average = sum / values.length;
        cols[8].innerText = average;
        row.appendChild(cols[8]);
    
        tblRecords.appendChild(row);
        results.push(row);
        
        
        
    } 
});

clrbtn.addEventListener("click", (e) => {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    
});

clrallbtn.addEventListener("click", (e) => {
    console.log(results, results.length);
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
        tblRecords.removeChild(results[i]);
    }
    tblRecords.removeChild(headrow);
    resultrow = [];
    editingIndex = -1;
    
    noRecords.innerText = "No records";
})

