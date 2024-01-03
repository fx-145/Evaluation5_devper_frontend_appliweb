/* Script evenementiel d'apparition du menu burger */
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0  */
function closeNav() {
  sidenav.classList.remove("active");
}


 $(document).ready(function(){
  $(function(){
  $('#formulaire').submit(function(e){
  e.preventDefault();
  var formulaire = $(this);
  var post_url = formulaire.attr('action');
  var post_data = formulaire.serialize();
  // On peut ajouter une image de chargement pour faire patienter l'internaute
  $('#loader3', formulaire).html('<img src=../../images/ajax-loader.gif />Please wait...');
  //Appel AJAX
  $.ajax({
  type: 'POST',
  url: post_url,
  data: post_data,
  success: function(msg) {
  //Affichage du formulaire avec un effet
  $(form).fadeOut(800, function(){
  form.html(msg).fadeIn().delay(2000);
  });
  }
  });
  });
  });
  });




//Page galerie: code javascript de filtre d'images dynamique
window.onload = () => {
  let filters = document.querySelectorAll("#filters div");

  for(let filter of filters){
      filter.addEventListener("click", function(){
          let tag = this.id;

          let images = document.querySelectorAll("#gallery img");

          for(let image of images){
              image.classList.replace("active", "inactive");

              if(tag in image.dataset || tag === "all"){
                  image.classList.replace("inactive", "active");
              }
          }
      });
  }
}