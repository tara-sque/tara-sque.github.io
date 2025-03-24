
/* Slide out the collapsed parts*/
const coll = document.getElementsByClassName("collapsible");
const has_details = document.querySelectorAll(".withdeets");
const openscloses = document.querySelectorAll(".OpenClose");
let degrees = [];

for (let i=0; i< coll.length; i++){
  degrees.push(0);
}


for (let i=0; i< coll.length; i++){
  coll[i].addEventListener("click", function(){
    var details_to_change = has_details[i].querySelectorAll(".deets"); 
    for (let j=0; j<details_to_change.length; j++){
      if (details_to_change[j].style.display != 'inherit'){
        details_to_change[j].style.display='inherit';
      }
      else{
        details_to_change[j].style.display='none';
      }
    }
    degrees[i]+=180;
    openscloses[i].style = `transform: rotate(${degrees[i]}deg)`;
  });
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function DropDown() {
  var x = document.getElementById("flexnav");
  if (x.className === "rightnav") {
    x.className += " down";
  } else {
    x.className = "rightnav";
  }
} 

/* Opens the Pop up to get the CV*/

function OpenPopUp(){
  var x = document.getElementsByClassName("contactbox");
  x[0].style.display='block';
}

function ClosePopUp(){
  var x = document.getElementsByClassName("contactbox");
  x[0].style.display='none';
}