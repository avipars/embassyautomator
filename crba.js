//script for CRBA

function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
//crba
try {
document.querySelector('input[value="Make Appointment!"]').click();
await sleep(3000);
} catch (err) {
console.log("Encountered error. Please try again later: " + err);
}

try {
    document.querySelector('input[value="02B"]').click();
    await sleep(3000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}


try {
    document.querySelector('input[name="chkbox01"]').click();
    await sleep(3000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}

try {
    document.querySelector('input[value="Submit"]').click();
    await sleep(3000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}

try {
    document.querySelector('select[value="12"]').click();
    await sleep(3000);
} catch (err) {
  console.log("Encountered  error. Please try again later: " + err);
}

try {
    document.getElementById("Select1").selectedIndex = 11; //december
    await sleep(3000);
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
