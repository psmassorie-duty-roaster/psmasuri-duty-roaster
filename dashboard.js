let staff =
JSON.parse(localStorage.getItem("dutyData"))
|| [];



let leave =
JSON.parse(localStorage.getItem("leaveData"))
|| [];



let points =
JSON.parse(localStorage.getItem("dutyPoints"))
|| [];





document.getElementById("totalStaff")
.innerHTML =
staff.length;



document.getElementById("points")
.innerHTML =
points.length;



document.getElementById("leave")
.innerHTML =
leave.length;



document.getElementById("onDuty")
.innerHTML =
staff.length - leave.length;



let html="";



staff.slice(0,20)
.forEach((x)=>{


html+=`

<tr>

<td>
${x["पीएनओ न0"]||""}
</td>


<td>
${x["नाम अधि0/कर्म0गण"]||""}
</td>


<td>
ड्यूटी निर्धारित
</td>


<td>
✅ Present
</td>


</tr>


`;



});



document.getElementById("todayDuty")
.innerHTML=html;