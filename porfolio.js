const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbzYInetpkMpUEWIuajPjF0M1N2k78_ZqX-cHRJzWUnXNQzpBF4tUzLpRg-aem3LO3Z4/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
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




function downloadFile() {
  var confirmed = confirm("Do you want to download Bernard Bryan Blanco CV?");
  if (confirmed) {
    var link = document.createElement("a");
    link.href = "./images/Blanco, Bernard Bryan CV.pdf";
    link.download = "file.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("View CV")
  }
}
