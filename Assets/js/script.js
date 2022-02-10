function getSelectValue (){
var selectedValue = document.getElementById("selectMe").value;
console.log (selectedValue);
}






/*function isChecked () {
    var five = document.getElementById('5').checked;
    var ten = document.getElementById('10').checked;
    var fifteen = document.getElementById('15').checked;
    var twenty = document.getElementById('20').checked;

    if (five==false && ten==false && fifteen==false && twenty==false)(
        alert('please select a timer option'))
    return false;
    
}


/*$(document).ready(function (){
    $('.group').hide();
    $('#option5').show();
    $('#selectMe').change(function () {
        $('.group').hide();
        $('#'+$(this).val()).show();

    })
});*/


/*document
                .getElementById("selectMe")
                .addEventListener('change', function () {
                    'use strict';
                    var vis = document.querySelector('.vis'),   
                        selectMe = document.getElementById(this.value);
                    if (vis !== null) {
                        vis.className = 'inv';
                    }
                    if (selectMe !== null ) {
                        selectMe.className = 'vis';
                    }
            });*/




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function Droplist() {
    document.getElementByClass("dropdown-content").dropList.toggle("show");
  }
 function selectNumberofQ () {
     document.getElementById(" ").value;
 }


/*psuedocode
if an item is clicked then display this item and hide the others





  // Close the dropdown menu if the user clicks outside of it
  /*window.onclick = function(event) {
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
  }*/