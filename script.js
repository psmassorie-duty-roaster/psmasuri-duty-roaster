let dutyData = JSON.parse(
    localStorage.getItem("dutyData")
) || [];


// Excel Upload

function uploadExcel(){

    let file = document.getElementById("excelFile").files[0];


    if(!file){

        document.getElementById("status").innerHTML =
        "❌ Excel File Select करें";

        return;

    }


    let reader = new FileReader();


    reader.onload = function(e){


        let data = new Uint8Array(e.target.result);


        let workbook = XLSX.read(data,{
            type:"array"
        });



        let sheet =
workbook.Sheets[workbook.SheetNames[0]];


// Excel को बिना header पढ़ना

let rows =
XLSX.utils.sheet_to_json(sheet,{
    header:1
});


// Header वाली row खोजना

let headerIndex =
rows.findIndex(row =>
    row.includes("पीएनओ न0")
);



if(headerIndex === -1){

    alert("Header नहीं मिला");
    return;

}


// Header और Data अलग करना

let headers = rows[headerIndex];


let dataRows =
rows.slice(headerIndex + 1);



dutyData =
dataRows.map(row=>{


let obj={};


headers.forEach((h,i)=>{

obj[h]=row[i] || "";

});


return obj;


});

        dutyData =
        XLSX.utils.sheet_to_json(sheet);



        localStorage.setItem(
            "dutyData",
            JSON.stringify(dutyData)
        );


        showTable(dutyData);



        document.getElementById("status").innerHTML =
        "✅ Excel Upload Done | Total Staff : "
        + dutyData.length;


    };


    reader.readAsArrayBuffer(file);

}




// Show Table

function showTable(data){


let tbody =
document.getElementById("tableBody");


tbody.innerHTML="";


data.forEach((item,index)=>{


tbody.innerHTML += `

<tr>

<td>${item["क्र0सं0"] || index+1}</td>

<td>${item["पीएनओ न0"] || ""}</td>

<td>${item["नाम अधि0/कर्म0गण"] || ""}</td>

<td>${item["मो0नं0"] || ""}</td>

<td>${item["डयूटी विवरण"] || ""}</td>

</tr>

`;


});


}





// Search

function searchData(){


let value =
document.getElementById("search")
.value
.toLowerCase();



let result =
dutyData.filter(item=>{


return JSON.stringify(item)
.toLowerCase()
.includes(value);


});



showTable(result);


}




// Load Saved Data

window.onload=function(){


if(dutyData.length>0){


showTable(dutyData);


document.getElementById("status").innerHTML =
"✅ Saved Data Loaded : "
+dutyData.length;


}


}
function createSectionFilter(){


let select =
document.getElementById("sectionFilter");


let sections=[];


dutyData.forEach(item=>{


let section =
item["शाखा"] || 
item["Section"] ||
item["ब्रांच"];


if(section && !sections.includes(section)){

sections.push(section);

}


});



sections.forEach(sec=>{


select.innerHTML += `

<option value="${sec}">
${sec}
</option>

`;

});


}
function filterSection(){


let value =
document
.getElementById("sectionFilter")
.value;



if(value==""){

showTable(dutyData);

return;

}



let result =
dutyData.filter(item=>{


return (
item["शाखा"] ||
item["Section"] ||
""
)
== value;


});



showTable(result);


}