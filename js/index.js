
let myLeads = ['awesomelead', 'epiclead', 'greatlead'];
const inputEl = document.getElementById('input-el');
let ulEl = document.getElementById('ul-el');

const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    
})


for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}