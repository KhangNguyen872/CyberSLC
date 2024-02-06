
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

document.addEventListener("DOMContentLoaded", function () {
  filterSelection("all");
});

function filterSelection(c) {
  var rows = document.querySelectorAll("#myTable tr.filterRow");

  rows.forEach(function(row) {
      if (c === "all" || row.classList.contains(c)) {
          row.style.display = "";
      } else {
          row.style.display = "none";
      }
  });
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByTagName("button");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      var current = btnContainer.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      var country = this.textContent.trim();
      filterSelection(country);
  });
}
