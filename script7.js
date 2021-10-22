// this is for puzzle 2 password box// 

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "male" , "MALE") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var btn = document.getElementById("myBtn");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
btn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://avakoala.github.io/EscapeRoomNarrative/files.JPG"; 
  captionText.innerHTML ="files";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}