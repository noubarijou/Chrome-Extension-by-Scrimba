
let myLeads = [];
const inputEl = document.getElementById('input-el');
let ulEl = document.getElementById('ul-el');

const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    
})


for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}