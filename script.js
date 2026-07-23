let dutyData = JSON.parse(
localStorage.getItem("dutyData")
) || [];


// Excel Upload

function uploadExcel(){


let file =
document.getElementById("excelFile").files[0];


if(!file){

alert("Excel File Select करें");
return;

}



let reader = new FileReader();



reader.onload=function(e){


let data =
new Uint8Array(e.target.result);



let workbook =
XLSX.read(data,{
type:"array"
});



let sheet =
workbook.Sheets[
workbook.SheetNames[0]
];



let rows =
XLSX.utils.sheet_to_json(
sheet,
{
defval:""
}
);



if(rows.length==0){

alert("Excel Data नहीं मिला");
return;

}



dutyData =
rows.map((row,index)=>{


return {


no:index+1,


section:
findValue(row,
[
"शाखा",
"चौकी",
"Section"
]),



pno:
findValue(row,
[
"पीएनओ",
"PNO",
"पीएनओ न0"
]),



name:
findValue(row,
[
"नाम",
"नाम अधि0/कर्म0गण",
"Name"
]),



mobile:
findValue(row,
[
"मो0नं0",
"Mobile",
"मोबाइल"
]),



duty:
findValue(row,
[
"ड्यूटी विवरण",
"डयूटी विवरण",
"Duty"
])



};


});




localStorage.setItem(
"dutyData",
JSON.stringify(dutyData)
);



showTable(dutyData);



document.getElementById("status")
.innerHTML=
"✅ Upload Successful : "
+dutyData.length+
" कर्मचारी";



};



reader.readAsArrayBuffer(file);


}





// Header Search

function findValue(row,keys){


for(let k of keys){


if(row[k]!==undefined){

return row[k];

}


}



return "";

}





// Table Show


function showTable(data){


let tbody =
document.getElementById("tableBody");


tbody.innerHTML="";



data.forEach(x=>{


tbody.innerHTML+=`

<tr>

<td>${x.no}</td>

<td>${x.section}</td>

<td>${x.pno}</td>

<td>${x.name}</td>

<td>${x.mobile}</td>

<td>${x.duty}</td>


</tr>


`;



});


}





// Search


function searchData(){


let val =
document
.getElementById("search")
.value
.toLowerCase();



let result =
dutyData.filter(x=>{


return JSON.stringify(x)
.toLowerCase()
.includes(val);


});



showTable(result);


}





window.onload=function(){


showTable(dutyData);


}