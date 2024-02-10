//Creating a parallax effect,
//Grabbing Id from css/html and then assgning it to a variable. Then adjust each variable y value by wacthing scroll.
document.addEventListener('DOMContentLoaded', function () {
    let sky = document.getElementById('sky');
    let mainComputer = document.getElementById('mainComputer');
    let cloud = document.getElementById('cloud');
    let headText = document.getElementById('headText');
    let forest = document.getElementById('forest');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        cloud.style.left = value * 0.35 + 'px';
        sky.style.top =  value * 0.85 + 'px';
        mainComputer.style.top = value * 0.85 + 'px';
        headText.style.marginTop = value * 0.85 + 'px';

    });
});

//Creating a searchbar,
//Grabbing id and tag name from html/css and then filtering out rows by hiding rows that doesn't match search query.
//This is achieved by a for loop that checks over eahc tr/row, then selects td and store it inside txtValue.
//Then check if txtValue matches the searchfilter/seqrch quries. Then proceed to show/hide the rows if it amtches or not.
function searchBar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

//Creating a dropdown button,
//Toggles show and hide by using a window event listen, listening if the user click on the class dropbtn.
//If event matches dropbtn, then show dropdown.
function dropbtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Creates a filter elements,
//First check if the document is fully loaded then calls filterSelection(all), this display all the row.
//Takes a parameter of c then selects all row through the class filterRow within the id myTable. Then check if the row equal to c, if yes then shows all.
//Otherwise, the row is hidden.
document.addEventListener("DOMContentLoaded", function () {
  filterSelection("all");
});

function filterSelection(c) {
  var rows = document.querySelectorAll("#myTable tr.filterRow");

  rows.forEach(function(row) {
      //Annif atatement that if category (c) equals to all or
      //get set equal to a class in the html by function elementsGetter. 
      //Toggle on and off for the row display.
      if (c === "all" || row.classList.contains(c)) {
          row.style.display = "";
      } else {
          row.style.display = "none";
      }
  });
}

//Uses a click event listner that if a button within the dropdown or class myBtnContainer is clicked.
// Then remove any pre-existing active class then reassign the active class to the clicked button.
//Checks the content of button, like text. Trim any spaces. Then send it to filterSelection variable/parameter c.
function elementGetter() {
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByTagName("button");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      var current = btnContainer.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      var country = this.textContent.trim();
      filterSelection(c);
  });
}
}
