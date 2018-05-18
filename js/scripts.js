$(document).ready(function () {
  // Get the btn-join
  var modal = document.getElementById('btn-join');

  // Get the button that opens the btn-join
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the btn-join
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the btn-join
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the btn-join
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the btn-join, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
function conf()
{
var con=confirm("Do you want to submit for sure?");
}
