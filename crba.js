//script for CRBA

function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
var test = true;  
while(test){
try {
document.querySelector('input[value="Make Appointment!"]').click();
await sleep(2000);
} catch (err) {
console.log("Encountered error. Please try again later: " + err);
}

try {
    document.querySelector('input[value="02B"]').click();
    await sleep(2000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}


try {
    document.querySelector('input[name="chkbox01"]').click();
    await sleep(2000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}

try {
    document.querySelector('input[value="Submit"]').click();
    await sleep(2000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}

try {
    document.getElementById("Select1").selectedIndex = 10; //nov
    await sleep(4000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}


try {
    document.getElementById("Select1").selectedIndex = 11; //december
    await sleep(4000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}


try {
    document.getElementById("Select2").selectedIndex = 1; // 2022
    await sleep(3000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}

try {
    document.getElementById("Select1").selectedIndex = 0; //jan
    await sleep(3000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}
    
     try {
        document.querySelector('tr> td.formfield[bgcolor="#ffffc0"] > a').click(); //click open slot
        await sleep(2000);
    } catch (err) {
      console.log("Encountered  error. Please try again later: " + err);
    }
    
      try{
        var slot =  document.querySelector('tr> td.formfield[bgcolor="#ffffc0"] > a'); 

if(slot != null){
//var location = document.querySelector("tr:nth-child(1) > td.tblheader").textContent;
	var head = document.querySelector("body > center > h3").textContent;
	
	
	 
    alert(head + " " + location); 
	console.log(head + " " + location); 
}
    }
    catch(err){
         console.log("Encountered  error. Please try again later: " + err);
    }
}
