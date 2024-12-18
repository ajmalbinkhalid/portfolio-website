var tablinks = document.getElementById('tab-links');
var tabcontents = document.getElementById('tab-contents');

function Opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ----------side menu---------
var sidemenu = document.getElementById("sidemenu");
function Openmenu(){
    sidemenu.style.right = "0";
}
function Closemenu(){
    sidemenu.style.right = "-200px";
}
// ---------input field----------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwD8CdYNj-tskab21f3LRnjyDjR-i43t-KBEXzLJBB1ZNuUkWVEnT40dab8pmyakwVj/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
    })