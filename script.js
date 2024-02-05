
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

function myFunction() {
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

function myFunction() {
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