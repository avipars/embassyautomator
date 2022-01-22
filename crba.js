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
}
