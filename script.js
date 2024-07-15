
function showAbout() { 
  document.getElementById('academic').style.display = 'none';
  document.getElementById('fees').style.display = 'none';
  document.getElementById('about').style.display = 'block';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('star').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}


function showAcademic() {
  document.getElementById('academic').style.display = 'block';
  document.getElementById('fees').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('star').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  
}
       
function showFees() {
  document.getElementById('academic').style.display = 'none';
  document.getElementById('fees').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('star').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}
  
  

function showGallery() {
  document.getElementById('academic').style.display = 'none';
  document.getElementById('fees').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
  document.getElementById('star').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

function showStar() {
  document.getElementById('academic').style.display = 'none';
  document.getElementById('fees').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('star').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
}

function showContact() {
  document.getElementById('academic').style.display = 'none';
  document.getElementById('fees').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('star').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
}
function keshav() {
document.querySelectorAll(".image-container img").forEach(image =>{
   image.onclick = () =>{
      document.querySelector(".popup-image").style.display = "block";
      document.querySelector(".popup-image img").src = image.getAttribute("src");
     }
});
document.querySelector(".popup-image span").onclick = () =>{
  document.querySelector(".popup-image").style.display = "none";
}
}

function solanki() {
  document.querySelectorAll(".image-container2 img").forEach(image =>{
     image.onclick = () =>{
        document.querySelector(".popup-image2").style.display = "block";
        document.querySelector(".popup-image2 img").src = image.getAttribute("src");
       }
  });
  document.querySelector(".popup-image2 span").onclick = () =>{
    document.querySelector(".popup-image2").style.display = "none";
  }
  }
